const express = require("express");
const router = express.Router();

//Import all the controllers
const createStudent = require("../Controllers/enrollment/createStudent");
const allEnrollStudents = require("../Controllers/enrollment/allEnrollStudents");
const deleteStudent = require("../Controllers/enrollment/deleteStudent");
const enrollForSpecificStudent = require("../Controllers/enrollment/enrollForSpecificStudent");

router.get("/", allEnrollStudents);
router.get("/student/:studentId", enrollForSpecificStudent);
router.post("/", createStudent);
router.delete("/:id", deleteStudent);
module.exports = router;
