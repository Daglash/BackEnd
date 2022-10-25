const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');
const randomData = require('./faker');

const PORT = 8080;
const app = express();
const httpserver = new HttpServer(app);
const io = new IOServer(httpserver);

app.use(express.static('views'));

app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/api/products-test', (req, res) => {
    res.render('table');
});


const  {chatDao } = require("./db/DAOs/DAOselector");
const {
  normalizeData,
  desnormalizeData,
} = require("./db/utils/messagesNormalizr");



io.on('connection', async socket => {
    console.log('Conexión establecida');
    const data = randomData();
    io.sockets.emit('products', data);
    socket.on('product', async data => {
        io.sockets.emit('products', data);
    socket.emit("messagesFromServer", async () => {
            let chatMessages = await chatDao.getMessages();
            return normalizeData(chatMessages);
        });
    })
});

socket.on("new-message", async (data) => {
    const newMessage = desnormalizeData(data);
    print(newMessage);
    await chatDao.insertMessage(newMessage);
    io.sockets.emit("messagesFromServer", async () => {
      let chatMessages = await chatDao.getMessages();
      return normalizeData(chatMessages);
    });
  });




const server = httpserver.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', () => console.log(`Error: ${err}`));