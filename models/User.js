const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  email: String,
  role: String,
});
module.exports = mongoose.model('User', UserSchema);
