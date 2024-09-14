const express = require("express");
const router = express.Router();

// Import the controllers
const getAllUsers = require("../Controllers/auth/getAllUsers");
const createUser = require("../Controllers/auth/createUser");
const deleteUser = require("../Controllers/auth/deleteUser");
const getUsers = require("../Controllers/auth/getUsers");
const updateUser = require("../Controllers/auth/updateUser");

// route to get all the users.
router.get("/", getAllUsers);
//route to get the user from the id
router.get("/:id", getUsers);
//route to create the users.
router.post("/", createUser);
//route to update the user
router.put("/:id", updateUser);
//route to delete the users.
router.delete("/:id", deleteUser);
module.exports = router;
