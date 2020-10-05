module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define ('Client', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'clients',
        timestamps: false
    });
    return Client;
};
