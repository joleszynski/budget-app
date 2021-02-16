import User from '../../model/User';
import addValidation from '../../validation/Transfers/addValidation';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

const addTransfer = async (req, res) => {
  const { body, user } = req;
  const { account, category, value } = body;

  body.id = String(ObjectID());

  //VALIDATION DATA
  const { error } = addValidation(body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const userObject = await User.findOne({
    _id: user,
  });

  const currentFromAccountValue = userObject.accounts.find((el) => el.name === account).value;
  const currentToAccountValue = userObject.accounts.find((el) => el.name === category).value;

  const newFromAccountValue = parseInt(currentFromAccountValue) - parseFloat(value);

  const newToAccountValue = parseInt(currentToAccountValue) + parseFloat(value);

  try {
    await User.updateOne({ _id: user }, { $push: { transfers: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.name': account,
      },
      { $set: { 'accounts.$.value': newFromAccountValue } },
    );

    await User.updateOne(
      {
        _id: user,
        'accounts.name': category,
      },
      { $set: { 'accounts.$.value': newToAccountValue } },
    );
    res.status(200).json({ message: 'Success transfer add', record: body });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export default addTransfer;
