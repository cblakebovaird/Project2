var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  
  app.get("/landing", function (req, res) {
    res.render("landing");
  });

  
  // handlebars page for create user
  app.get("/newuser", function (req, res) {
    res.render("user");
  });

  // Load User page and pass in an User by id
  app.get("/User/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.render("User", {
        User: dbUser
      });
    });
  });

  //testing handlebars for posting until it is finished

  app.get("/postTest", function (req, res) {
    res.render("postTesting");
  });


  app.get("/posts/:id", function (req, res) {
    db.Post.findOne({ where: { id: req.params.id } }).then(function (data) {
      console.log(data.dataValues);
      res.render("commPage", data.dataValues);
    });
  })

  app.get("/lang/:category", function (req, res) {
    console.log("this is the log: " + req.params.category);
    db.Post.findAll({ where: { category: req.params.category } }).then(function (data) {
        console.log(data);
        
      res.render("langPage", {post: data});
      
    })
  })

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
