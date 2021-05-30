'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersRights = sequelize.define('UsersRights', {
    user_id: DataTypes.INTEGER,
    right_id: DataTypes.INTEGER
  }, {});
  UsersRights.associate = function(models) {
    // associations can be defined here
  };
  return UsersRights;
};