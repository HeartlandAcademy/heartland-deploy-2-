import express from "express";
import {
  createRegistrations,
  getRegistrations,
} from "../controllers/registrationControllers.js";

import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, getRegistrations).post(createRegistrations);

export default router;
