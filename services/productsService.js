const { create } = require('../models/productModels');

const productCreate = async (body) => {
  const insert = await create(body);
  return insert || null;
};

module.exports = {
  productCreate,
};