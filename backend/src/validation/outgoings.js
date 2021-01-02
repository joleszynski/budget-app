import Joi from 'joi';

// Add outgoings name and value validation
const addValidation = (data) => {
  const schema = Joi.object({
    _id: Joi.required(),
    date: Joi.date(),
    account: Joi.string().min(4).required(),
    category: Joi.string().min(4).required(),
    value: Joi.number().min(3).required(),
  });
  return schema.validate(data);
};

// Add outgoings name delete validation
const deleteValidation = (data) => {
  const schema = Joi.object({
    id: Joi.required(),
  });
  return schema.validate(data);
};

module.exports.addValidation = addValidation;
module.exports.deleteValidation = deleteValidation;
