const express = require('express');
const routerProducts = require('./routes/routerProducts.js');
const routerCarts = require('./routes/routerCart.js');

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas

app.use('/api/productos', routerProducts);
app.use('/api/carrito', routerCarts);
app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});


// pongo a escuchar el servidor en el puerto indicado
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>{
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
})

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
