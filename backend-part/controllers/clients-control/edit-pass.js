const Client = require('../../models/client');
const bcrypt = require('bcryptjs')
const {
    validationResult
} = require('express-validator');
const updateClientPass = async (req, res, next) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({
            message: 'Invalid input.'
        });
    }

    const clientID = req.params.clientID;
    const { currentPassword, newPassword, confirm_newPassword } = req.body

    if (confirm_newPassword !== newPassword)
        return res.status(401).json("Passwords do not match!")

    let client;
    try {
        client = await Client.findById(clientID);
    } catch (err) {
        return res.status(500).json("Error! Could not update password. ")
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(currentPassword, client.client_password)
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

    client.client_password = hashedPassword


    try {
        await client.save();
    } catch (err) {
        return res.status(500).json("Could not update password! ")
    }
    return res.status(200).json({ message: "Password updated!", client: client.toObject({ getters: true }) })
}

module.exports = updateClientPass