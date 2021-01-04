import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import { urlPrefixUser, demoUser } from '../helpers';

const request = supertest(app);

setupDB();

describe('Can User is created', () => {
  it('POST  User registration', async (done) => {
    const res = await request.post(urlPrefixUser + '/register').send(demoUser);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Registered successfull !');

    const user = await User.findOne({ email: demoUser.email });

    expect(user.name).toBe(demoUser.name);

    done();
  });

  it('POST  Email is already exist', async (done) => {
    const res = await request.post(urlPrefixUser + '/register').send(demoUser);

    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Email is already exist.');

    done();
  });

  it('POST  Empty user data', async (done) => {
    const res = await request.post(urlPrefixUser + '/register').send({});

    expect(res.status).toBe(400);

    done();
  });
});
