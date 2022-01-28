import mongoose from "mongoose";

const staffsSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please add full name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  phone: {
    type: String,
    required: [true, "Please add phone number"],
    match: [
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Please provide valid phone number",
    ],
  },
});

const Staffs = mongoose.model("Staffs", staffsSchema);

export default Staffs;
