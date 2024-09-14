const express = require("express");
const router = express.Router();

// Import all the leacture controllers
const createLeacture = require("../Controllers/leacture/createLeacture");
const deleteLeacture = require("../Controllers/leacture/deleteLeacture");
const getAllLeacture = require("../Controllers/leacture/getAllLeacture");
const getLeactureById = require("../Controllers/leacture/getLeactureById");
const updateLeacture = require("../Controllers/leacture/updateLeacture");

// route to get all the leacture
router.get("/", getAllLeacture);
// route to leacture by id
router.get("/:id", getLeactureById);
//route to create the leacture
router.post("/", createLeacture);
//route to delete the leacture
router.delete("/:id", deleteLeacture);
//route to update the leacture.
router.put("/:id", updateLeacture);

module.exports = router;
