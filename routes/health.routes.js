import express from "express";
import { healthResponse } from "../utils/response.util.js";

const router = express.Router();
router.get("/health", (req, res) => res.json(healthResponse()));
export default router;
