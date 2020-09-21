const User = require('../../models/user');
const updateUser = async (req, res, next) => {
    const userID = req.params.uid;
    const { name, phone } = req.body
    let user;
    try {
        user = await User.findById(userID);
    } catch (err) {
        return res.status(500).json("Error! Could not update user. ")
    }

    user.name = name;
    user.phone = phone
    user.last_updated = Date.now()

    try {
        await user.save();
    } catch (err) {
        return res.status(500).json("Could not update user! ")
    }
    return res.status(200).json({ message: "User updated!", user: user.toObject({ getters: true }) })
}

module.exports = updateUser