const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}))
const userController = require('../controller/userController');

// Define user routes here
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;