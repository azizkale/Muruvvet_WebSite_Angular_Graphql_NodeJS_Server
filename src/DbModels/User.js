const mongoose = require("mongoose");

const User = {
  id: String,
  password: String,
  userName: String,
};

module.exports = mongoose.model("User", User);
