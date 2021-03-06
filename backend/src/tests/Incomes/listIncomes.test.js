import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import { urlPrefixIncomes, urlPrefixUser, demoUser } from '../helpers';

const request = supertest(app);

setupDB();

describe('Incomes list tests', () => {
  let token;
  beforeAll(async () => {
    await request.post(urlPrefixUser + '/register').send(demoUser);
    const user = await request
      .post(urlPrefixUser + '/login')
      .send({ email: demoUser.email, password: demoUser.password });
    token = user.body.token;
  });

  it('GET outgoings list', async (done) => {
    const res = await request.get(urlPrefixIncomes + '/').set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.incomes).toStrictEqual([]);

    done();
  });
});
