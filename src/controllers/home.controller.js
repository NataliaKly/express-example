const usersRepository = require('../repositories/users.repository');

const { Router } = require('express');

const router = new Router();

router.get('/', (_request, response) => {
    response.render('pages/home');
});

router.get('/users', async (_request, response) => {
    const users = await usersRepository.getAll();
    response.render('pages/users/view', { users });
});

module.exports = router;
