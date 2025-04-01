const posts = require('../data/posts.js');

// INDEX
function index(req, res) {
    // CREIAMO LE VARIABILI
    let filteredPosts = posts;
    let currentTags;
    // SE IL TAG E' SINGOLO ARRIVA COME STRINGA
    // E LO RENDIAMO UN ARRAY
    if (typeof req.query.tag === "string") {
        currentTags = [];
        currentTags.push(req.query.tag);
    } else {
        currentTags = req.query.tag;
    };
    // FILTRIAMO I POST PER IL/I TAG INSERITO/ITI
    if (currentTags) {
      console.log('filtro per ingrediente');
      console.log(currentTags);
      filteredPosts = posts.filter(post => {
        return currentTags.every(tag => post.tags.includes(tag));
      });
    };
    // LIMITE DEI RISULTATI
    if (req.query.limit) {
      console.log(req.query.limit);
      const limit = parseInt(req.query.limit);
      console.log(limit);
      if (!isNaN(limit)) {
        filteredPosts = filteredPosts.slice(0, limit);
      };
    };
    // MOSTRIAMO IL RISULTATO
    res.json(filteredPosts);
};

// SHOW
function show(req, res) {
    // TROVIAMO IL POST DI RIFERIMENTO
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // SE NON LO TROVIAMO DIAMO UN ERRORE
    if(!post) {
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };
    // MOSTRIAMO IL RISULTATO
    res.json(post);
    console.log('Ecco il post: ' + post.title);
};

// STORE
function store(req, res) {
    // CREIAMO UN NUOVO ID
    const newID = posts[posts.length - 1].id + 1;
    // CREIAMO UN NUOVO ELEMENTO CON IL NUOVO ID E
    // IL CORPO PRESO DALLA RICHIESTA
    const newPost = {
        id: newID,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };
    // INSERIAMO IL NUOVO ELEMENTO NELLA LISTA DEI POST
    posts.push(newPost);
    // MOSTRIAMO IL RISULTATO
    res.send(posts);
    console.log(newPost);
};

// UPDATE
function update(req, res) {
    // TROVIAMO IL POST DI RIFERIMENTO
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // SE NON LO TROVIAMO DIAMO UN ERRORE
    if(!post) {
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };
    // RISCRIVIAMO IL CORPO DEL POST DI RIFERIMENTO CON
    // IL CORPO PRESO DALLA RICHIESTA
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    // MOSTRIAMO IL RISULTATO
    console.log('post modificato interamente!');
    res.json(post);
};

// MODIFY
function modify(req, res) {
    // TROVIAMO IL POST DI RIFERIMENTO
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // SE NON LO TROVIAMO DIAMO UN ERRORE
    if(!post) {
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };
    // RISCRIVIAMO SOLO DELLE PARTI DEL POST DI RIFERIMENTO
    // CON IL CORPO PRESO DALLA RICHIESTA
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.image) post.image = req.body.image;
    if (req.body.tags) post.tags = req.body.tags;
    // MOSTRIAMO IL RISULTATO
    console.log('post modificato parzialmente!');
    res.json(post);
}

// DESTROY
function destroy(req, res) {
    // TROVIAMO IL POST DI RIFERIMENTO
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    // SE NON LO TROVIAMO DIAMO UN ERRORE
    if(!post) {
        console.log('post non trovato');
        return res.status(404).json({
            error: "Not Found",
            message: "Post Non Trovato"
        });
    };
    // ELIMINIAMO IL POST DI RIFERIMENTO UTILIZZANTO LA FUNZIONE SPLICE
    posts.splice(posts.indexOf(post), 1);
    // MOSTRIAMO SOLO UNO STATO 204
    res.sendStatus(204);
    console.log(posts);
};

module.exports = { index, show, store, update, modify, destroy };