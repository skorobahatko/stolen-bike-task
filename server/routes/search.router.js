const {Router}= require('express');
const searchRouter = Router();
const {searchController} = require('../controllers');

searchRouter.post('/', searchController.postStolenBike);

module.exports = searchRouter;
