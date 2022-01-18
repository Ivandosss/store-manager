const router = require('express').Router();

const { createSaleController, 
  getByIdController, 
  updateSaleController,
  deleteSaleController,
  getAllSaleController,
} = require('../controllers/salesControllers');
const { 
  checkTypeSale, 
  checkLengthSale, 
} = require('../middleware/checkSalesMiddlewares');
const { checkSaleById, checkIdFormat } = require('../middleware/existsSaleMiddlewares');

router.post(
  '/',
  checkTypeSale,
  checkLengthSale,
  createSaleController,
);

router.put(
  '/:id',
  checkTypeSale,
  checkLengthSale,
  updateSaleController,
);

router.get(
  '/',
  getAllSaleController,
);

router.get(
  '/:id',
  checkSaleById, 
  getByIdController,

);

router.delete(
  '/:id',
  checkIdFormat,
  deleteSaleController,
);
module.exports = router;
