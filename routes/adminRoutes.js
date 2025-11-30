import express from "express";
import { createAdmin, adminLogin } from "../controllers/adminController.js";

const router = express.Router();

// ⚠️ Only run once to create admin, then comment out
// router.post("/create-admin", createAdmin);

router.post("/login", adminLogin);
export default router;
