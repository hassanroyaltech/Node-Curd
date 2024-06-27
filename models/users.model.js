const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: {
    type: String, // corrected typo
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
}, { timestamps: true });

const User = mongoose.model("Users", UsersSchema);

module.exports = User;