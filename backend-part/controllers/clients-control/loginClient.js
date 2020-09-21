const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Client = require('../../models/client');

const loginClient = async (req, res, next) => { //functie care logheaza un utilizator existent cerand un email si o parola

    const {

        client_email,
        client_password

    } = req.body
    let existingClient
    try {

        existingClient = await Client.findOne({
            client_email: client_email
        }) //transformarea continutului din baza de date intr-un array de obiecte

        if (!existingClient) // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
            return res.status(401).json({
                message: 'No account found.'
            }); //mesaj de eroare , nu se mai executa functia in continuare

    } catch (error) {
        return res.json({
            error
        });
    };

    if(existingClient.client_loggedIn)
    return res.status(500).json("Client already logged in!")

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(client_password, existingClient.client_password)
    } catch (error) {
        return res.status(500).json('Login failed, please try again later.')
    }

    if (!isValidPassword) {
        return res.status(401).json('Wrong password.')
    }

    let token;
    try {
        token = jwt.sign({ userID: existingClient.id, email: existingClient.client_email }, 'super_secret', { expiresIn: '1h' });
    } catch (err) {
        return res.status(500).json("Login failed!")
    }

    res.json({
        message: 'Welcome back, ' + existingClient.client_name + '!',
        client: existingClient,
        token: token
    }); // mesaj in caz de succes
};

module.exports = loginClient