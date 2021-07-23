const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const restrict = require('./middleware/restricted.js');

const authRouter = require('./auth/auth-router.js');
const jokesRouter = require('./jokes/jokes-router.js');
const userRouter = require('./users/user-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', restrict, jokesRouter); // only logged-in users should have access!
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Dad Jokes server."})
})

server.use('*', (req, res) => {
    res.status(404).json({ message: "No such endpoint" })
})

server.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ 
        message: "Error on server",
        err: err.message
    });
})

module.exports = server;
