// VALIDATION
import Joi from 'joi';
import joiObjectid from 'joi-objectid';

Joi.objectId = joiObjectid(Joi);

// Add account name delete validation
const deleteValidation = (data) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  return schema.validate(data);
};

export default deleteValidation;
