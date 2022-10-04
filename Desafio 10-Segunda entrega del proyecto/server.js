const express = require("express");
// const { connect } = require("mongoose");
const routerProducts = require('./routes/routerProducts.js');
const routerCarts = require('./routes/routerCarts.js');

// app de tipo express

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas

app.use('/api/products', routerProducts);
app.use('/api/cart', routerCarts);
app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});



// servidor en el puerto indicado
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, async () => {
	// await connect('mongodb://localhost:27017/products');
	console.log(`Server running on PORT ${PORT}`);
});

// en caso de error, avisar

server.on('error', err => console.log(err));