const express = require('express');
const { createCategory } = require('../../controllers/category-control/add_category');
const deleteCategory = require('../../controllers/category-control/delete_category');
const showAllCategories = require('../../controllers/category-control/get_categories');
const updateCategory = require('../../controllers/category-control/patch_category');


const router = express.Router();

router.get('/getCategories', showAllCategories);
router.post('/addCategory',createCategory);
router.patch('/:categoryID',updateCategory);
router.delete('/:categoryID', deleteCategory);




module.exports = router;