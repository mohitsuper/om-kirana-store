const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controller/ProductsController');
const upload = require('../middleware/uplode');
const { getSettings, updateSettings } = require('../controller/SettingsController');

const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} = require('../controller/Category');


const { adminLogin, getAdmin, updateAdmin, changePassword } = require('../controller/admin');


router.use('/test', (req, res) => {
  res.json({ message: 'Test route is working' });
});

router.post('/auth', adminLogin);
// Admin profile
router.get('/admin', getAdmin);
router.put('/admin', updateAdmin);
router.put('/admin/password', changePassword);
// CREATE
router.post('/products', upload.single('imageUrl'), createProduct);

// GET ALL
router.get('/products', getProducts);

// GET SINGLE
router.get('/products/:id', getProduct);

// UPDATE
router.put('/products/:id', upload.single('imageUrl'), updateProduct);

// DELETE
router.delete('/products/:id', deleteProduct);

// SETTINGS
router.get('/settings', getSettings);
router.put('/settings', upload.single('logo'), updateSettings);




// CREATE
router.post('/categories', upload.single('image'), createCategory);

// GET ALL
router.get('/categories', getCategories);

// GET SINGLE
router.get('/categories/:id', getCategory);

// UPDATE
router.put('/categories/:id', upload.single('image'), updateCategory);

// DELETE
router.delete('/categories/:id', deleteCategory);


module.exports = router;