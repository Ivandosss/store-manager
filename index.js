// não remova esse endpoint, e para o avaliador funcionar
const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

const { productsRouters } = require('./routers');
// Rota de produtos
app.use('/products', productsRouters);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
