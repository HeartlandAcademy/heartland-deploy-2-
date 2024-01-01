import express from "express";
import path from "path";
import multer from "multer";

import { protect } from "../middleware/authMiddleware.js";
import {
  createModal,
  deleteModal,
  getModal,
  getWModal,
  createWModal,
  deleteWModal,
} from "../controllers/modalControllers.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/modalImages");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb(new Error("Please add valid image file"));
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.route("/").get(getModal).post(protect, createModal);
router.route("/sub-domain").get(getWModal).post(protect, createWModal);

router.route("/:id").delete(protect, deleteModal);
router.route("/sub-domain/:id").delete(protect, deleteWModal);

router.post("/uploads", upload.single("formFile"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
