import app from '../server';
import User from '../model/User';
import supertest from 'supertest';
const { setupDB } = require('../test-setup');

const request = supertest(app);

setupDB();

describe('Outgoing tests', () => {
  let id;
  let token;
  const demoUser = {
    name: 'Johny Outgoing',
    email: 'johny@outgoing.com',
    password: 'johny11',
  };
  const demoAccount = {
    name: 'Konto Testowe 1',
    value: 1000,
  };
  const demoRecord = {
    date: '12.12.2021',
    account: 'Konto Testowe 1',
    category: 'Jedzenie',
    value: 500,
  };

  beforeAll(async () => {
    await request.post('/api/user/register').send(demoUser);
    const user = await request
      .post('/api/user/login')
      .send({ email: demoUser.email, password: demoUser.password });
    token = user.body;

    await request.post('/api/accounts/add').send(demoAccount).set('auth-token', token);
  });

  it('POST Add account sucesfull', async (done) => {
    const res = await request.post('/api/outgoings/add').send(demoRecord).set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success outgoing add');

    id = res.body.record._id;

    done();
  });

  it('POST Delete account sucesfull', async (done) => {
    const res = await request
      .post('/api/outgoings/delete')
      .send({ id: id })
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body).toBe('Success outgoing delete !');

    done();
  });
});
