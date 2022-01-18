const connection = require('./connection');

const createSaleModel = async (itensSold) => {
  try {
    const db = await connection();
    const insert = await db
    .collection('sales')
    .insertOne(
      { itensSold },
      );

      const insertObject = {
        _id: insert.insertedId,
        itensSold: [itensSold],
      };
    
    return !itensSold.length
    ? insertObject
    : insert.ops[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createSaleModel,
};