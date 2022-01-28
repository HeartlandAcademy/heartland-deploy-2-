import asyncHandler from "express-async-handler";
import Staffs from "../models/staffsModel.js";

// @desc    Fetch all Staffs
// @route   GET /api/staffs
// @access  Public
const getStaffs = asyncHandler(async (req, res) => {
  const staffs = await Staffs.find({});
  res.json(staffs);
});

// @desc    Delete Staff
// @route   DELETE /api/staffs/:id
// @access  Private
const deleteStaffs = asyncHandler(async (req, res) => {
  const singleStaff = await Staffs.findById(req.params.id);
  if (singleStaff) {
    await singleStaff.remove();
    res.json({ message: "Staff Deleted Successfully" });
  } else {
    res.status(404);
    throw new Error("Staff not found");
  }
});

// @desc    Create Staff
// @route   POST /api/staffs
// @access  Private
const createStaffs = asyncHandler(async (req, res) => {
  const { fullName, email, phone } = req.body;

  const staff = await Staffs.create({
    fullName,
    email,
    phone,
  });

  if (staff) {
    res.status(201).json({
      _id: staff._id,
      fullName: staff.fullName,
      email: staff.email,
      phone: staff.phone,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Staff Data");
  }
});

export { getStaffs, createStaffs, deleteStaffs };
