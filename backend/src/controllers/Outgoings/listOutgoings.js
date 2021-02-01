import User from '../../model/User';

const listOutgoings = async (req, res) => {
  const { user } = req;

  try {
    const { outgoings } = await User.findOne({ _id: user });
    res.status(200).json({ outgoings: outgoings });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export default listOutgoings;
