const router = require('express').Router();

const { productInsert } = require('../controllers/productController');
const { checkName, checkNameExists } = require('../middlewares/productmiddleware');
const { checkLength, checkType } = require('../middlewares/productsQty');

router.post(
  '/',
  checkName,
  checkNameExists,
  checkLength,
  checkType,
  productInsert,
);

module.exports = router;