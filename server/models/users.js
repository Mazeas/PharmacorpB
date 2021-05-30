'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    society: DataTypes.STRING,
    first_name: DataTypes.STRING,
    family_name: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.belongsToMany(models.Rights, { as: 'rights', through: { model: models.UsersRights, unique: false }, foreignKey: 'user_id', otherKey: 'id', onDelete: 'CASCADE', hooks: true });
  };
  return Users;
};