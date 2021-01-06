import app from '../../server';
import User from '../../model/User';
import supertest from 'supertest';
import { setupDB } from '../../config/test-setup';
import {
  urlPrefixIncomes,
  urlPrefixAccounts,
  urlPrefixUser,
  demoUser,
  demoAccount,
  demoIncomeRecord,
} from '../helpers';

const request = supertest(app);

setupDB();

describe('Outgoings add tests', () => {
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

    const incomeRecordID = await request
      .post(urlPrefixIncomes + '/add')
      .send(demoIncomeRecord)
      .set('auth-token', token);

    id = incomeRecordID.body.record.id;
  });

  it('POST succesfull income record delete', async (done) => {
    const res = await request
      .post(urlPrefixIncomes + '/delete')
      .send({ id: id })
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success income delete !');

    const user = await User.findOne({ email: demoUser.email });
    expect(user.incomes.length).toBe(0);

    expect(user.accounts[0].value).toBe(1500);

    done();
  });
});
