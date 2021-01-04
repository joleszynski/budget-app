import User from '../../model/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import loginValidation from '../../validation/User/loginValidation';

const loginUser = async (req, res) => {
  // VALIDATION DATA
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json('Login or Password is incorrect');

  // Checking if the email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json('Email is not found');

  // PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json('Invalid Password');

  //Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).json({ token: token });
};

export default loginUser;
