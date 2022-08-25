const express = require('express')
const Contenedor = require('./Contenedor.js');

// creo una app de tipo express
const app = express();


// --------------codigo------------------

app.get('/',(req,res)=>{
    res.send(`<h1 style="color:blue">Bienvenid@ :)</h>`)
})

app.get("/productos", async (req, res) => {
    let productos = await Contenedor.getAll();
    res.send(`Lista de productos: ${JSON.stringify(productos)}`);
});

app.get('/productosRandom',async (req,res)=>{
    const p = await Contenedor.getAll();
    const numeroRandom = Math.floor(Math.random() * p.length);
    res.send(`Producto Random: ${JSON.stringify((p[numeroRandom]))}`)
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










