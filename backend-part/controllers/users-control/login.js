const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user');

const loginUser = async (req, res, next) => { //functie care logheaza un utilizator existent cerand un email si o parola

  const {

    email,
    password

  } = req.body
  let existingUser
  try {

    existingUser = await User.findOne({
      email: email
    }) //transformarea continutului din baza de date intr-un array de obiecte

    if (!existingUser) // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
      return res.status(401).json({
        message: 'No account found .'
      }); //mesaj de eroare , nu se mai executa functia in continuare
  } catch (error) {
    return res.json({
      error
    });
  };

  if(existingUser.loggedIn)
  return res.status(401).json("User already logged in!")

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password)
  } catch (error) {
    return res.status(500).json('Login failed, please try again later.')
  }

  if (!isValidPassword) {
    return res.status(401).json('Wrong password.')
  }

  let token;
  try {
    token = jwt.sign({ userID: existingUser.id, email: existingUser.email }, 'super_secret', { expiresIn: '1h' });
  } catch (err) {
    return res.status(500).json("Login failed!")
  }

  res.json({
    message: 'Welcome back, ' + existingUser.name + '!',
    user: existingUser,
    token: token
  }); // mesaj in caz de succes
};

module.exports = loginUser