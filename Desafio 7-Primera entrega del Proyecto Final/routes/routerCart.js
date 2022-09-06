const express = require('express');
const { addCart, deleteCart, getProducts, addProductToCart, deleteProduct }= require("../controllers/controllerCart.js");
const routerCarts = express.Router();

//Crea un carrito y devuelve su id
routerCarts.post('/', (req, res) => addCart(req, res));

//Vacia un carrito y lo eliminia
routerCarts.delete('/:id', (req, res) => deleteCart(req, res));

//Me permite listar todos los productos guardados
routerCarts.get('/:id/productos', (req, res) => getProducts(req, res));

//Para incorporar productos al carrito por su id de producto
routerCarts.post('/:id/productos', (req, res) => addProductToCart(req, res));

//Eliminar un producto del carrito por su id de carridto y de producto
routerCarts.delete('/:id/productos/:id_prod', (req, res) => deleteProduct(req, res));

module.exports = routerCarts;

