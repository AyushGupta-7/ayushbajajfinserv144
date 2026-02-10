import { bfhlSchema } from "../validators/bfhl.validator.js";
import * as math from "../services/math.service.js";
import { askAI } from "../services/ai.service.js";
import { successResponse } from "../utils/response.util.js";

export const bfhlHandler = async (req, res, next) => {
  try {
    const { error, value } = bfhlSchema.validate(req.body);
    if (error) return res.status(400).json({ is_success: false });

    if (value.fibonacci)
      return res.json(successResponse(math.fibonacci(value.fibonacci)));

    if (value.prime)
      return res.json(successResponse(math.filterPrimes(value.prime)));

    if (value.lcm)
      return res.json(successResponse(math.lcm(value.lcm)));

    if (value.hcf)
      return res.json(successResponse(math.hcf(value.hcf)));

    if (value.AI)
      return res.json(successResponse(await askAI(value.AI)));
  } catch (err) {
    next(err);
  }
};
