const status = require('http-status-codes').StatusCodes;
const { createdSaleService } = require('../services/createSaleService');

const message = { message: 'not_found' };

const createSaleController = async (req, res) => {
  let sale;
  
  try {
    sale = await createdSaleService(req.body);
  } catch (err) {
    return res.status(status.BAD_REQUEST).json({ message: err.message });
  }
  return sale
  ? res.status(status.OK).json(sale)
  : res.status(status.NOT_FOUND).json(message);
};

module.exports = {
  createSaleController, 
};