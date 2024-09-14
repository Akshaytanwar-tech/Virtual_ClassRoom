const express = require("express");
const router = express.Router();
// Import all the comment controllers
const createComment = require("../Controllers/comment/createComment");
const deleteComment = require("../Controllers/comment/deleteComment");
const getAllComment = require("../Controllers/comment/getAllComment");
const getCommentByleacture = require("../Controllers/comment/getCommentByleacture");
const updateComment = require("../Controllers/comment/updateComment");

//get all the comments
router.get("/", getAllComment);
//get comment from the specific leacture
router.get("/lecture/:lectureId", getCommentByleacture);
//route to create comment
router.post("/", createComment);
//route to delete the comment
router.delete("/:id", deleteComment);
//route to update the comment
router.put("/:id", updateComment);
module.exports = router;
