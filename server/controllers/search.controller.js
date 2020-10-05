const {searchService, policeService} = require('../services');
const {timeCalc} = require('../helpers');

module.exports = {
    postStolenBike: async (req, res) => {
        const bike = req.body;

        await searchService.servicePostStolenBike(bike);

        const policeman = await policeService.addPolicemanToAccident();

        const coef = timeCalc(bike, policeman);

        res.json({policeman, coef});
    },
    postBikeIsFinded: async (req, res) => {
        const policeman = req.body;

        const police = await policeService.removePoliceManFromAccident(policeman.id);

        if (police) {
            res.json('Success');
        }
    }
};
