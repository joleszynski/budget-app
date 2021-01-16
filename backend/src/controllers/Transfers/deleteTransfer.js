import User from '../../model/User';
import deleteValidation from '../../validation/Transfers/deleteValidation';

const deleteTransfer = async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA
  const { error } = deleteValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  // Check if the outgoing record exist
  const transferRecordExist = await User.findOne({
    _id: user,
    transfers: { $elemMatch: { id: body.id } },
  });
  if (!transferRecordExist)
    return res.status(400).json({ message: `Transfer record is not exist !` });

  const userObject = await User.findOne({
    _id: user,
  });

  const transferRecord = userObject.transfers.find((el) => el.id === body.id);

  const currentFromAccountValue = userObject.accounts.find((el) => el.name === transferRecord.from)
    .value;
  const currentToAccountValue = userObject.accounts.find((el) => el.name === transferRecord.to)
    .value;

  const newFromValue = parseInt(currentFromAccountValue) + parseInt(transferRecord.value);
  const newToValue = parseInt(currentToAccountValue) - parseInt(transferRecord.value);

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { transfers: { id: body.id } } },
    );

    await User.updateOne(
      {
        _id: user,
        'accounts.name': transferRecord.from,
      },
      { $set: { 'accounts.$.value': newFromValue } },
    );

    await User.updateOne(
      {
        _id: user,
        'accounts.name': transferRecord.to,
      },
      { $set: { 'accounts.$.value': newToValue } },
    );

    res.status(200).json({ message: `Success transfer delete !` });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default deleteTransfer;
