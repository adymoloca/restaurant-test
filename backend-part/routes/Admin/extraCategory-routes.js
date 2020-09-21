const express = require('express');
const { create_ExtraCategory } = require('../../controllers/extra-category-control/add_extra_category');
const deleteExtraCategory = require('../../controllers/extra-category-control/delete_extraCategory');
const showAllExtraCategories = require('../../controllers/extra-category-control/get-extra-categories');
const updateExtraCategory = require('../../controllers/extra-category-control/patch-extra-category');


const router = express.Router();

router.get('/',showAllExtraCategories)
router.post('/addExtraCategory', create_ExtraCategory);
router.patch('/:extraCategoryID', updateExtraCategory);
router.delete('/:extraCategoryID', deleteExtraCategory);

module.exports = router;