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
        });
    };

    res.json(post);
    console.log('Ecco il post: ' + post.title);

};

// STORE
function store(req, res) {

    const newID = posts[posts.length - 1].id + 1;

    const newPost = {
        id: newID,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    res.send(posts);
    console.log(newPost);
    
};

// UPDATE
function update(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post){
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log('post modificato interamente!');
    res.json(post);

};

// MODIFY
function modify(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post){
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.image) post.image = req.body.image;
    if (req.body.tags) post.tags = req.body.tags;

    console.log('post modificato parzialmente!');
    res.json(post);

}

// DESTROY
function destroy(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post){
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };

    posts.splice(posts.indexOf(post), 1);

    res.sendStatus(204);
    console.log(posts);

};

module.exports = { index, show, store, update, modify, destroy };