const connection = require('./connection');

const create = async (body) => {
  try {
    const db = await connection();
    const createdProduct = await db.collection('products').insertOne(body);
    return createdProduct ? createdProduct.ops.pop() : null;
  } catch (error) {
    return error.massage;
  }
};

const getProductByName = async (name) => {
  try {
    const db = await connection();
    const product = await db.collection('products').find({ name }).toArray();
    return product || null;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
  getProductByName,
};