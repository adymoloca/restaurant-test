const express = require('express');
const { check } = require("express-validator");


const deleteUser = require('../../controllers/users-control/delete-user');
const updateUser = require('../../controllers/users-control/update-user');
const createUser = require('../../controllers/users-control/new-user');
const loginUser = require('../../controllers/users-control/login');
const showUserByID = require('../../controllers/users-control/show-user-by-id');
const showAllUsers = require('../../controllers/users-control/get-all-users');
const updateUserPass = require('../../controllers/users-control/edit-password');
const recoverUserPass = require('../../controllers/users-control/user-recover-pass');

const router = express.Router();

router.post('/addUser', [check('name').not().isEmpty(), check('email').normalizeEmail().isEmail(), check('password').isLength({ min: 6 })], createUser);
router.post('/login', loginUser);
router.patch('/editPass/:uid', [ check('newPassword').isLength({ min: 6 })], updateUserPass);
router.patch('/recoverPass/:uid', [ check('newPassword').isLength({ min: 6 })], recoverUserPass);
router.patch('/:uid', [check('name').not().isEmpty()], updateUser);
router.get('/', showAllUsers);
router.get('/:uid', showUserByID);
router.delete('/:uid', deleteUser);


module.exports = router;