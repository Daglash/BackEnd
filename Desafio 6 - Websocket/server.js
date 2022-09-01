const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');
const { router, products, messages } = require('./routes/routes.js');
const fs = require('fs');

// creo una app de tipo express
const app = express();
const httpserver = new HttpServer(app);
const io = new IOServer(httpserver);
app.use(express.static('views'));

// funcionalidad de handlebars
app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

//funcionalidad IOSERVER

io.on('connection', socket => {
	io.sockets.emit('products', products);
	io.sockets.emit('chat', messages);
	socket.on('newProduct', newProduct => {
		products.push(newProduct);
		io.sockets.emit('products', products);
	})
	socket.on('newMessage', newMessage => {
		messages.push(newMessage);
		fs.writeFileSync('./chat/chat.txt', JSON.stringify(messages));
		io.sockets.emit('chat', messages);
	})
});



//rutas
app.use('/', router);

// pongo a escuchar el servidor en el puerto indicado
const PORT = 8080;
const server = httpserver.listen(PORT, () =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
