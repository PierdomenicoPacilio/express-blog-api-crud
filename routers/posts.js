const express = require('express');
const postController = require('../controllers/postController.js');
const router = express.Router();

// INDEX
router.get('/', postController.index);
// SHOW
router.get('/:id', postController.show);
// STORE
router.post('/', postController.store);
// UPDATE
router.put('/:id', postController.update);
// MODIFY
router.patch('/:id', postController.modify);
// DELETE
router.delete('/:id', postController.destroy);

module.exports = router;