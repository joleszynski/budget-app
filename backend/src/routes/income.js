const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const { body } = require('express-validator');
const User = require('../model/User');
const verify = require('./verifyToken');

// Get all transfers list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { income } = await User.findOne({ _id: user });
    res.status(200).send(income);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/add', verify, async (req, res) => {
  const { body, user } = req;
  const { incomeToAccount, incomeValue } = body;

  //VALIDATION DATA
  // const { error } = outgoingsAddValidation(body);
  // if (error) return res.status(400).send(error.details[0].message);

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: incomeToAccount } },
  });

  const currentAccountValue = userObject.accounts.find((el) => el.accountName === incomeToAccount)
    .accountValue;

  const newToAccountValue = parseFloat(currentAccountValue) + parseFloat(incomeValue);

  body._id = ObjectID();

  try {
    await User.updateOne({ _id: user }, { $push: { income: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.accountName': incomeToAccount,
      },
      { $set: { 'accounts.$.accountValue': newToAccountValue } },
    );
    res.status(200).send('Success transfer add');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/delete', verify, async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA

  // Check if the outgoing record exist
  const incomeRecordExist = await User.findOne({
    _id: user,
    income: { $elemMatch: { _id: ObjectID(body.id) } },
  });
  if (!incomeRecordExist) return res.status(400).send(`Income record is not exist !`);

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { income: { _id: ObjectID(body.id) } } },
    );

    res.status(200).send(`Success income delete !`);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
