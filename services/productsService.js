const { create, getAllProducts, productId } = require('../models/productModels');

const productCreate = async (body) => {
  const insert = await create(body);
  return insert || null;
};

const searchAll = async () => {
  const search = await getAllProducts();
  return { products: search } || null;
};

const productById = async (id) => {
  const get = await productId(id);
  return get || null;
};

module.exports = {
  productCreate,
  searchAll,
  productById,
};