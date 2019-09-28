var db = require("../models");
var Post = require("../models/testPost.js");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/newuser", function(req, res) {
    console.log(req.body);

    db.newUser.create(newUser).then(function(dbNewUser) {
      res.json(dbNewUser);
    });
  });

  // Delete an User by id
  app.delete("/api/Users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get all Posts
  app.get("/api/all", function(req, res) {
    // finds all post then returns them as JSON
    Post.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a post
  app.post("/api/new", function(req, res) {
    console.log("Post Data:");
    console.log(req.body);

    Post.create({
      title: req.body.title,
      body: req.body.body,
      createdAt: req.body.createdAt
    }).then(function() {
      // `results` here would be the newly created post
      res.end();
    });
  });
};
