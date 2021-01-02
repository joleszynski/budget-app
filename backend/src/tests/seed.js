import User from '../model/User';
const { setupDB } = require('../test-setup');

setupDB(true);

it('Seeding test', async (done) => {
  const users = await User.find({});
  expect(users.length).toBeGreaterThan(0);

  done();
});
