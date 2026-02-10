import express from "express";
import { bfhlHandler } from "../controllers/bfhl.controller.js";

const router = express.Router();
router.post("/bfhl", bfhlHandler);
export default router;
