module.exports = (sequelize, DataTypes) => {
    const Bike = sequelize.define ('Bike', {
        id: {
            type: DataTypes.NUMBER,
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
            type: DataTypes.NUMBER,
            allowNull: false
        },
        price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'stolen-bikes',
        timestamps: false
    });
    return Bike;
};
