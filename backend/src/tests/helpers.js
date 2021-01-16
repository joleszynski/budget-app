export const urlPrefixUser = '/api/user';
export const urlPrefixAccounts = '/api/accounts';
export const urlPrefixOutgoings = '/api/outgoings';
export const urlPrefixIncomes = '/api/incomes';
export const urlPrefixTransfers = '/api/transfers';
export const demoUser = {
  name: 'Johny',
  email: 'johny@test.com',
  password: 'johny11',
};
export const demoAccount = {
  name: 'Konto Testowe 1',
  value: 1000,
};
export const demoAccount_2 = {
  name: 'Konto Testowe 2',
  value: 2000,
};
export const demoOutgoingRecord = {
  date: '12.12.2021',
  account: 'Konto Testowe 1',
  category: 'Jedzenie',
  value: 500,
};
export const demoIncomeRecord = {
  date: '12.12.2021',
  account: 'Konto Testowe 1',
  category: 'Wypłata',
  value: 500,
};
export const demoTransferRecord_1 = {
  date: '12.12.2021',
  from: 'Konto Testowe 1',
  to: 'Konto Testowe 2',
  value: 500,
};
export const demoTransferRecord_2 = {
  date: '12.12.2021',
  from: 'Konto Testowe 2',
  to: 'Konto Testowe 1',
  value: 1000,
};
