'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('police', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      skill: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    await queryInterface.createTable('stolen-bikes', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      model: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      timeOfSteal: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  }
};
