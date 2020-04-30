const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    projectType: { type: String, required: false },
    status: { type: String, required: false },
    payment: { type: Boolean, required: false },
    currentpay: { type: Number, required: false },
    outstandingpay: { type: Number, required: false },
    agent: { type: Schema.Types.ObjectId, ref: "Agent" },
    projectowner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
