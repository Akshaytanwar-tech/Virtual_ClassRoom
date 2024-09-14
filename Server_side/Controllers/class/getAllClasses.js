const Class = require("../../Models/Class");
const getAllClasses = async (req, res) => {
  router.get("/", async (req, res) => {
    const classes = await Class.find().populate("instructor").populate("units");
    res.json(classes);
  });
};
module.exports = getAllClasses;
