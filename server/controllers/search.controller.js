module.exports = {
    postStolenBike: async (req, res) => {
        const {model, price, color, timeOfSteal} = req.body;
        const bike = req.body;
        res.json(bike);
    }
};
