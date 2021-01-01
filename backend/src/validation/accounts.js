// VALIDATION
import Joi from 'joi';

// Add account name and value validation
const accountAddValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    value: Joi.number().precision(2).min(3).required(),
  });
  return schema.validate(data);
};

// Add account name delete validation
const accountDeleteValidation = (data) => {
  const schema = Joi.object({
    accountName: Joi.string().min(4).required(),
  });
  return schema.validate(data);
};

module.exports.accountAddValidation = accountAddValidation;
module.exports.accountDeleteValidation = accountDeleteValidation;
