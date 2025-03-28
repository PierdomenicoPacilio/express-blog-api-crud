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

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post){
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        })
    }

    res.json(post);
    console.log('Ecco il post: ' + post.title);
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

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post){
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        })
    }


    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
    console.log(posts);
});

module.exports = router;