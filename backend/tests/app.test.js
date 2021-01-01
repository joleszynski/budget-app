import app from '../src/server';
import supertest from 'supertest';
import User from '../src/model/User';
const { setupDB } = require('./test-setup');

const request = supertest(app);

setupDB();

// it('gets the test endpoint', async (done) => {
//   const response = await request.get('/test');

//   expect(response.status).toBe(200);
//   expect(response.body.message).toBe('pass!');
//   done();
// });

describe('Auth tests', () => {
  const demoUser = {
    name: 'Johny  Silverhand',
    email: 'johny@silverhand.com',
    password: 'johny11',
  };

  let token;
  it('POST register use', async (done) => {
    const response = await request.post('/api/user/register').send(demoUser);

    expect(response.status).toBe(200);
    expect(response.body).toBe('Registered successfull !');

    const user = await User.findOne({ email: demoUser.email });

    expect(user.name).toBeTruthy();
    expect(user.email).toBeTruthy();

    done();
  });

  it('POST login user', async (done) => {
    const response = await request
      .post('/api/user/login')
      .send({ email: demoUser.email, password: demoUser.password });

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    token = response.body;

    done();
  });

  it('GET outgoings list', async (done) => {
    const response = await request.get('/api/outgoings').set({ 'auth-token': token });

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([]);

    done();
  });
});
