import User from '../../model/User';
import addValidation from '../../validation/Accounts/addValidation';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

const addAccount = async (req, res) => {
  const { body, user } = req;

  body.id = String(ObjectID());

  //VALIDATION DATA
  const { error } = addValidation(body);
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
};

export default addAccount;
