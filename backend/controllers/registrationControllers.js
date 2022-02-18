import asyncHandler from "express-async-handler";
import Registration from "../models/registrationModel.js";
import axios from "axios";
import path from "path";

// @desc    Fetch all Registrations
// @route   GET /api/registration
// @access  Private
const getRegistrations = asyncHandler(async (req, res) => {
  const registration = await Registration.find({}).sort({ _id: -1 });
  res.json(registration);
});

// @desc    Create Registration
// @route   POST /api/registration
// @access  Public
const createRegistrations = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, queries, token } = req.body;

  const secret = "6Lc8c4ceAAAAAIg0rLnYcxaFUsI9G4UDffpFByyZ";

  const res1 = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );

  if (res1.data.success) {
    const registration = await Registration.create({
      firstName,
      lastName,
      email,
      phone,
      queries,
    });

    if (registration) {
      res.status(201).json({
        _id: registration._id,
        firstName: registration.firstName,
        lastName: registration.lastName,
        email: registration.email,
        phone: registration.phone,
        queries: registration.queries,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Registration Data");
    }
  } else {
    res.status(400);
    throw new Error("Verification Failed. Please Try Again");
  }
});

export { getRegistrations, createRegistrations };
