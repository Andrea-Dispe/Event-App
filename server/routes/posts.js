const { Router } = require("express");
const express = require("express")
const router = express.Router()
const {getPosts} = require('../controllers/posts.js')

router.get('/', getPosts)


module.exports = router;

