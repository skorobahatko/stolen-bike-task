const { Router } = require ('express');
const searchRouter = Router ();
const { searchController } = require ('../controllers');

searchRouter.post ('/', searchController.postStolenBike);
searchRouter.post ('/success', searchController.postBikeIsFinded);

module.exports = searchRouter;
