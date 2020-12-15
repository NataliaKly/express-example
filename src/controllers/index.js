const { Router } = require('express');
const homeController = require('./home.controller');
const adminHomeController = require('./admin/home.controller');
const adminUsersController = require('./admin/users.controller');
const apiControllers = require('./api');

const router = new Router();

router.use('/admin/', adminHomeController);
router.use('/admin/users', adminUsersController);
router.use('/api', apiControllers);

router.use('/', homeController);

module.exports = router;
