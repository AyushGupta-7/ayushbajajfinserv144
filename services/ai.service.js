import axios from "axios";
import { ENV } from "../config/env.js";
import { GEMINI_URL } from "../config/ai.config.js";

export const askAI = async (question) => {
  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${ENV.GEMINI_KEY}`,
      {
        contents: [{ parts: [{ text: question }] }]
      },
      { timeout: 5000 }
    );

    const text =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("Empty AI response");
    }

    return text.trim().split(/\s+/)[0];
  } catch (error) {
    console.error("AI ERROR:", error.response?.data || error.message);

    return "Unavailable";
  }
};
