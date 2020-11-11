const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');
const { accountAddValidation, accountDeleteValidation } = require('../validation/accounts');

// Get all accounts list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { accounts } = await User.findOne({ _id: user });
    res.status(200).send(accounts);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add account in user accounts
router.post('/add', verify, async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA
  const { error } = accountAddValidation(body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the accountName is already in user accounts
  const accountExist = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: body.accountName } },
  });
  if (accountExist) return res.status(400).send('Account name already exist');

  try {
    //Add account
    await User.updateOne({ _id: user }, { $push: { accounts: body } });
    res.status(200).send('The account has been added');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/delete', verify, async (req, res) => {
  const { body, user } = req;
  // //VALIDATION DATA
  const { error } = accountDeleteValidation(body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the accountName is already in user accounts
  const accountExist = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: body.accountName } },
  });
  if (!accountExist) return res.status(400).send('Account is not exist');

  try {
    // Delete account
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { accounts: { accountName: body.accountName } } },
    );
    res.status(200).send('The account has been deleted');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
