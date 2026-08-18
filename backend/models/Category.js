const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    description: {
      type: String,
      default: '',
      trim: true
    }
    ,
    imageUrl: {
      url: { type: String, default: '' },
      public_id: { type: String, default: '' }
    }
  },
  {
    timestamps: true
  }
);

const Category =
  mongoose.models.Category ||
  mongoose.model('Category', categorySchema);

module.exports = Category;