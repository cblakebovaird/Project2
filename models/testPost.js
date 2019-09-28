//Exports Post Model
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.DATE
  });
  return Post;
};
