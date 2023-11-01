
  // routes/postRoutes.js

const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))
const postController = require('../controller/postController');

// Define post routes here
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;