const { Router } = require('express');
const router = Router();

let products = [];
let messages =[];

router.get('/', (req, res) => {
	res.render('form', { products, messages });
});

module.exports = {
	router,
	products,
	messages
};



// router.get('/productos', (req, res) => {
//     res.render('form');
// })

// router.get('/listaproductos', (req, res) => {
//     res.render('productos', { productos });
// })

// router.post('/productos', (req, res) => {
//     const { name, price, picture } = req.body;
//     productos.push({ name, price, picture });
//     res.render('form');
// })
