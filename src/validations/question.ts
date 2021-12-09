import joi from 'joi';

const schema = joi.object({
  userToken: joi.string().required(),
  question: joi.string().required().min(10).max(220),
  tags: joi.string().required().min(2).max(220),
});

export { schema };
