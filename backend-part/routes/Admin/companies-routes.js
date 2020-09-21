const express = require('express');

const newCompany = require('../../controllers/companies-control/new-company');
const updateCompany = require('../../controllers/companies-control/patch-company');
const showAllCompanies = require('../../controllers/companies-control/get-company');

const router = express.Router();

router.get('/',showAllCompanies)
router.post('/addCompany',newCompany.createCompany);
router.patch('/:companyID', updateCompany)

module.exports = router;