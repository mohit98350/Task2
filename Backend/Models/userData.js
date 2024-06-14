const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  nationality: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },
});

const userData = mongoose.model("User", userDataSchema);

module.exports = userData;
