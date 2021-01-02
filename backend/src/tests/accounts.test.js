import app from '../server';
import User from '../model/User';
import supertest from 'supertest';
const { setupDB } = require('../test-setup');

const request = supertest(app);

setupDB();

describe('Account tests', () => {
  let token;
  let id;

  const prefixUrl = '/api/accounts';
  const demoUser = {
    name: 'Johny Account',
    email: 'johny@account.com',
    password: 'johny11',
  };
  const demoAccount = {
    name: 'Konto Testo 1',
    value: 1000,
  };

  // Add demo user to tests
  beforeAll(async () => {
    await request.post('/api/user/register').send(demoUser);
    const res = await request
      .post('/api/user/login')
      .send({ email: demoUser.email, password: demoUser.password });

    token = res.body;
  });

  describe('Verify token', () => {
    it('GET Account list access denied', async (done) => {
      const res = await request.get(prefixUrl);

      expect(res.status).toBe(401);
      expect(res.body).toBe('Access Denied');

      done();
    });

    it('GET Account list valid token', async (done) => {
      const res = await request.get(prefixUrl).set('auth-token', '1234');

      expect(res.status).toBe(400);
      expect(res.body).toBe('Valid Token');

      done();
    });
  });

  describe('Account crud', () => {
    it('POST Add account successfull', async (done) => {
      const res = await request
        .post(prefixUrl + '/add')
        .set('auth-token', token)
        .send(demoAccount);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Account added successfully !');

      id = res.body.account._id;

      const user = await User.findOne({ name: demoUser.name });
      const accounts = user.accounts;

      expect(accounts.length).toBe(1);
      expect(accounts[0].name).toBe(demoAccount.name);

      done();
    });

    it('POST Delete account successfull', async (done) => {
      const res = await request
        .post(prefixUrl + '/delete')
        .set('auth-token', token)
        .send({ id: id });

      expect(res.status).toBe(200);
      expect(res.body).toBe('The account has been deleted');

      const user = await User.findOne({ name: demoUser.name });
      const accounts = user.accounts;

      expect(accounts.length).toBe(0);

      done();
    });
  });
});
