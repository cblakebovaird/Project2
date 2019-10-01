var db = require("../models");
// var Post = require("../models/testPost.js");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    newUser.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new user
  app.post("/api/newuser", checkNotAuthenticated, function (req, res) {
    console.log(req.body);
        //we can store our hashedPassword into our database
        //var hashedPassword = await bcrypt.hash(req.body.password, 10);

        //this is to push our information into an array
        // users.push ({
        //     id: Date.now().toString(),
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: hashedPassword
        // })
        db.newUser.create({
            username: req.body.username,
            password: req.body.password
        }).then(function (dbUser) {
          console.log(dbUser);
            res.render("index");
        })
})

  // Delete an User by id
  app.delete("/api/Users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //-------------Posting routes-------------------

  // Get all Posts
  app.get("/api/all", function(req, res) {
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
  //this is a function that only allows users who are logged in to view the information in the webpage
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next()
  }

  res.redirect("/login");
}

//this check function wont let users who are already logged in to be redirected to the login page
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return res.redirect("/");
  }
  next();
}
};
