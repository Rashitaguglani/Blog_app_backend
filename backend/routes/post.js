const express = require("express");
const { createPost, likeAndUnlikePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment } = require("../controllers/post");
const{ isAuthenticated } = require("../middlewares/auth");
const{deletePost} = require("../controllers/post");
const router = express.Router();


router.route("/post/upload").post(isAuthenticated, createPost);

router.route("/post/:id").get(isAuthenticated, likeAndUnlikePost);

router.route("/post/:id").put(isAuthenticated, updateCaption);

router.route("/post/:id").delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router.route("/post/comment/:id").put(isAuthenticated, commentOnPost);

router.route("/post/comment/:id").delete(isAuthenticated, deleteComment);




module.exports = router;
