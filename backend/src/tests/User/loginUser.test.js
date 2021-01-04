import app from '../../server';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import { urlPrefixUser, demoUser } from '../helpers';

const request = supertest(app);

setupDB();

describe('Login tests', () => {
  beforeAll(async () => {
    await request.post(urlPrefixUser + '/register').send(demoUser);
  });

  it('POST Login successfull', async (done) => {
    const res = await request
      .post(urlPrefixUser + '/login')
      .send({ email: demoUser.email, password: demoUser.password });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeTruthy();

    done();
  });
});
