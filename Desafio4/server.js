const express = require('express');
const RouterProductos = require('./routes/index.js');

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', RouterProductos);


// pongo a escuchar el servidor en el puerto indicado

const PORT= process.env.PORT || 8080
const server = app.listen(8080, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
