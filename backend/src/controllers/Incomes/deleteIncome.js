import User from '../../model/User';
import deleteValidation from '../../validation/Incomes/deleteValidation';

const deleteIncome = async (req, res) => {
  const { body, user } = req;

  //VALIDATION DATA
  const { error } = deleteValidation(body);
  if (error) return res.status(400).json(error.details[0].message);

  // Check if the outgoing record exist
  const incomeRecordExist = await User.findOne({
    _id: user,
    incomes: { $elemMatch: { id: body.id } },
  });
  if (!incomeRecordExist) return res.status(400).json({ message: `Income record is not exist !` });

  try {
    await User.updateOne(
      {
        _id: user,
      },
      { $pull: { incomes: { id: body.id } } },
    );

    res.status(200).json({ message: `Success income delete !` });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default deleteIncome;
