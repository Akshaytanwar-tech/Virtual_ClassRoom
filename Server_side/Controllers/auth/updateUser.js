const User = require("../../Models/Auth");
const updateUser = async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
}
module.exports = updateUser;