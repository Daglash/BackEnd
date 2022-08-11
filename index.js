const express = require('express')
const listaProductos = require('./Contenedor.js');

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------codigo------------------

app.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue">Bienvenid@ :)</h>`)
})

app.get('/productos',(req,res)=>{
    let productos = req.params.productos
    res.send(`Lista de productos: ${productos}`)
})

app.get('/productosRandom',(req,res)=>{
    let productoRandom=req.params.productoRandom
    res.send(`Producto Random: ${productoRandom}`)
})



// pongo a escuchar el servidor en el puerto indicado

const PORT= process.env.PORT || 8080
const server = app.listen(8080, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});










