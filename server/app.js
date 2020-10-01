const express = require('express');
const server = express();
const {apiRouter} = require('./routes');

server.use(express.urlencoded({extended: false}));
server.use(express.json());

const database = require('./database').getInstance();
database.setModels();

server.use('/api', apiRouter);

server.use('*', (err, req, res, next) => {
    res.status(err.status || 404).json({
        message: 'error',
        code: ''
    })
});

server.listen(8080, (err) => {
    if (err) console.log (err);
    console.log ('server listening on 8080');
});

