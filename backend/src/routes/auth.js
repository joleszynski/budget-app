const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation/auth');

router.post('/register', async (req, res) => {
  //VALIDATION DATA
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  //Checking if the user is alreadyin the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json('Email already exists');

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
    res.status(200).json('Registered successfull !');
  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  //VALIDATION DATA
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json('Login or Password is incorrect');
  //Checking if the email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json('Email is not found');
  //PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json('Invalid Password');

  //Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).json(token);
});

module.exports = router;
