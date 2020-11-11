// VALIDATION
const Joi = require('joi');

// Add account name and value validation
const accountAddValidation = (data) => {
  const schema = Joi.object({
    accountName: Joi.string().min(4).required(),
    accountValue: Joi.number().min(3).required(),
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
