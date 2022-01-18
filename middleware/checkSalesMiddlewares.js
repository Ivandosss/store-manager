const ERROR_STATUS = 422;
const ERROR_MESSAGE = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
};

const checkTypeSale = async (req, res, next) => {
  if (req.body.length > 1) {
    req.body.forEach((object) => {
      if (typeof object.quantity !== 'number') {
        return res.status(ERROR_STATUS).json(ERROR_MESSAGE);
      }
    });
  } 
  if (typeof req.body[0].quantity !== 'number') {
    return res.status(ERROR_STATUS).json(ERROR_MESSAGE);
  }

  next();
};

const checkLengthSale = async (req, res, next) => {
  if (req.body.length > 1) {
    req.body.forEach((object) => {
      if (object.quantity < 1) {
        return res.status(ERROR_STATUS).json(ERROR_MESSAGE);
      }
    });
  }
  if (req.body[0].quantity < 1) {
    return res.status(ERROR_STATUS).json(ERROR_MESSAGE);
  }

  next();
};

module.exports = {
  checkTypeSale,
  checkLengthSale,
};