const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

const Login = mongoose.models.logins || mongoose.model('logins', loginSchema);

module.exports = Login;