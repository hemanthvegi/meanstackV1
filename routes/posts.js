const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const PostController = require('../controller/posts');
const extractFile = require('../middleware/multer')
//const PostSchema = mong.model("")


router.post("", checkAuth, extractFile, PostController.createPost );

router.put("/:id", checkAuth, extractFile, PostController.updatePost)

router.get("", PostController.getAllPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
