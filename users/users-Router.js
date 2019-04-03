const router = require('express').Router();

const db = require('../database/knexConfig');

router.get('/', (req, res) => {
    db('users')
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err));
})



module.exports = router;