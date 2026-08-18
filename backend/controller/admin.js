const Login  = require('../models/Login');


const adminLogin = async (req, res) => {
  try {
    const user = await Login.find({ username: 'admin' });
    const { email, password } = req.body;
    if(!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    if(!user || user.length === 0) {
      return res.status(500).json({ message: 'Admin account not found' });
    }
    if(email === user[0].email && password === user[0].password) {
      return res.status(200).json({ message: 'Admin login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Admin login failed', error: error.message });
  }
}

// Get admin profile (don't return password)
const getAdmin = async (req, res) => {
  try {
    const user = await Login.findOne({ username: 'admin' });
    if(!user) return res.status(404).json({ message: 'Admin not found' });
    const { _id, username, email } = user;
    res.status(200).json({ success: true, data: { _id, username, email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get admin', error: error.message });
  }
}

// Update admin profile (email)
const updateAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Login.findOne({ username: 'admin' });
    if(!user) return res.status(404).json({ message: 'Admin not found' });
    if(email) user.email = email;
    await user.save();
    res.status(200).json({ success: true, message: 'Admin updated', data: { username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update admin', error: error.message });
  }
}

// Change admin password
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if(!oldPassword || !newPassword) return res.status(400).json({ message: 'Old and new passwords are required' });
    const user = await Login.findOne({ username: 'admin' });
    if(!user) return res.status(404).json({ message: 'Admin not found' });
    if(user.password !== oldPassword) return res.status(401).json({ message: 'Old password incorrect' });
    user.password = newPassword;
    await user.save();
    res.status(200).json({ success: true, message: 'Password changed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to change password', error: error.message });
  }
}

module.exports = { adminLogin, getAdmin, updateAdmin, changePassword };