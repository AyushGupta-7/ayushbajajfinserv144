import app from "./app.js";

import dotenv from "dotenv";
dotenv.config();
const ENV = {
  PORT: process.env.PORT || 3000,
  EMAIL: process.env.OFFICIAL_EMAIL,
  GEMINI_KEY: process.env.GEMINI_API_KEY
};

app.listen(ENV.PORT, () =>
  console.log(`Server running on port ${ENV.PORT}`)
);
