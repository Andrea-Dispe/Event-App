const { Router } = require("express");
const express = require("express")
const router = express.Router()
const {getPosts, createPost, updatePost} = require('../controllers/posts.js')

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)



module.exports = router;

