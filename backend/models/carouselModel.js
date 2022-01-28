import mongoose from "mongoose";

const carouselSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: 100,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: 500,
  },
  image: {
    type: String,
    required: [true, "Please add image"],
  },
});

const Carousel = mongoose.model("Carousel", carouselSchema);

export default Carousel;
