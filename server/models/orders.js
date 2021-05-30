'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    user_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    libelle: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Orders.associate = function (models) {
    Orders.belongsToMany(models.Drugs, { as: 'drugs', through: { model: models.DrugsOrders, unique: false }, foreignKey: 'order_id', otherKey: 'id', onDelete: 'CASCADE', hooks: true });
    Orders.belongsTo(models.Users, { as: 'user', through: { model: models.DrugsOrders, unique: false }, foreignKey: 'user_id', otherKey: 'id', onDelete: 'CASCADE', hooks: true });

  };
  return Orders;
};