const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // converte todas as requisições em json para javascript
app.use(routes);
/**
 * GET: 
 * POST:
 * PUT:
 * DELETE:
 */

/**
 * Query: Parâmetros enviados na rota após "?"" (Filtros, paginação)
 * Route Params : Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * SQL:PostgreSQL, MySQL, SLiye, etc..
  * NoSQL: MongoDB, etc..
  */

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});