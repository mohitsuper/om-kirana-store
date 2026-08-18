// const User = require('../models/user');

// const registerController = async (req, res) => {
//   try {
//     await connectDB();

//     const { email, password } = req.body;

//     if ( !email || !password) {
//       return res.status(400).json({ message: ' email and password are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     const user = await User.create({  email, password });
//     const token = createToken(user);

//     res.status(201).json({
//       message: 'User registered successfully',
//       token,
//       user: { id: user._id, :  user.email: user.email },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Registration failed', error: error.message });
//   }
// }

// module.exports = registerController;