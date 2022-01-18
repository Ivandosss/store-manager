const status = require('http-status-codes').StatusCodes;
const { createdSaleService, 
  getAllSaleService, 
  getSaleByIdService,
  setSaleByIdService,
  deleteSaleByIdService, 
} = require('../services/createSaleService');

const ERROR_FORMAT = {
  err: {
  code: 'invalid_data',
  message: 'Wrong id format',
  },
};

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

const getAllSaleController = async (_req, res) => {
  let sales;
  try {
    sales = await getAllSaleService();
    console.log(`GET ALL, ${sales}`);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return sales
    ? res.status(status.OK).json(sales)
    : res.status(status.UNPROCESSABLE_ENTITY).json(message);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  let sale;
  try {
    sale = await getSaleByIdService(id);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return sale
  ? res.status(status.OK).json(sale)
  : res.status(status.UNPROCESSABLE_ENTITY).json(message);
};

const updateSaleController = async (req, res) => {
  const { id } = req.params;
  let sale;
  try {
    sale = await setSaleByIdService(id, req.body);
    console.log(req.body);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  console.log(sale[0]);
  return sale
  ? res.status(status.OK).json(sale[0])
  : res.status(status.UNPROCESSABLE_ENTITY).json(message);
};

const deleteSaleController = async (req, res) => {
  const { id } = req.params;
  let sale;
  try {
    sale = await deleteSaleByIdService(id);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }

  return sale
  ? res.status(status.OK).json(sale[0])
  : res.status(status.UNPROCESSABLE_ENTITY).json(message);
};

module.exports = {
  createSaleController,
  getAllSaleController,
  getByIdController,
  updateSaleController,
  deleteSaleController, 
};