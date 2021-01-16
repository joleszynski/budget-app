import User from '../../model/User';
import addValidation from '../../validation/Transfers/addValidation';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

const addTransfer = async (req, res) => {
  const { body, user } = req;
  const { from, to, value } = body;

  body.id = String(ObjectID());

  //VALIDATION DATA
  const { error } = addValidation(body);
  if (error) return res.status(400).send(error.details[0].message);

  const userObject = await User.findOne({
    _id: user,
  });

  const currentFromAccountValue = userObject.accounts.find((el) => el.name === from).value;
  const currentToAccountValue = userObject.accounts.find((el) => el.name === to).value;

  const newFromAccountValue = parseInt(currentFromAccountValue) - parseInt(value);

  const newToAccountValue = parseInt(currentToAccountValue) + parseInt(value);

  try {
    await User.updateOne({ _id: user }, { $push: { transfers: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.name': from,
      },
      { $set: { 'accounts.$.value': newFromAccountValue } },
    );

    await User.updateOne(
      {
        _id: user,
        'accounts.name': to,
      },
      { $set: { 'accounts.$.value': newToAccountValue } },
    );
    res.status(200).json({ message: 'Success transfer add', record: body });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default addTransfer;
