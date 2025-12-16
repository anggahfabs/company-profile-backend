import express from "express";
import {
  getContactInfo,
  updateContactInfo,
  createContactInfo,
  createContactMessage
} from "../controllers/contactController.js";

const router = express.Router();

// existing
router.get("/contact", getContactInfo);
router.post("/contact", createContactInfo);
router.put("/contact/:id", updateContactInfo);

// 🔥 NEW (visitor message)
router.post("/contact-message", createContactMessage);

export default router;
