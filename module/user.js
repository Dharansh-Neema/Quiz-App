const mongoose = require("mongoose");
const { connect } = require("../config/db");
const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
    type: String,
  },
  score: {
    type: Number,
  },
});
const user = new mongoose.model("user", UserSchema);
module.exports = user;
