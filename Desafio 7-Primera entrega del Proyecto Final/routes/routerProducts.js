const express = require('express');
const { getProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/controllerProducts.js");
const routerProducts = express.Router();

//lista todos los productos disponibles o por ID
routerProducts.get('/:id?', (req, res) => getProducts(req, res));

//incorpora productos al listado
routerProducts.post('/', (req, res) => addProduct(req, res));

//actualiza un producto por su id
routerProducts.put('/:id', (req, res) => updateProduct(req, res));

//borrar un producto por su id
routerProducts.delete('/:id', (req, res) => deleteProduct(req, res));

module.exports = routerProducts;