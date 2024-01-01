import asyncHandler from "express-async-handler";
import Testimonials from "../models/testimonialsModel.js";
import WTestimonials from "../models/womenTestimonialsModel.js";

// @desc    Fetch all Student Testimonials
// @route   GET /api/testimonials/students
// @access  Public
const getStudentsTestimonials = asyncHandler(async (req, res) => {
  const studentsTestimonials = await Testimonials.find(
    {},
    { students: 1 }
  ).select("-_id");
  res.json(studentsTestimonials);
});

// @desc    Fetch all Women Testimonials
// @route   GET /api/wtestimonials
// @access  Public
const getWTestimonials = asyncHandler(async (req, res) => {
  const womenTestimonials = await WTestimonials.find({}).sort({ _id: -1 });
  res.json(womenTestimonials);
});

// @desc    Create Student Testimonials
// @route   POST /api/testimonials/students
// @access  Private
const createStudentTestimonials = asyncHandler(async (req, res) => {
  const { fullName, image, desc, message } = req.body;

  const studentTestimonialData = { fullName, image, desc, message };

  const studentsTestimonials = await Testimonials.find({}).updateOne({
    $push: {
      students: {
        $each: [studentTestimonialData],
        $position: 0,
      },
    },
  });

  if (studentsTestimonials) {
    res.status(201).json({ message: "Testimonial Added" });
  } else {
    res.json("Testimonial Not Found");
  }
});

// @desc    Create Women Testimonials
// @route   POST /api/wtestimonials
// @access  Private
const createWTestimonial = asyncHandler(async (req, res) => {
  const { fullName, image, desc, message } = req.body;

  const testimonial = await WTestimonials.create({
    fullName,
    image,
    desc,
    message,
  });

  if (testimonial) {
    res.status(201).json({
      fullName: testimonial.fullName,
      image: testimonial.image,
      desc: testimonial.desc,
      message: testimonial.message,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Testimonial Data");
  }
});

// @desc    Delete Student Testimonial
// @route   DELETE /api/testimonials/students/:id
// @access  Private
const deleteStudentTestimonial = asyncHandler(async (req, res) => {
  const studentsTestimonials = await Testimonials.find({}).updateMany({
    $pull: {
      students: { _id: req.params.id },
    },
  });

  if (studentsTestimonials) {
    res.status(201).json({ message: "Testimonial Deleted" });
  } else {
    res.json("Testimonial Not Found");
  }
});

// @desc    Delete Women Testimonial
// @route   DELETE /api/wtestimonials/:id
// @access  Private
const deleteWomenTestimonial = asyncHandler(async (req, res) => {
  const womenTestimonials = await WTestimonials.findById(req.params.id);

  if (womenTestimonials) {
    await WTestimonials.remove();

    res.status(201).json({ message: "Testimonial Deleted" });
  } else {
    res.json("Testimonial Not Found");
  }
});

// @desc    Fetch all Visitors Testimonials
// @route   GET /api/testimonials/visitors
// @access  Public
const getVisitorsTestimonials = asyncHandler(async (req, res) => {
  const visitorsTestimonials = await Testimonials.find(
    {},
    { visitors: 1 }
  ).select("-_id");
  res.json(visitorsTestimonials);
});

// @desc    Create Visitors Testimonials
// @route   POST /api/testimonials/visitors
// @access  Private
const createVisitorsTestimonials = asyncHandler(async (req, res) => {
  const { fullName, image, desc, message } = req.body;

  const visitorTestimonialData = { fullName, image, desc, message };

  const visitorsTestimonials = await Testimonials.find({}).updateOne({
    $push: {
      visitors: {
        $each: [visitorTestimonialData],
        $position: 0,
      },
    },
  });

  if (visitorsTestimonials) {
    res.status(201).json({ message: "Testimonial Added" });
  } else {
    res.json("Testimonial Not Found");
  }
});

// @desc    Delete Visitor Testimonial
// @route   DELETE /api/testimonials/student/:id
// @access  Private
const deleteVisitorsTestimonials = asyncHandler(async (req, res) => {
  const visitorsTestimonials = await Testimonials.find({}).updateMany({
    $pull: {
      visitors: { _id: req.params.id },
    },
  });

  if (visitorsTestimonials) {
    res.status(201).json({ message: "Testimonial Deleted" });
  } else {
    res.json("Testimonial Not Found");
  }
});

export {
  getStudentsTestimonials,
  getVisitorsTestimonials,
  createStudentTestimonials,
  createVisitorsTestimonials,
  deleteStudentTestimonial,
  deleteVisitorsTestimonials,
  getWTestimonials,
  createWTestimonial,
  deleteWomenTestimonial,
};
