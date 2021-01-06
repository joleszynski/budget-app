import Joi from 'joi';
import joiObjectid from 'joi-objectid';

Joi.objectId = joiObjectid(Joi);

// Add outgoings name and value validation
const deleteValidation = (data) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  return schema.validate(data);
};

export default deleteValidation;
