const mongoose = require("mongoose");

const Message = {
  name: String,
  mail: String,
  date: String,
  message: Number,
};

module.exports = mongoose.model("Message", Message);
