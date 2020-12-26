const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
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
  // const { error } = outgoingsAddValidation(body);
  // if (error) return res.status(400).send(error.details[0].message);

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: body.transferFromAccount } },
  });

  const { transferFromAccount, transferToAccount, transferValue } = body;

  const fromAccountValue = userObject.accounts.find(
    (el) => el.accountName === body.transferFromAccount,
  ).accountValue;

  const toAccountValue = userObject.accounts.find((el) => el.accountName === body.transferToAccount)
    .accountValue;

  const newFromAccountValue = parseFloat(fromAccountValue) - parseFloat(transferValue);
  const newToAccountValue = parseFloat(toAccountValue) + parseFloat(transferValue);

  body._id = ObjectID();

  try {
    await User.updateOne({ _id: user }, { $push: { transfers: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.accountName': transferFromAccount,
      },
      { $set: { 'accounts.$.accountValue': newFromAccountValue } },
    );

    await User.updateOne(
      {
        _id: user,
        'accounts.accountName': transferToAccount,
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
  const transferRecordExist = await User.findOne({
    _id: user,
    transfers: { $elemMatch: { _id: ObjectID(body.id) } },
  });
  if (!transferRecordExist) return res.status(400).send(`Transfer record is not exist !`);

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { transfers: { _id: ObjectID(body.id) } } },
    );

    res.status(200).send(`Success transfer delete !`);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
