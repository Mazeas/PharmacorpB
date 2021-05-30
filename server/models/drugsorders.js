'use strict';
module.exports = (sequelize, DataTypes) => {
  const DrugsOrders = sequelize.define('DrugsOrders', {
    drug_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {});
  DrugsOrders.associate = function(models) {
    // associations can be defined here
  };
  return DrugsOrders;
};