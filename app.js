const express = require('express');
const app = express();
const port = 3500;

// IMPORT ROUTERS
const postsRouter = require('./routers/posts');
// IMPORT MIDDLEWARES
const checkTime = require('./middlewares/checkTime');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(checkTime);

app.use(express.json());

app.use(express.static('public'));
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