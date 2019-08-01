const { Router } = require('express');

const router = Router();

const user = require('../Controllers/users.controller')

router.route('/')
    .post(user.createUser)
    .get(user.getUsers)

router.route('/:id')
    .get(user.getUser)
    .delete(user.deleteUser)

module.exports = router;