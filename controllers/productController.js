const status = require('http-status-codes').StatusCodes;
const { productCreate } = require('../services/productsService');

const productInsert = async (req, res) => {
  const { body } = req;
  let product;
  const message = { message: 'NOT FOUND' };
  try {
    product = await productCreate(body);
  } catch (error) {
    return res.staus(status.BAD_REQUEST).json({ message: error.message });
  }
  return product 
  ? res.status(status.CREATED).json(product)
  : res.status(status.NOT_FOUND).json(message); 
};

module.exports = {
  productInsert,
};