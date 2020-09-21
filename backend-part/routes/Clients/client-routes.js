const express = require('express');
const { check } = require("express-validator");
const createClient = require('../../controllers/clients-control/signup');
const showAllClients = require('../../controllers/clients-control/get-clinets');
const deleteClient = require('../../controllers/clients-control/delete-client');
const updateClient = require('../../controllers/clients-control/patch-client');
const loginClient = require('../../controllers/clients-control/loginClient');
const updateClientPass = require('../../controllers/clients-control/edit-pass');
const recoverClientPass = require('../../controllers/clients-control/client-recover-pass');

const router = express.Router();

router.get('/',showAllClients)
router.post('/signup', [check('client_name').not().isEmpty(), check('client_email').normalizeEmail().isEmail(), check('client_password').isLength({ min: 6 })], createClient);
router.post('/login',loginClient)
router.patch('/:clientID', [check('client_name').not().isEmpty()], updateClient);
router.patch('/editPass/:clientID', [ check('newPassword').isLength({ min: 6 })], updateClientPass);
router.patch('/recoverPass/:clientID', [ check('newPassword').isLength({ min: 6 })], recoverClientPass);
router.delete('/:cid', deleteClient);

module.exports = router;