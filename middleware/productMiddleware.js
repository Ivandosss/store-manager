const { getProductByName, productId } = require('../models/productModels');

const ERROR_EXISTS = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
};

const ERROR_FORMAT = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

const ERROR_LENGTH = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
};

const checkName = async (req, res, next) => {
  const { body } = req;
  if (typeof body.name !== 'string' || body.name.length < 6) {
    return res.status(422).json(ERROR_LENGTH);
  }
  next(); 
};

const checkNameExists = async (req, res, next) => {
  const { name } = req.body;
  const search = await getProductByName(name);
  const exists = search.some((object) => object.name === name);
  
  if (exists) return res.status(422).json(ERROR_EXISTS);
  next();
};

const checkProductById = async (req, res, next) => {
  const { id } = req.params;
  const exists = await productId(id);

  if (typeof exists !== 'object') return res.status(422).json(ERROR_FORMAT);
  next();
};

module.exports = {
  checkName,
  checkNameExists,
  checkProductById,
};