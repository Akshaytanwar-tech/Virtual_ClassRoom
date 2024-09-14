const express = require("express");
const router = express.Router();

// import all the controllers of unit
const createUnit = require("../Controllers/unit/createUnit");
const deleteUnit = require("../Controllers/unit/deleteUnit");
const getAllUnits = require("../Controllers/unit/getAllUnits");
const getUnitById = require("../Controllers/unit/getUnitById");
const updateUnit = require("../Controllers/unit/updateUnit");

// route to get all the units
router.get("/", getAllUnits);
// route to get the unit by id
router.get("/:id", getUnitById);
// route to create unit
router.post("/", createUnit);
//route to update unit
router.put("/:id", updateUnit);
// route to delete a unit
router.delete("/:id", deleteUnit);
module.exports = router;
