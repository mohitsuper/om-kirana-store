const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cloudinary = require('./config/cloudinary');

const cors = require('cors');
const { connectDB } = require('./config/db');
const router = require('./routes/router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Om Kirana Store API is running' });
});

app.use('/api', router);
// app.use('/api/admin', adminAuthRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
