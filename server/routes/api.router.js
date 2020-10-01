const {Router} = require('express');
const apiRouter = Router();
const searchRouter = require('./search.router');

apiRouter.use('/search', searchRouter);

module.exports = apiRouter;
