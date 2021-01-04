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
    name: 'Johny Income',
    email: 'johny@income.com',
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

  it('POST Add income record', async (done) => {
    const res = await request.post('/api/income/add').send(demoRecord).set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body).toBe('Success income add');

    const user = await User.findOne({ email: demoUser.email });
    expect(user.income.length).toBe(1);

    done();
  });
});
