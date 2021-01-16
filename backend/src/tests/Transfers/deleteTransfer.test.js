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
} from '../helpers';

const request = supertest(app);

setupDB();

describe('Transfers add tests', () => {
  let token;
  let id;

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

    const transferRecordID = await request
      .post(urlPrefixTransfers + '/add')
      .send(demoTransferRecord_1)
      .set('auth-token', token);

    id = transferRecordID.body.record.id;
  });

  it('POST succesfull transfer record delete', async (done) => {
    const res = await request
      .post(urlPrefixTransfers + '/delete')
      .send({ id: id })
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success transfer delete !');

    const user = await User.findOne({ email: demoUser.email });
    expect(user.transfers.length).toBe(0);

    expect(user.accounts[0].value).toBe(1000);
    expect(user.accounts[1].value).toBe(2000);

    done();
  });
});
