const router = require('express').Router();
const ObjectID = require('mongodb').ObjectID;
const User = require('../model/User');
const verify = require('./verifyToken');
const { addValidation, deleteValidation } = require('../validation/outgoings');

// Get all transfers list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { outgoings } = await User.findOne({ _id: user });
    res.status(200).json(outgoings);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/add', verify, async (req, res) => {
  const { body, user } = req;

  body._id = ObjectID();

  //VALIDATION DATA
  const { error } = addValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { name: body.account } },
  });

  const currentValue = userObject.accounts.find((el) => el.name === body.account).value;

  const newValue = parseFloat(currentValue) - parseFloat(body.value);

  try {
    await User.updateOne({ _id: user }, { $push: { outgoings: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.name': body.account,
      },
      { $set: { 'accounts.$.value': newValue } },
    );
    res.status(200).json({ message: 'Success outgoing add', record: body });
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
  const outgoingRecordExist = await User.findOne({
    _id: user,
    outgoings: { $elemMatch: { _id: ObjectID(body.id) } },
  });
  if (!outgoingRecordExist) return res.status(400).json(`Outgoing record is not exist !`);

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { outgoings: { _id: ObjectID(body.id) } } },
    );

    res.status(200).json(`Success outgoing delete !`);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
