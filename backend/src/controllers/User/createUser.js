import User from '../../model/User';
import bcrypt from 'bcryptjs';
import registerValidation from '../../validation/User/registerValidation';

const createUser = async (req, res) => {
  //  VALIDATION DATA
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  // Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({ message: 'Email is already exist.' });

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.status(200).json({ message: 'Registered successfull !' });
  } catch (err) {
    res.status(400).json(err);
  }
};

export default createUser;
