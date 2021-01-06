import User from '../../model/User';
import addValidation from '../../validation/Incomes/addValidation';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

const addIncome = async (req, res) => {
  const { body, user } = req;
  const { account, value } = body;

  body.id = String(ObjectID());

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
    await User.updateOne({ _id: user }, { $push: { incomes: body } });

    await User.updateOne(
      {
        _id: user,
        'accounts.name': account,
      },
      { $set: { 'accounts.$.value': newValue } },
    );
    res.status(200).json({ message: 'Success income add', record: body });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default addIncome;
