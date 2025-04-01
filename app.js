const express = require('express');
const app = express();
const port = 3500;

// IMPORT ROUTERS
const postsRouter = require('./routers/posts');
// IMPORT MIDDLEWARES
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

// APP.USE
// MIDDLEWARE PER DATI JSON
app.use(express.json());
// MIDDLEWARE PER IMMAGINI
app.use(express.static('public'));
// UTILIZZO ROUTER DEI POST
app.use('/posts', postsRouter);

// HOME
app.get('/', (req, res) => {
    res.send('Benvenuto nel mio blog di cucina!');
    console.log('Benvenuto nel mio blog di cucina!');
});

// GESTIONE ERRORI
// 404
app.use(notFound);
// 500
app.use(errorsHandler);

// LISTEN
app.listen(port, () => {
    console.log('server in ascolto sulla porta = ' + port);
});