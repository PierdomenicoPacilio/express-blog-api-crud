const express = require('express');
const app = express();
const port = 3500;

const postsRouter = require('./routers/posts');

app.use(express.json());

app.use(express.static('public'));
app.use('/posts', postsRouter);



// HOME
app.get('/', (req, res) => {
    res.send('Benvenuto nel mio blog di cucina!');
    console.log('Benvenuto nel mio blog di cucina!');
});



// LISTEN
app.listen(port, () => {
    console.log('server in ascolto sulla porta = ' + port);
});