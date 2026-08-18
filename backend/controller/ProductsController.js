const Products = require('../models/Products');
const cloudinary = require('../config/cloudinary');

// ================= CREATE PRODUCT =================
const createProduct = async (req, res) => {
  try {
    const {
      productName,
      category,
      price,
      weight,
      minimumOrder,
      badge,
      description
    } = req.body;

    // Expecting multer+Cloudinary middleware to populate `req.file`
    const file = req.file;
    console.log('Create product req.file:', file);

    if (!file) {
      console.log('No file uploaded');
       res.status(400).json({
        success: false,
        message: 'Product image is required'
      });
    }

    const productData = {
      productName,
      category,
      price,
      weight,
      minimumOrder,
      badge,
      imageUrl: {
        url: file.path,
        public_id: file.filename
      },
      description
    };

    const product = await Products.create(productData);
    console.log('product',product)
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product
    });

  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error.message
    });
  }
};


// ================= GET ALL PRODUCTS =================
const getProducts = async (req, res) => {
  try {
    // pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      Products.find().skip(skip).limit(limit),
      Products.countDocuments()
    ]);

    const response = {
      success: true,
      message: 'Products fetched successfully',
      page,
      limit,
      total,
      count: products.length,
      data: products
    };

    // optionally include categories
    if (req.query.includeCategories === 'true') {
      const Category = require('../models/Category');
      const categories = await Category.find();
      response.categories = categories;
    }

    res.status(200).json(response);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message
    });
  }
};


// ================= GET SINGLE PRODUCT =================
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: product
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch product',
      error: error.message
    });
  }
};


// ================= UPDATE PRODUCT =================
const updateProduct = async (req, res) => {
  console.log('Update product request body:', req.body);
  try {
    const { id } = req.params;

    // Product find
    const existing = await Products.findById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // ==========================================
    // NEW IMAGE UPLOADED
    // ==========================================

    if (req.file) {
      console.log('Update product req.file:', req.file);

      // Delete old Cloudinary image
      if (existing.imageUrl?.public_id) {
        try {
          await cloudinary.uploader.destroy(
            existing.imageUrl.public_id
          );

          console.log('Old image deleted from Cloudinary');

        } catch (err) {
          console.log(
            'Cloudinary delete error:',
            err.message
          );
        }
      }

      // Add new Cloudinary image
      req.body.imageUrl = {
        url: req.file.path,
        public_id: req.file.filename
      };
    }

    // ==========================================
    // UPDATE PRODUCT
    // ==========================================

    const product = await Products.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      message: req.file
        ? 'Product and image updated successfully'
        : 'Product updated successfully',
      data: product
    });

  } catch (error) {

    console.log('UPDATE PRODUCT ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: error.message
    });
  }
};

// ================= DELETE PRODUCT =================
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // delete image from Cloudinary if present
    if (product.imageUrl && product.imageUrl.public_id) {
      try {
        await cloudinary.uploader.destroy(product.imageUrl.public_id);
      } catch (err) {
        console.log('Cloudinary delete error:', err.message);
      }
    }

    await product.remove();

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: product
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: error.message
    });
  }
};


module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};