const router = require('express').Router();

const { createSaleController, 
  getByIdController, 
  updateSaleController,
} = require('../controllers/salesControllers');
const { 
  checkTypeSale, 
  checkLengthSale, 
} = require('../middleware/checkSalesMiddlewares');
const { checkSaleById } = require('../middleware/existsSaleMiddlewares');
const { getSalesModels } = require('../models/createdSaleModel');

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
  getSalesModels,
);

router.get(
  '/:id',
  checkSaleById, 
  getByIdController,

);

router.delete(
  '/:id',
);
module.exports = router;
