const mongoose = require("mongoose");

const Message = {
  name: String,
  mail: String,
  date: String,
  message: String,
};

module.exports = mongoose.model("Message", Message);
