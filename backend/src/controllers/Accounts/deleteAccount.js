import User from '../../model/User';
import deleteValidation from '../../validation/Accounts/deleteValidation';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;
const deleteAccount = async (req, res) => {
  const { body, user } = req;

  // //VALIDATION DATA
  const { error } = deleteValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  // Check if the accountName is already in user accounts
  const accountExist = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { id: body.id } },
  });
  if (!accountExist) return res.status(400).json({ message: 'Account is not exist' });

  try {
    // Delete account
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { accounts: { id: body.id } } },
    );
    res.status(200).json({ message: 'The account has been deleted', id: body.id });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default deleteAccount;
