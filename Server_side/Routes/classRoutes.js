const express = require("express");
const router = express.Router();

// Import controllers
const createClass = require("../Controllers/class/createClass");
const deleteClass = require("../Controllers/class/deleteClass");
const getAllClasses = require("../Controllers/class/getAllClasses");
const getClassById = require("../Controllers/class/getClassById");
const updateClass = require("../Controllers/class/updateClass");

// Route to get all classes
router.get("/", getAllClasses);
// route to get the class from id
router.get("/:id", getClassById);
// route to create the class
router.post("/", createClass);
//route to update class
router.put("/:id", updateClass);
// route to delete the class
router.delete("/:id", deleteClass);

module.exports = router;
