import mongoose from "mongoose";

const modalSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please add image"],
    },
    thumbnail: {
      type: String,
      required: [true, "Please add thumbnail"],
    },
  },
  {
    timestamps: true,
  }
);

const subDomainDB = mongoose.connection.useDb("women");

const WModal = subDomainDB.model("Modal", modalSchema);

export default WModal;
