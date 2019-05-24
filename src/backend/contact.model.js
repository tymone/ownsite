const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Message = new Schema({
  email: {
    type: String
  },
  message: {
    type: String
  }
});
module.exports = mongoose.model("Message", Message);
