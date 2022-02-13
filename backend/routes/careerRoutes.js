import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import {
  createCareer,
  deleteCareer,
  getCareer,
  getCareerById,
  updateCareer,
} from "../controllers/careerControllers.js";
const router = express.Router();

router.route("/").get(getCareer).post(protect, createCareer);

router
  .route("/:id")
  .get(getCareerById)
  .delete(protect, deleteCareer)
  .put(protect, updateCareer);

export default router;
