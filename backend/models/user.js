const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  phone_number: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  domains: [String],
});

module.exports = mongoose.model("User", userSchema);
