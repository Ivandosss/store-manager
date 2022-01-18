const { createSaleModel, 
  getSalesModels, 
  getSaleByIdModels,
  setByIdModel,
  deleteSaleByIdModels, 
} = require('../models/createdSaleModel');

const createdSaleService = async (body) => {
  const created = body.length < 2 
  ? await createSaleModel(body[0])
  : await createSaleModel(body);

  return created || null;
};

const getAllSaleService = async () => {
  const sales = await getSalesModels();
  return { sales } || null;
};

const getSaleByIdService = async (id) => {
  const get = await getSaleByIdModels(id);
  return get || null;
};

const setSaleByIdService = async (id, sale) => {
  const set = await setByIdModel(id, sale);
  const allSales = await getSalesModels();
  return set ? allSales : null;
};

const deleteSaleByIdService = async (id) => {
  const get = await deleteSaleByIdModels(id);
  return get || null;
};

module.exports = {
  createdSaleService,
  getAllSaleService,
  getSaleByIdService,
  setSaleByIdService,
  deleteSaleByIdService,
};
