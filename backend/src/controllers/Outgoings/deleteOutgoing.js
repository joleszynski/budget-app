import User from '../../model/User';
import deleteValidation from '../../validation/Outgoings/deleteValidation';

const deleteOutgoing = async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA
  const { error } = deleteValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  // Check if the outgoing record exist
  const outgoingRecordExist = await User.findOne({
    _id: user,
    outgoings: { $elemMatch: { id: body.id } },
  });
  if (!outgoingRecordExist)
    return res.status(400).json({ message: `Outgoing record is not exist !` });

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { outgoings: { id: body.id } } },
    );

    res.status(200).json({ message: `Success outgoing delete !` });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default deleteOutgoing;
