const database = require ('../database').getInstance ();

module.exports = {
    servicePostStolenBike: (json) => {
        const Bike = database.getModel('Bike');
        return Bike.create(json, {new: true});
    }
};
