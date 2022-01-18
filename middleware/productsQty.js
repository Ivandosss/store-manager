const ERROR_TYPE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be a number',
  },
};

const ERROR_LENGTH = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
};

const checkType = async (req, res, next) => {
  const { quantity } = req.body;
  if (typeof quantity !== 'number') return res.status(422).json(ERROR_TYPE);
  next();
};

const checkLength = async (req, res, next) => {
  const { quantity } = req.body;
  if (quantity < 1) return res.status(422).json(ERROR_LENGTH);
  next();
};

module.exports = {
  checkType,
  checkLength,
};