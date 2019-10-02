module.exports = function(sequelize, DataTypes) {
  var newUser = sequelize.define("newUser", {
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    html: DataTypes.STRING,
    css: DataTypes.STRING,
    node: DataTypes.STRING,
    python: DataTypes.STRING,
    react: DataTypes.STRING,
    javascript: DataTypes.STRING,
    sql: DataTypes.STRING,
    php: DataTypes.STRING,
    ruby: DataTypes.STRING,
    java: DataTypes.STRING,
    c: DataTypes.STRING,
    cplus: DataTypes.STRING,
    experience: DataTypes.INTEGER
  });
  return newUser;

};

