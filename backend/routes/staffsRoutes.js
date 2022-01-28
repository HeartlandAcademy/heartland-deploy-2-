import express from "express";
import {
  createStaffs,
  deleteStaffs,
  getStaffs,
} from "../controllers/staffsControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getStaffs).post(protect, createStaffs);

router.route("/:id").delete(protect, deleteStaffs);

export default router;
