const { createSaleModel } = require('../models/createdSaleModel');

const createdSaleService = async (body) => {
  const created = body.length < 2 
  ? await createSaleModel(body[0])
  : await createSaleModel(body);

  return created || null;
};

module.exports = {
  createdSaleService,
};