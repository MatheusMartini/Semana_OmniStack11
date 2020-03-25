const express = require("express");
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/** 
        Metodos http

 * Get: busca informações back-end
 * Post: cria informações back-end
 * Put: altera informações back-end
 * Delete: deleta informações back-end
  
        Tipos de parametros 
 
 *  Query Params: parametros nomeados enviados na rota após "?" (filtros e paginação)
 *  Rout Params: parametros utilizados para identificar recursos
 *  Request Body: corpo da requisição, utilizado para criar ou alterar recursos

 const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

modeule.exports = connection; 


       





 * 
*/



