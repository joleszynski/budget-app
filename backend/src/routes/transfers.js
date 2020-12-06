const router = require('express').Router();
const { body } = require('express-validator');
const User = require('../model/User');
const verify = require('./verifyToken');

// Get all transfers list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { transfers } = await User.findOne({ _id: user });
    res.status(200).send(transfers);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/add', verify, async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: body.accountName } },
  });

  const currentAccountValue = userObject.accounts.find((el) => el.accountName === body.accountName)
    .accountValue;

  const newAccountValue = parseInt(currentAccountValue) - parseInt(body.accountValue);

  await User.updateOne(
    {
      _id: user,
      'accounts.accountName': body.accountName,
    },
    { $set: { 'accounts.$.accountValue': newAccountValue } },
  );

  const newUserObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: body.accountName } },
  });

  res.status(200).send(newUserObject);
});

module.exports = router;
