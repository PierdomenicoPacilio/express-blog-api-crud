const express = require('express');
const posts = require('../data/posts');
const router = express.Router();


// INDEX

router.get('/', (req, res) => {
    res.send(posts);
    console.log('Ecco i miei posts!');
});


// SHOW

router.get('/:id', (req, res) => {
    const currentId = req.params.id;
    const currentPost = posts[Number(currentId)].title;
    res.send('Ecco il post:' + currentPost);
    console.log('Ecco il post:' + currentPost);
});



// CREATE

router.post('/', (req, res) => {
    res.send('Creazione nuovo post!');
    console.log('Creazione nuovo post!');
});



// UPDATE

router.put('/:id', (req, res) => {
    const currentId = req.params.id;
    res.send('Modifica del post ' + currentId + '!');
    console.log('Modifica del post ' + currentId + '!');
});



// DELETE

router.delete('/:id', (req, res) => {
    const currentId = req.params.id;
    res.send('Cancellazione del post ' + currentId + '!');
    console.log('Cancellazione del post ' + currentId + '!');
});

module.exports = router;