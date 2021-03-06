import User from '../../model/User';

const listTransfers = async (req, res) => {
  const { user } = req;

  try {
    const { transfers } = await User.findOne({ _id: user });
    res.status(200).json({ transfers: transfers.reverse() });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export default listTransfers;
