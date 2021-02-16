// VALIDATION
import Joi from 'joi';
import joiObjectid from 'joi-objectid';

Joi.objectId = joiObjectid(Joi);

// Add outgoings name and value validation
const addValidation = (data) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
    date: Joi.string(),
    account: Joi.string().min(4).required(),
    category: Joi.string().min(4).required(),
    value: Joi.number().required(),
  });
  return schema.validate(data);
};

export default addValidation;
