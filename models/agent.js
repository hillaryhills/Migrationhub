const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agentSchema = new Schema({
  business_name: { type: String, required: true },
  business_number: { type: Number, required: true },
  marn: { type: Number, required: true },
  rating: { type: String, required: false },
  status: { type: String, required: false },
  getuser: { type: Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Agent", agentSchema);
