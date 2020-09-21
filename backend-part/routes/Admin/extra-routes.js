const express = require('express');
const { createExtra } = require('../../controllers/extra-control/add_extra');
const deleteExtra = require('../../controllers/extra-control/delete_extra');
const showAllExtras = require('../../controllers/extra-control/get_extras');
const updateExtra = require('../../controllers/extra-control/patch-extra');


const router = express.Router();

router.get('/',showAllExtras);
router.patch('/:extraID',updateExtra)
router.post('/addExtra', createExtra);
router.delete('/:extraID', deleteExtra);


module.exports = router;