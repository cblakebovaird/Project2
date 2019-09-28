var db = require("../models");
var Post = require("../models/testPost.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
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
