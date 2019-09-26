var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // loading landing page until we connect them
  app.get("/landing", function(req, res) {
    res.sendFile(path.join(__dirname, "../test/landingtest.html"));
  });

  app.get("/newuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newprofile.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });
  // Load User page and pass in an User by id
  app.get("/User/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("User", {
        User: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
