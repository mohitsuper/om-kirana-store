const Settings = require('../models/Settings');
const cloudinary = require('../config/cloudinary');

// Get settings (single document)
const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }

    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    console.log('GET SETTINGS ERROR:', error);
    res.status(500).json({ success: false, message: 'Failed to get settings', error: error.message });
  }
};

// Update settings (supports logo upload via multer+cloudinary)
const updateSettings = async (req, res) => {
  try {
    // get existing or create
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});

    // if file uploaded, delete old logo and set new
    if (req.file) {
      if (settings.logo && settings.logo.public_id) {
        try {
          await cloudinary.uploader.destroy(settings.logo.public_id);
        } catch (err) {
          console.log('Cloudinary delete logo error:', err.message);
        }
      }

      settings.logo = {
        url: req.file.path,
        public_id: req.file.filename
      };
    }

    const {
      siteName,
      adminName,
      email,
      phone,
      whatsapp,
      instagram,
      facebook,
      themeColor
      ,metaTitle, metaDescription, metaKeywords
    } = req.body;

    if (siteName !== undefined) settings.siteName = siteName;
    if (adminName !== undefined) settings.adminName = adminName;
    if (email !== undefined) settings.email = email;
    if (phone !== undefined) settings.phone = phone;
    if (whatsapp !== undefined) settings.whatsapp = whatsapp;
    if (instagram !== undefined) settings.instagram = instagram;
    if (facebook !== undefined) settings.facebook = facebook;
    if (themeColor !== undefined) settings.themeColor = themeColor;
    if (metaTitle !== undefined) settings.metaTitle = metaTitle;
    if (metaDescription !== undefined) settings.metaDescription = metaDescription;
    if (metaKeywords !== undefined) settings.metaKeywords = metaKeywords;

    await settings.save();

    res.status(200).json({ success: true, message: 'Settings updated', data: settings });
  } catch (error) {
    console.log('UPDATE SETTINGS ERROR:', error);
    res.status(500).json({ success: false, message: 'Failed to update settings', error: error.message });
  }
};

module.exports = {
  getSettings,
  updateSettings
};
