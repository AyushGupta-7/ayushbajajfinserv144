import Joi from "joi";

export const bfhlSchema = Joi.object({
  fibonacci: Joi.number().integer().min(1),
  prime: Joi.array().items(Joi.number()),
  lcm: Joi.array().items(Joi.number()),
  hcf: Joi.array().items(Joi.number()),
  AI: Joi.string()
}).xor("fibonacci", "prime", "lcm", "hcf", "AI");
