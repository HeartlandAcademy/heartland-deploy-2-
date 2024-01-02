import express from "express";
import aws from "aws-sdk";
import bodyParser from "body-parser";
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import dotenv from "dotenv";
import Jimp from "jimp";

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

// Middleware function to process and upload blurred image
const processAndUploadBlur = async (req, res, next) => {
  try {
    // Access the uploaded image URL from the S3 bucket
    const imageUrl = req.file.location;

    // Load the image using Jimp
    const image = await Jimp.read(imageUrl);

    // Resize and blur the image
    // await image.resize(150, 150);
    // await image.blur(20);
    // await image.quality(50);
    await image.resize(200, 200).quality(60);

    // Generate a new filename for the blurred image
    const blurredImageKey = `blurred_${path.basename(req.file.key)}`;

    // Upload the blurred image back to the same S3 bucket
    const params = {
      Bucket: "heartlandacademy",
      Key: blurredImageKey,
      Body: await image.getBufferAsync(Jimp.MIME_PNG),
      ContentType: Jimp.MIME_PNG,
      ACL: "public-read",
    };

    await s3.upload(params).promise();

    // Attach the URLs of the original and blurred images to the request object
    req.blurredImageURL = s3.getSignedUrl("getObject", {
      Bucket: "heartlandacademy",
      Key: blurredImageKey,
    });
    req.originalImageURL = imageUrl;

    next(); // Continue with the next middleware or route handler
  } catch (error) {
    console.error("Error processing and uploading blur:", error);
    res.status(500).send("Internal Server Error");
  }
};

router.post("/upload", upload.single("formFile"), (req, res) => {
  res.send(`${req.file.location}`);
});

router.post(
  "/upload-blur",
  upload.single("formFile"),
  processAndUploadBlur,
  (req, res) => {
    res.json({
      originalImageURL: req.originalImageURL,
      blurredImageURL: req.blurredImageURL,
    });
  }
);

router.post("/uploads", upload.array("images"), (req, res) => {
  const fileUrls = req.files.map((file) => file.location);
  res.send(fileUrls);
});

export default router;
