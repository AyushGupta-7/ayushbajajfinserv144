import { ENV } from "../config/env.js";

export const successResponse = (data) => ({
  is_success: true,
  official_email: ENV.EMAIL,
  data
});

export const healthResponse = () => ({
  is_success: true,
  official_email: ENV.EMAIL
});
