'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dosage: {
        type: Sequelize.TEXT
      },
      pathology: {
        type: Sequelize.TEXT
      },
      side_effects: {
        type: Sequelize.TEXT
      },
      contraindication: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      libelle: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Drugs');
  }
};