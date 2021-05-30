'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drugs = sequelize.define('Drugs', {
    dosage: DataTypes.TEXT,
    pathology: DataTypes.TEXT,
    side_effects: DataTypes.TEXT,
    contraindication: DataTypes.TEXT,
    description: DataTypes.TEXT,
    libelle: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {});
  Drugs.associate = function (models) {
  };
  return Drugs;
};