const { getProductByName } = require('../models/productModels');

const ERROR_EXISTS = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
};

const errorLenght = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
};

const checkName = async (req, res, next) => {
  const { body } = req;
  if (typeof body.name !== 'string' || body.name.length < 6) {
    return res.status(422).json(errorLenght);
  }
  next(); 
};

const checkNameExists = async (req, res, next) => {
  const { name } = req.body;
  const search = await getProductByName(name);
  console.log(search);
  const exists = search.some((object) => object.name === name);
  
  if (exists) return res.status(422).json(ERROR_EXISTS);
  next();
}; 

module.exports = {
  checkName,
  checkNameExists,
};