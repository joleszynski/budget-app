import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 100,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  accounts: [Object],
  outgoings: [Object],
  transfers: [Object],
  incomes: [Object],
});

export default mongoose.model('User', userSchema);
