const { create, 
  getAllProducts, 
  productId, 
  setProductModel, 
  deleteProductModel, 
} = require('../models/productModels');

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

const updateProduct = async (id, name, quantity) => {
  const updated = await setProductModel(id, name, quantity);
  return updated || null;
};

const deleteProductService = async (id) => {
  const get = await deleteProductModel(id);
  return get || null;
};

module.exports = {
  productCreate,
  searchAll,
  productById,
  updateProduct,
  deleteProductService,
};