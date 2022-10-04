const express = require("express");
const { addCart, deleteCart, getProducts, addProduct, deleteProduct } = require("../controllers/controllerCarts.js");
const routerCarts = express.Router();


/* ------------------------Endpoints del Carrito------------------------ */


//Crea un carrito y devuelve su id
routerCarts.post('/', addCart);

//Vacia un carrito y lo eliminia
routerCarts.delete('/:id', deleteCart);

//Me permite listar todos los productos guardados
routerCarts.get('/:id/products', getProducts);

//Para incorporar productos al carrito por su id de producto
routerCarts.post('/:id/products', addProduct);

//Eliminar un producto del carrito por su id de carridto y de producto
routerCarts.delete('/:id/products/:id_prod', deleteProduct);

module.exports = routerCarts;