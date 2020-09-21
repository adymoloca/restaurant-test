
const User = require('../../models/user');
const deleteUser = async (req, res, next) => {
    const userID = req.params.uid;

    let user;
    try {
        user = await User.findById(userID);
    } catch (err) {
        return res.status(500).json("Deleting user failed! ")
    }

    try {
        await user.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting user has failed! ", error: err })
    }
    return res.status(200).json({ message: "User deleted.", user: user })
}

module.exports = deleteUser