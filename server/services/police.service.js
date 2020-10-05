const database = require ('../database').getInstance ();
const { Sequelize } = require ('sequelize');

module.exports = {
    addPolicemanToAccident: async () => {
        const Police = database.getModel ('Policeman');
        const policeman = await Police.findOne ({ order: [ Sequelize.fn ('RAND') ] }, {
            where: {
                status: false
            }
        });
        policeman.status = true;
        await policeman.save ();
        return policeman;
    },
    removePoliceManFromAccident: async (id) => {
        const Police = database.getModel ('Policeman');
        const findedPoliceman = Police.update ({status: false},{
            where: { id: id }
        });
        return findedPoliceman;
    }
};
