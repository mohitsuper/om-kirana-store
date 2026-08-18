const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    weight: {
      type: String,
      required: true,
      trim: true
    },

    minimumOrder: {
      type: Number,
      required: true,
      min: 1
    },

    badge: {
      type: String,
      default: '',
      trim: true
    },

    imageUrl: {
      url: {
        type: String,
        required: true
      },
      public_id: {
        type: String,
        required: true
      }
    },


    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Product =
  mongoose.models.Products ||
  mongoose.model('Product', productSchema);

module.exports = Product;