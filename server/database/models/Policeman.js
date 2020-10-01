module.exports = (sequelize, DataTypes) => {
    const Policeman = sequelize.define ('Policeman', {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skill: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'police',
        timestamps: false
    });
    return Policeman;
};
