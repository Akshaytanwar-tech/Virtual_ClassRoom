const User = require("../../Models/Auth");
const deleteUser = async(req,res)=>{
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
}
module.exports = deleteUser;