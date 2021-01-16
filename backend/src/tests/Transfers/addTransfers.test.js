import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import {
  urlPrefixTransfers,
  urlPrefixAccounts,
  urlPrefixUser,
  demoUser,
  demoAccount,
  demoAccount_2,
  demoTransferRecord_1,
  demoTransferRecord_2,
} from '../helpers';

const request = supertest(app);

setupDB();

describe('Transfers add tests', () => {
  let token;

  beforeAll(async () => {
    await request.post(urlPrefixUser + '/register').send(demoUser);
    const user = await request
      .post(urlPrefixUser + '/login')
      .send({ email: demoUser.email, password: demoUser.password });
    token = user.body.token;

    await request
      .post(urlPrefixAccounts + '/add')
      .send(demoAccount)
      .set('auth-token', token);

    await request
      .post(urlPrefixAccounts + '/add')
      .send(demoAccount_2)
      .set('auth-token', token);
  });

  it('POST succesfull transfer 1 record added', async (done) => {
    const res = await request
      .post(urlPrefixTransfers + '/add')
      .send(demoTransferRecord_1)
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success transfer add');

    const user = await User.findOne({ email: demoUser.email });
    expect(user.transfers.length).toBe(1);
    expect(user.transfers[0].value).toBe(demoTransferRecord_1.value);

    expect(user.accounts[0].value).toBe(500);
    expect(user.accounts[1].value).toBe(2500);

    done();
  });

  it('POST succesfull transfer 2 record added', async (done) => {
    const res = await request
      .post(urlPrefixTransfers + '/add')
      .send(demoTransferRecord_2)
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success transfer add');

    const user = await User.findOne({ email: demoUser.email });
    expect(user.transfers.length).toBe(2);
    expect(user.transfers[1].value).toBe(demoTransferRecord_2.value);

    expect(user.accounts[0].value).toBe(1500);
    expect(user.accounts[1].value).toBe(1500);

    done();
  });
});
