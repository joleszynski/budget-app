//VALIDATION
import Joi from 'joi';

//Login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(100).required().email(),
    password: Joi.string().min(6).max(100).required(),
  });
  return schema.validate(data);
};

export default loginValidation;
