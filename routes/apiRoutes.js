var db = require("../models");
// var db2 = require("../models/testPost.js");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    newUser.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new user
  app.post("/api/newuser", function(req, res) {
    console.log("New User Data:");
    console.log(req.body);

    newUser.create({}).then(function() {
      res.end();
    });

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

  //-------------Posting routes-------------------

  // Get all Posts
  app.get("/api/all", function(req, res) {
    console.log("hi");
    // finds all post then returns them as JSON
    db.Post.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add a post
  app.post("/api/new", function(req, res) {
    console.log("Post Data:");
    console.log(req.body);

    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      createdAt: req.body.createdAt
    }).then(function() {
      // `results` here would be the newly created post
      res.end();
    });
  });
};
