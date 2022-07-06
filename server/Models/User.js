const mongoose = require('mongoose');
// user schema
const userScheama = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'subscriber'
    },
    resetPasswordLink: {
      data: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('User', userScheama);