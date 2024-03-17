const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pins");

const userSchema = mongoose.Schema({
  username: String,
  user: String,
  password: String,
  profileImage: String,
  email: String,
  boards: {
    type: Array,
    default: []
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);