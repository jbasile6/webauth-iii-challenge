const router = require('express').Router();
const jwt = require('jsonwebtoken');

const db = require('../database/knexConfig');

router.get('/', restricted, (req, res) => {
    db('users')
        .then(list => res.status(200).json(list))
        .catch(err => res.status(500).json(err));
})



function restricted(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'You shall not pass!' })
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'You shall not pass!' })
    }
}



module.exports = router;