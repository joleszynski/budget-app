const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const { body } = require('express-validator');
const User = require('../model/User');
const verify = require('./verifyToken');
const { outgoingsAddValidation, outgoingsDeleteValidation } = require('../validation/outgoings');

// Get all transfers list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { outgoings } = await User.findOne({ _id: user });
    res.status(200).send(outgoings);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/add', verify, async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA
  const { error } = outgoingsAddValidation(body);
  if (error) return res.status(400).send(error.details[0].message);

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { accountName: body.outgoingCategoryName } },
  });

  const currentAccountValue = userObject.accounts.find(
    (el) => el.accountName === body.outgoingCategoryName,
  ).accountValue;

  const newAccountValue = parseFloat(currentAccountValue) - parseFloat(body.outgoingValue);

  body._id = ObjectID();

  console.log(newAccountValue);

  try {
    await User.updateOne({ _id: user }, { $push: { outgoings: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.accountName': body.outgoingCategoryName,
      },
      { $set: { 'accounts.$.accountValue': newAccountValue } },
    );
    res.status(200).send('Success outgoing add');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/delete', verify, async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA

  // Check if the outgoing record exist
  const outgoingRecordExist = await User.findOne({
    _id: user,
    outgoings: { $elemMatch: { _id: ObjectID(body.id) } },
  });
  if (!outgoingRecordExist) return res.status(400).send(`Outgoing record is not exist !`);

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { outgoings: { _id: ObjectID(body.id) } } },
    );

    res.status(200).send(`Success outgoing delete !`);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
