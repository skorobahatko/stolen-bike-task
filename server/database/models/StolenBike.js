module.exports = (sequelize, DataTypes) => {
    const Bike = sequelize.define ('Bike', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timeOfSteal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'stolen-bikes',
        timestamps: false
    });
    return Bike;
};
