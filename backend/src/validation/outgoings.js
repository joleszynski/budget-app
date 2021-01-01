import Joi from 'joi';

// Add outgoings name and value validation
const outgoingsAddValidation = (data) => {
  const schema = Joi.object({
    outgoingDate: Joi.date(),
    outgoingCategoryName: Joi.string().min(4).required(),
    outgoingPurposeName: Joi.string().min(4).required(),
    outgoingValue: Joi.number().min(3).required(),
  });
  return schema.validate(data);
};

// Add outgoings name delete validation
const outgoingsDeleteValidation = (data) => {
  const schema = Joi.object({
    outgoingAccountName: Joi.string().min(4).required(),
  });
  return schema.validate(data);
};

module.exports.outgoingsAddValidation = outgoingsAddValidation;
module.exports.outgoingsDeleteValidation = outgoingsDeleteValidation;
