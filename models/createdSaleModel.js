const { ObjectId } = require('mongodb');
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

const getSalesModels = async () => {
  try {
    const db = await connection();
    const sales = await db.collection('sales').find({}).toArray();
    return sales || null;
  } catch (err) {
    return err.message;
  }
};

const getSaleByIdModels = async (id) => {
  try {
    const db = await connection();
    const sale = await db.collection('sales').findOne({ _id: ObjectId(id) });

    return sale || null;
  } catch (err) {
    return err.message;
  }
};

const setByIdModel = async (id, sale) => {
  try {
    const db = await connection();
    const set = await db.collection('sales')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { itensSold: sale } },
      );
    return set || null;
  } catch (err) {
    return err.message;
  }
};

const deleteSaleByIdModels = async (id) => {
  try {
    const db = await connection();

    // const set = await getById(id);

    const set = await db.collection('sales')
    .deleteOne(
      { _id: ObjectId(id) },
      );

    return set || null;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  createSaleModel,
  getSalesModels,
  getSaleByIdModels,
  setByIdModel,
  deleteSaleByIdModels,
};
