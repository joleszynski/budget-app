import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import { urlPrefixAccounts, urlPrefixUser, demoUser } from '../helpers';

const request = supertest(app);

setupDB();

describe('Accounts list tested', () => {
  let token;
  beforeAll(async () => {
    await request.post(urlPrefixUser + '/register').send(demoUser);
    const res = await request
      .post('/api/user/login')
      .send({ email: demoUser.email, password: demoUser.password });

    token = res.body.token;
  });

  it('GET Accounts list empty', async (done) => {
    const res = await request.get(urlPrefixAccounts + '/').set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.accounts).toStrictEqual([]);
    done();
  });
});
