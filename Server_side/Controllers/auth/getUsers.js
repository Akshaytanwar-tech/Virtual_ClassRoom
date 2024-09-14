const User = require("../../Models/Auth");
const getUsers = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
};

module.exports = getUsers;
