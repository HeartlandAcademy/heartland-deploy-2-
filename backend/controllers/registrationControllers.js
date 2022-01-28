import asyncHandler from "express-async-handler";
import Registration from "../models/registrationModel.js";
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
  const { firstName, lastName, email, phone, queries } = req.body;

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
});

export { getRegistrations, createRegistrations };
