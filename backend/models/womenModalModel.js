import mongoose from "mongoose";

const modalSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please add image"],
    },
  },
  {
    timestamps: true,
  }
);

const subDomainDB = mongoose.connection.useDb("women");

const WModal = subDomainDB.model("Modal", modalSchema);

export default WModal;
