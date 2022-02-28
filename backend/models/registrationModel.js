import mongoose from "mongoose";

const registrationSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name field cannot be empty"],
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: [true, "Last Name field cannot be empty"],
      maxlength: 20,
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
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    preference: {
      type: String,
      enum: [
        "Preschool",
        "Primary",
        "Lower Secondary",
        "Junior Higher Secondary",
        "Senior Higher Secondary",
      ],
    },
    faculty: {
      type: String,
      enum: ["Science", "Management", "Education"],
    },
    markSheet: {
      type: String,
      required: true,
    },
    characterCerf: {
      type: String,
      required: true,
    },
    ppPhoto: {
      type: String,
      required: true,
    },
    application: {
      type: String,
      required: true,
      maxlength: [5000, "Application letter must be at least 5000 characters"],
    },
    attachApplication: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

registrationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
