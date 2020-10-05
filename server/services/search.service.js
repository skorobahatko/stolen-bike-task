const database = require ('../database').getInstance ();

module.exports = {
    servicePostStolenBike: (newObj) => {
        const Bike = database.getModel ('StolenBike');
        console.log (Bike);
        return Bike.create (newObj, { new: true });
    }
};
