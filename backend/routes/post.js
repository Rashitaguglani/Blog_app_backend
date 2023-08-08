const express = require("express");
const { createPost, likeAndUnlikePost, getPostOfFollowing, updateCaption } = require("../controllers/post");
const{ isAuthenticated } = require("../middlewares/auth");
const{deletePost} = require("../controllers/post");
const router = express.Router();


router.route("/post/upload").post(isAuthenticated, createPost);

router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost);

router.route("/post/:id").put(isAuthenticated, updateCaption);

router.route("/post/:id").delete(isAuthenticated, deletePost);




router.route("/posts").get(isAuthenticated, getPostOfFollowing);

module.exports = router;
