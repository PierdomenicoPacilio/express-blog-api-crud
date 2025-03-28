const express = require('express');
const postController = require('../controllers/postController.js');
const router = express.Router();


// INDEX
router.get('/', postController.index);

// SHOW
router.get('/:id', postController.show);

// CREATE
router.post('/', postController.create);

// UPDATE
router.put('/:id', postController.update);

// DELETE
router.delete('/:id', postController.destroy);

module.exports = router;