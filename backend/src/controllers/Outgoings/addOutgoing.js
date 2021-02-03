import User from '../../model/User';
import addValidation from '../../validation/Outgoings/addValidation';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

const addOutgoing = async (req, res) => {
  const { body, user } = req;

  body.id = String(ObjectID());

  //VALIDATION DATA
  const { error } = addValidation(body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const userObject = await User.findOne({
    _id: user,
    accounts: { $elemMatch: { name: body.account } },
  });

  const currentAccountValue = userObject.accounts.find((el) => el.name === body.account).value;

  const newAccountValue = parseFloat(currentAccountValue) - parseFloat(body.value);

  try {
    await User.updateOne({ _id: user }, { $push: { outgoings: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.name': body.account,
      },
      { $set: { 'accounts.$.value': newAccountValue } },
    );
    res.status(200).json({ message: 'Success outgoing add', record: body });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default addOutgoing;
