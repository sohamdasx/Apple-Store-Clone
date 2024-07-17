// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  virtualMoney: { type: Number, default: 1000 },
});

module.exports = mongoose.model("User", userSchema);
