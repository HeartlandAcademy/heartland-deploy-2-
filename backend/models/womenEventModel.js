import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: 50,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  startDate: {
    type: String,
    required: [true, "Please add valid date"],
  },
  endDate: {
    type: String,
    required: [true, "Please add valid date"],
  },
});

const subDomainDB = mongoose.connection.useDb("women");

const WEvents = subDomainDB.model("Events", eventSchema);

export default WEvents;
