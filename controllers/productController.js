const status = require('http-status-codes').StatusCodes;
const { 
  productCreate, 
  searchAll, 
  productById, 
  updateProduct, 
} = require('../services/productsService');

const ERROR_FORMAT = {
  err: {
  code: 'invalid_data',
  message: 'Wrong id format',
  },
  };

const message = { message: 'NOT FOUND' };

const productInsert = async (req, res) => {
  const { body } = req;
  let product;
  try {
    product = await productCreate(body);
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ message: error.message });
  }
  return product 
  ? res.status(status.CREATED).json(product)
  : res.status(status.NOT_FOUND).json(message); 
};

const getAll = async (req, res) => {
  let products;
  try {
    products = await searchAll();
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return products ? res.status(status.OK).json(products)
  : res.status(status.UNPROCESSABLE_ENTITY).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await productById(id);
  } catch (error) {
    return res.status(status.UNPROCESSABLE_ENTITY).json(ERROR_FORMAT);
  }
  return product ? res.status(status.OK).json(product)
  : res.status(status.UNPROCESSABLE_ENTITY).json(message);
};

const setProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  let product;
  try {
    product = await updateProduct(id, name, quantity);
  } catch (err) {
    return res.status(status.BAD_REQUEST).json({ message: err.message });
  }
  return product
  ? res.status(status.OK).json(product)
  : res.status(status.NOT_FOUND).json(message);
};

module.exports = {
  productInsert,
  getAll,
  getById,
  setProduct,
};