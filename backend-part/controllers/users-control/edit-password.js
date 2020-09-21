const User = require('../../models/user');
const bcrypt =  require('bcryptjs')
const {
  validationResult
} = require('express-validator');
const updateUserPass = async (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({
      message: 'Invalid input.'
    });
  }

    const userID = req.params.uid;
    const {  currentPassword, newPassword, confirm_newPassword } = req.body

    if(confirm_newPassword !== newPassword)
        return res.status(401).json("Passwords do not match!")

    let user;
    try {
        user = await User.findById(userID);
    } catch (err) {
        return res.status(500).json("Error! Could not update password. ")
    }

    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(currentPassword, user.password)
    } catch (error) {
      return res.status(500).json('Edit failed, please try again later.')
    }
    if (!isValidPassword) {
        return res.status(401).json('Wrong password!')
    }
    
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(newPassword, 5) // criptarea parolei
    } catch (err) {
      res.status(500).json({
        error: "Could not edit password."
      })
    }

    user.password = hashedPassword
    user.last_updated = Date.now()

    try {
        await user.save();
    } catch (err) {
        return res.status(500).json("Could not update password! ")
    }
    return res.status(200).json({ message: "Password updated!", user: user.toObject({ getters: true }) })
}

module.exports = updateUserPass