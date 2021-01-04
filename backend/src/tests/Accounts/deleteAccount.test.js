import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import { urlPrefixAccounts, urlPrefixUser, demoUser, demoAccount } from '../helpers';

const request = supertest(app);

setupDB();

describe('Accounts add tests', () => {
  let token;
  let id;
  beforeAll(async () => {
    await request.post(urlPrefixUser + '/register').send(demoUser);
    const res = await request
      .post('/api/user/login')
      .send({ email: demoUser.email, password: demoUser.password });

    token = res.body.token;

    const accountID = await request
      .post(urlPrefixAccounts + '/add')
      .set('auth-token', token)
      .send(demoAccount);

    id = accountID.body.account._id;
  });

  it('POST Add account successfull', async (done) => {
    const res = await request
      .post(urlPrefixAccounts + '/delete')
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
