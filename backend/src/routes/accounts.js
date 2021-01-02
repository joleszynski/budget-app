import User from '../model/User';
import verify from './verifyToken';
const { accountAddValidation, accountDeleteValidation } = require('../validation/accounts');

const ObjectID = require('mongodb').ObjectID;
const router = require('express').Router();

// Get all accounts list from User
router.get('/', verify, async (req, res) => {
  const { user } = req;

  try {
    const { accounts } = await User.findOne({ _id: user });
    res.status(200).json(accounts);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add account in user accounts
router.post('/add', verify, async (req, res) => {
  const { body, user } = req;

  body._id = ObjectID();

  //VALIDATION DATA
  const { error } = accountAddValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  const { value } = body;
  body.value = parseFloat(value);

  // Check if the accountName is already in user accounts
  const accountExist = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { name: body.name } },
  });
  if (accountExist) return res.status(200).json('Account name already exist');

  try {
    //Add account
    await User.updateOne({ _id: user }, { $push: { accounts: body } });
    res.status(200).json({ message: 'Account added successfully !', account: body });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/delete', verify, async (req, res) => {
  const { body, user } = req;

  // //VALIDATION DATA
  const { error } = accountDeleteValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  // Check if the accountName is already in user accounts
  const accountExist = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { _id: ObjectID(body.id) } },
  });
  if (!accountExist) return res.status(400).json('Account is not exist');

  try {
    // Delete account
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { accounts: { _id: ObjectID(body.id) } } },
    );
    res.status(200).json('The account has been deleted');
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
