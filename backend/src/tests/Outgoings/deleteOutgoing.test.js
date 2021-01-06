import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import {
  urlPrefixOutgoings,
  urlPrefixAccounts,
  urlPrefixUser,
  demoUser,
  demoAccount,
  demoOutgoingRecord,
} from '../helpers';

const request = supertest(app);

setupDB();

describe('Outgoings delete outgoing record test', () => {
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

    const outgoingRecordID = await request
      .post(urlPrefixOutgoings + '/add')
      .send(demoOutgoingRecord)
      .set('auth-token', token);

    id = outgoingRecordID.body.record.id;
  });

  it('POST Delete outgoing record', async (done) => {
    const res = await request
      .post(urlPrefixOutgoings + '/delete')
      .send({ id: id })
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success outgoing delete !');

    const user = await User.findOne({ email: demoUser.email });

    expect(user.accounts[0].value).toBe(500);
    expect(user.outgoings.length).toBe(0);

    done();
  });
});
