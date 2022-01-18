const router = require('express').Router();

const { productInsert, getAll, getById, setProduct } = require('../controllers/productController');
const { 
  checkName, 
  checkNameExists, 
  checkProductById, 
} = require('../middleware/productMiddleware');
const { checkLength, checkType } = require('../middleware/productsQty');

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

router.put(
  '/:id',
  checkName,
  checkLength,
  checkType,
  setProduct,
);

module.exports = router;