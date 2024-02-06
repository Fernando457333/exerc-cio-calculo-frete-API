const express = require('express');
const { buscaProdutos, detalharProduto, calcularFrete } = require('./controladores/produtos');

const rotas = express();

rotas.get('/produtos', buscaProdutos);
rotas.get('/produtos/:idProduto', detalharProduto);
rotas.get('/produtos/:idProduto/frete/:cep', calcularFrete);

module.exports = rotas