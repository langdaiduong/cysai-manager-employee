const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  roles: { type: String, required: true },
  // created_at: { type: String, required: true }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
