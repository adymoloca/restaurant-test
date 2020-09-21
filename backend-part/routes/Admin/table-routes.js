const express = require('express');
const createTable = require('../../controllers/tables-control.js/addTable');
const deleteTable = require('../../controllers/tables-control.js/deleteTable');
const updateTable = require('../../controllers/tables-control.js/editTable');
const showAllTables = require('../../controllers/tables-control.js/getTables');



const router = express.Router();

router.get('/',showAllTables);
router.delete('/:tableID',deleteTable);
router.post('/addTable',createTable);
router.patch('/:tableid',updateTable);



module.exports = router;