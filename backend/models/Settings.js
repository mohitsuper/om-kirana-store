const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema(
  {
    siteName: { type: String, default: 'OM Kirana Store' },
    adminName: { type: String, default: 'Super Admin' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
    instagram: { type: String, default: '' },
    facebook: { type: String, default: '' },
    logo: {
      url: { type: String, default: '' },
      public_id: { type: String, default: '' }
    },
    themeColor: { type: String, default: '#ff8a00' }
    ,
    // SEO / meta fields
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    metaKeywords: { type: String, default: '' }
  },
  { timestamps: true }
);

const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);

module.exports = Settings;
