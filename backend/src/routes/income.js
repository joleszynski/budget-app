const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const User = require('../model/User');
const verify = require('./verifyToken');
const { addValidation, deleteValidation } = require('../validation/income');

// Get all transfers list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { income } = await User.findOne({ _id: user });
    res.status(200).json(income);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/add', verify, async (req, res) => {
  const { body, user } = req;
  const { account, value } = body;

  body._id = ObjectID();

  //VALIDATION DATA
  const { error } = addValidation(body);
  if (error) return res.status(400).send(error.details[0].message);

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { name: account } },
  });

  const currentValue = userObject.accounts.find((el) => el.name === account).value;

  const newValue = parseFloat(currentValue) + parseFloat(value);

  try {
    await User.updateOne({ _id: user }, { $push: { income: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.name': account,
      },
      { $set: { 'accounts.$.value': newValue } },
    );
    res.status(200).json('Success income add');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/delete', verify, async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA
  const { error } = deleteValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  // Check if the outgoing record exist
  const incomeRecordExist = await User.findOne({
    _id: user,
    income: { $elemMatch: { _id: ObjectID(body.id) } },
  });
  if (!incomeRecordExist) return res.status(400).json(`Income record is not exist !`);

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { income: { _id: ObjectID(body.id) } } },
    );

    res.status(200).json(`Success income delete !`);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
