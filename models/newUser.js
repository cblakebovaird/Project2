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
    html: DataTypes.BOOLEAN,
    css: DataTypes.BOOLEAN,
    node: DataTypes.BOOLEAN,
    python: DataTypes.BOOLEAN,
    react: DataTypes.BOOLEAN,
    javascript: DataTypes.BOOLEAN,
    sql: DataTypes.BOOLEAN,
    php: DataTypes.BOOLEAN,
    ruby: DataTypes.BOOLEAN,
    java: DataTypes.BOOLEAN,
    c: DataTypes.BOOLEAN,
    cplus: DataTypes.BOOLEAN,
    experience: DataTypes.INTEGER
  });
  return newUser;
};

// Makes the New User Model available for other files (will also create a table)

// module.exports = function(sequelize, DataTypes) {

//   return newUser;
// };
