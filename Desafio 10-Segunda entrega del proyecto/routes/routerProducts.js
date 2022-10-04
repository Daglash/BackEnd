const express = require("express");
const { getProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/controllerProducts.js");
const routerProducts = express.Router();

/* ------------------------ Endpoints de productos ------------------------ */

//lista todos los productos disponibles o por ID

routerProducts.get('/:id?', getProducts);

//incorpora productos al listado
routerProducts.post('/', addProduct);

//actualiza un producto por su id
routerProducts.put('/:id', updateProduct);


//borrar un producto por su id
routerProducts.delete('/:id', deleteProduct);

module.exports = routerProducts;