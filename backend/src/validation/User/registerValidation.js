//VALIDATION
import Joi from 'joi';

//Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().min(6).max(100).required(),
  });
  return schema.validate(data);
};

export default registerValidation;
