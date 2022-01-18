const { ObjectId } = require('mongodb');
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

const getAllProducts = async () => {
  try {
    const db = await connection();
    const product = await db.collection('products').find({}).toArray();
    return product || null;
  } catch (error) {
    return error.message;
  }
};

const productId = async (id) => {
  try {
    const db = await connection();
    const product = await db.collection('products').findOne({ _id: ObjectId(id) });
    return product || null;
  } catch (error) {
    return error.message;
  }
};

const setProductModel = async (id, name, quantity) => {
  try {
    const db = await connection();
    await db
    .collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });

    return { id, name, quantity } || null;
  } catch (err) {
    return err.message;
  }
};

const deleteProductModel = async (id) => {
  try {
    const db = await connection();
    const deleted = await db
    .collection('products')
    .findOneAndDelete({
      _id: ObjectId(id),
    }, {
      returnOriginal: 'after',
    });

    return deleted || null;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  create,
  getProductByName,
  getAllProducts,
  productId,
  setProductModel,
  deleteProductModel,
};