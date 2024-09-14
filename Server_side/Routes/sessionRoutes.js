const express = require("express");
const router = express.Router();

// import all the modules
const createSession = require("../Controllers/session/createSession");
const deleteSession = require("../Controllers/session/deleteSession");
const getAllSession = require("../Controllers/session/getAllSession");
const getSessionById = require("../Controllers/session/getSessionById");
const updateSession = require("../Controllers/session/updateSession");

// route to get all the session
router.get("/", getAllSession);
//route to get session by id
router.get("/:id", getSessionById);
// route to create a session
router.post("/", createSession);
// route to update session
router.put("/:id", updateSession);
// route to delete a session
router.delete("/:id", deleteSession);
module.exports = router;
