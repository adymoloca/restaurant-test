const User = require('../../models/user');
const bcrypt = require('bcryptjs')
const {
    validationResult
} = require('express-validator');
const recoverUserPass = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({
            message: 'Invalid input.'
        });
    }

    const userID = req.params.uid;
    const { newPassword, confirm_newPassword } = req.body

    if (confirm_newPassword !== newPassword)
        return res.status(401).json("Passwords do not match!")

    let user;
    try {
        user = await User.findById(userID);
    } catch (err) {
        return res.status(500).json("Error! Could not change password. ")
    }



    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(newPassword, 5) // criptarea parolei
    } catch (err) {
        res.status(500).json({
            error: "Could not change password."
        })
    }

    user.password = hashedPassword
    user.last_updated = Date.now()

    try {
        await user.save();
    } catch (err) {
        return res.status(500).json("Could not update password! ")
    }
    return res.status(200).json({ message: "Password changed!", user: user.toObject({ getters: true }) })
}

module.exports = recoverUserPass