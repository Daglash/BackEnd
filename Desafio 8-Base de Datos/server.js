const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');
const Container = require('./controllers/container.js');
const { optionsMariaDB, optionsSQLite3 } = require('./options/config.js');



// creo una app de tipo express
const app = express();
const httpserver = new HttpServer(app);
const io = new IOServer(httpserver);
app.use(express.static('views'));

//rutas

const products = new Container(optionsSQLite3, 'products');
const messages = new Container(optionsMariaDB, 'messages');


// funcionalidad de handlebars
app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/', async (req, res) => {
    res.render('form');
});


//funcionalidad IOSERVER

io.on('connection', async socket => {
    console.log('Conexión establecida');
    const dbProducts = await products.getAll();
    io.sockets.emit('products', dbProducts);
    const dbMessages = await messages.getAll();
    io.sockets.emit('messages', dbMessages);
    socket.on('product', async product => {
        products.save(product);
        const dbProducts = await products.getAll();
        io.sockets.emit('products', dbProducts);
    })
    socket.on('message', async message => {
        messages.save(message);
        const dbMessages = await messages.getAll();
        io.sockets.emit('messages', dbMessages);
    })
});





// pongo a escuchar el servidor en el puerto indicado

const PORT= process.env.PORT || 8080
const server = app.listen(8080, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
