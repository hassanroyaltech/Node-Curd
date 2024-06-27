const express = require('express');
const router = express.Router();
const User = require("../models/users.model.js")
const {getUsers,addUser, deleteUser, updateUser, getUser, uploadImage}= require("../controllers/userController.js")

router.get('/', getUsers);

router.post('/user-add',addUser )
router.get('/get-user/:id',getUser)

// update api

router.put('/update/:id', updateUser)
// delete api
router.delete('/user-delete/:id',deleteUser)
router.post('/user/image',uploadImage)

module.exports=router