var Sequelize = require("sequelize");
// sequelize (lowercase)
var sequelize = require("../config/connection.js");

// Post Model
var Post = sequelize.define("chirp", {
  user: Sequelize.STRING,
  body: Sequelize.STRING,
  createdAt: Sequelize.DATE
});

// Syncs with DB
Post.sync();

//Exports Post Model
module.exports = Post;
