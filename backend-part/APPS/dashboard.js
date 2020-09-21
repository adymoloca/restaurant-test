const express = require('express')

const dashboardApp = express();

const users_routes = require('../routes/Admin/users-routes');
// const companies_routes = require('./routes/companies-routes')
const products_routes = require('../routes/Admin/products-routes')
const categories_routes = require('../routes/Admin/category-routes')
const extraCategories_routes = require('../routes/Admin/extraCategory-routes')
const extras_routes = require('../routes/Admin/extra-routes')
const coupons_routes = require('../routes/Admin/coupons-routes')
const companies_routes = require('../routes/Admin/companies-routes')
const table_routes = require('../routes/Admin/table-routes')

dashboardApp.use('/users', users_routes);
dashboardApp.use('/companies', companies_routes);
dashboardApp.use('/products', products_routes);
dashboardApp.use('/categories', categories_routes);
dashboardApp.use('/extraCategories', extraCategories_routes)
dashboardApp.use('/extras', extras_routes);
dashboardApp.use('/coupons', coupons_routes);
dashboardApp.use('/tables', table_routes);

module.exports = dashboardApp