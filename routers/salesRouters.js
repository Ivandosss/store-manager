const router = require('express').Router();

const { createSaleController } = require('../controllers/salesControllers');
const { 
  checkTypeSale, 
  checkLengthSale, 
} = require('../middleware/checkSalesMiddlewares');

router.post(
  '/',
  checkTypeSale,
  checkLengthSale,
  createSaleController,
);

router.put(
  '/:id',
);

router.get(
  '/',
);

router.get(
  '/:id',
);

router.delete(
  '/:id',
);
module.exports = router;
