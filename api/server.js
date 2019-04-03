const express =require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-Router');
const userRouter = require('../users/users-Router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//ROUTING__________________________________
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);


server.get('/', (req,res) => {
    res.send('James Basile: Web Auth III Challenge')
});


module.exports = server;