import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "heartlandacademy123@gmail.com",
    pass: "lmghyidhkkqhcbnn",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post("/send", function (req, res) {
  const message = `
    <h2 style='color:blue;'>Contact Details</h2>
    <h3>${req.body.mailerState.name}</h3>
    <ul>  
      <li><h4>Email: ${req.body.mailerState.email}</h4></li>
      <li><h4>Subject: ${req.body.mailerState.subject}</h4></li>
    </ul>
    <h3>Message: </h3>
    <p style='font-weight:bold;'>${req.body.mailerState.message}</p>
  `;
  var mailOptions = {
    from: "heartlandacademy123@gmail.com",
    to: "heartlandacademy123@gmail.com",
    subject: "Contact Request",
    html: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

export default router;
