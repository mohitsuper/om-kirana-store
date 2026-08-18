const Category = require('../models/Category');
const cloudinary = require('../config/cloudinary');


// ================= CREATE CATEGORY =================
const createCategory = async (req, res) => {
  try {
    const {
      categoryName,
      slug,
      description
    } = req.body;

    const categoryData = { categoryName, slug, description };

    if (req.file) {
      categoryData.imageUrl = { url: req.file.path, public_id: req.file.filename };
    }

    const category = await Category.create(categoryData);

    res.status(201).json({
      success: true,
      message: 'Category created successfully',
      data: category
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to create category',
      error: error.message
    });
  }
};


// ================= GET ALL CATEGORIES =================
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      message: 'Categories fetched successfully',
      count: categories.length,
      data: categories
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories',
      error: error.message
    });
  }
};


// ================= GET SINGLE CATEGORY =================
const getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Category fetched successfully',
      data: category
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch category',
      error: error.message
    });
  }
};


// ================= UPDATE CATEGORY =================
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await Category.findById(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    // handle image upload
    if (req.file) {
      // delete old image from Cloudinary
      if (existing.imageUrl && existing.imageUrl.public_id) {
        try {
          await cloudinary.uploader.destroy(existing.imageUrl.public_id);
        } catch (err) {
          console.log('Cloudinary delete category image error:', err.message);
        }
      }

      req.body.imageUrl = { url: req.file.path, public_id: req.file.filename };
    }

    const category = await Category.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Category updated successfully',
      data: category
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to update category',
      error: error.message
    });
  }
};


// ================= DELETE CATEGORY =================
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    // delete image from Cloudinary if present
    if (category.imageUrl && category.imageUrl.public_id) {
      try {
        await cloudinary.uploader.destroy(category.imageUrl.public_id);
      } catch (err) {
        console.log('Cloudinary delete error:', err.message);
      }
    }

    await category.remove();

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Category deleted successfully',
      data: category
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Failed to delete category',
      error: error.message
    });
  }
};


module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};