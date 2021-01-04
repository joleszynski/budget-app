import User from '../../model/User';

const listAccounts = async (req, res) => {
  const { user } = req;

  try {
    const { accounts } = await User.findOne({ _id: user });
    res.status(200).json({ accounts: accounts });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default listAccounts;
