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
  });

  it('POST succesfull outgoing record added', async (done) => {
    const res = await request
      .post(urlPrefixIncomes + '/add')
      .send(demoIncomeRecord)
      .set('auth-token', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Success income add');

    const user = await User.findOne({ email: demoUser.email });
    expect(user.incomes.length).toBe(1);
    expect(user.incomes[0].name).toBe(demoIncomeRecord.name);

    expect(user.accounts[0].value).toBe(1500);

    done();
  });
});
