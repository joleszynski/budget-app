// VALIDATION
import Joi from 'joi';
import joiObjectid from 'joi-objectid';

Joi.objectId = joiObjectid(Joi);

// Add account name and value validation
const addValidation = (data) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
    name: Joi.string().min(4).max(50).required(),
    value: Joi.number().precision(2).required(),
  });
  return schema.validate(data);
};

export default addValidation;
