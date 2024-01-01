import mongoose from "mongoose";

const testimonialsSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please add full name"],
    maxlength: 50,
  },
  image: { type: String },
  desc: {
    type: String,
    required: [true, "Please provide description"],
    maxlength: 500,
  },
  message: {
    type: String,
    required: [true, "Please add message"],
    maxlength: 4000,
  },
});

const subDomainDB = mongoose.connection.useDb("women");

const WTestimonials = subDomainDB.model("Testimonials", testimonialsSchema);

export default WTestimonials;
