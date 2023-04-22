import express from "express";
import aws from "aws-sdk";
import bodyParser from "body-parser";
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
  region: "eu-north-1",
});

var app = express(),
  s3 = new aws.S3();

const router = express.Router();

app.use(bodyParser.json());

var upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "heartlandacademy",
    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `${Date.now()}-${Math.floor(
        Math.random() * 1000
      )}${ext}`;
      cb(null, fileName);
    },
  }),
});

router.post("/upload", upload.single("formFile"), (req, res) => {
  res.send(`${req.file.location}`);
});

router.post("/uploads", upload.array("images"), (req, res) => {
  const fileUrls = req.files.map((file) => file.location);
  res.send(fileUrls);
});

export default router;
