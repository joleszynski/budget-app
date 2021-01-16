import app from '../../server';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import { urlPrefixTransfers, urlPrefixUser, demoUser } from '../helpers';

const request = supertest(app);

setupDB();

describe('Transfers list tests', () => {
  let token;
  beforeAll(async () => {
    await request.post(urlPrefixUser + '/register').send(demoUser);
    const user = await request
      .post(urlPrefixUser + '/login')
      .send({ email: demoUser.email, password: demoUser.password });
    token = user.body.token;
  });

  it('GET transfers list', async (done) => {
    const res = await request.get(urlPrefixTransfers + '/').set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.transfers).toStrictEqual([]);

    done();
  });
});
