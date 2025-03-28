const posts = require('../data/posts.js');




// INDEX
function index(req, res) {

    res.json(posts);
    console.log('Ecco i miei posts!');

};

// SHOW
function show(req, res) {

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

};

// CREATE
function create(req, res) {

    res.send('Creazione nuovo post!');
    console.log('Creazione nuovo post!');

};

// UPDATE
function update(req, res) {

    const currentId = req.params.id;
    res.send('Modifica del post ' + currentId + '!');
    console.log('Modifica del post ' + currentId + '!');

};

// DESTROY
function destroy(req, res) {

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

};

module.exports = { index, show, create, update, destroy };