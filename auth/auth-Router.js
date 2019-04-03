const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../database/knexConfig');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash= bcrypt.hashSync(user.password, 10)
    user.password = hash;

    db('users')
        .insert(user)
        .then(saved => res.status(201).json(saved))
        .catch(err => res.status(500).json(err));
});


module.exports = router;