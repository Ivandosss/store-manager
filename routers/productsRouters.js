const router = require('express').Router();

const { productInsert, getAll, getById } = require('../controllers/productController');
const { 
  checkName, 
  checkNameExists, 
  checkProductById, 
} = require('../middlewares/productmiddleware');
const { checkLength, checkType } = require('../middlewares/productsQty');

router.post(
  '/',
  checkName,
  checkNameExists,
  checkLength,
  checkType,
  productInsert,
);

router.get(
  '/',
  getAll,
);

router.get(
  '/:id',
  checkProductById,
  getById,
);

module.exports = router;