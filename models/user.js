module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return User;
};
