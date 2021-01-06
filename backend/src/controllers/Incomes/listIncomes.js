import User from '../../model/User';

const listOutgoings = async (req, res) => {
  const { user } = req;

  try {
    const { incomes } = await User.findOne({ _id: user });
    res.status(200).json({ incomes: incomes });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default listOutgoings;
