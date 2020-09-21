const {
    validationResult
} = require('express-validator');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Client = require('../../models/client');

const createClient = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({
            message: 'Invalid input.',
            
        });
    }

    const {
        client_name,
        client_email,
        client_password,
        client_phone,
        client_adress,
        client_confirm_password,

    } = req.body

    let createdClient
    try {

        const clients = await Client.find().exec();
        const VALID = clients.find(u => u.client_email === client_email);

        if (VALID || client_password !== client_confirm_password) // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
            return res.json({
                message: 'Email already used or the passwords do not match.'
            });

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(client_password, 5) // criptarea parolei
        } catch (err) {
            res.status(500).json({
                error: "Could not create client."
            })
        }

        createdClient = new Client({
            client_name,
            client_email,
            client_phone,
            client_password: hashedPassword,
            client_adress,
        })

        await createdClient.save();

    } catch (err) {
        res.status(500).json("Registration has failed!")
    }

    let token;
    try {
        token = jwt.sign({ userID: createdClient.id, email: createdClient.client_email }, 'super_secret', { expiresIn: '1h' });
    } catch (err) {
        return res.status(500).json("Failed registration!")
    }
    res.status(201).json({
        message: 'Welcome, ' + createdClient.client_name + '!',
        client: createdClient,
        token: token
    });
};

module.exports = createClient

