const { ObjectID } = require('mongodb');
const { getSaleByIdModels } = require('../models/createdSaleModel');

const STATUS_ERROR = 404;
const STATUS_FORMAT_ERROR = 422;
const ERROR_NO_EXISTS = {
  err: {
    code: 'not_found',
    message: 'Sale not found',
  },
};
const ERROR_ID = {
  err: {
    code: 'invalid_data',
    message: 'Wrong sale ID format',
  },
};

const checkSaleById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectID.isValid(id)) return res.status(STATUS_ERROR).json(ERROR_NO_EXISTS);
  const saleNoExists = await getSaleByIdModels(id);
  
  if (!saleNoExists) return res.status(STATUS_ERROR).json(ERROR_NO_EXISTS);

  next();
};

const checkIdFormat = async (req, res, next) => {
  const { id } = req.params;
  const saleExist = await getSaleByIdModels(id);
  
  if (typeof saleExist !== 'object') return res.status(STATUS_FORMAT_ERROR).json(ERROR_ID);

  next();
};

module.exports = { 
  checkSaleById, 
  checkIdFormat, 
};