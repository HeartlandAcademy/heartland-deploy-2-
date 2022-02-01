import mongoose from "mongoose";

const registrationSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name field cannot be empty"],
      maxlength: 10,
    },
    lastName: {
      type: String,
      required: [true, "Last Name field cannot be empty"],
      maxlength: 10,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email address is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      match: [
        /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "Please provide valid phone number",
      ],
    },
    queries: {
      type: String,
      required: true,
      maxlength: 1000,
    },
  },
  {
    timestamps: true,
  }
);

registrationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
