var db = require("../models");
module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.newUser.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new user
  app.post("/api/newuser", checkNotAuthenticated, function (req, res) {
    console.log(req.body);
        //we can store our hashedPassword into our database
        //var hashedPassword = await bcrypt.hash(req.body.password, 10);


        db.newUser.create({
            username: req.body.username,
            password: req.body.password, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            html: req.body.html,
            css: req.body.css,
            node: req.body.node,
            python: req.body.python,
            react: req.body.react,
            javascript: req.body.javascript,
            sql: req.body.sql,
            php: req.body.php,
            ruby: req.body.ruby,
            java: req.body.java,
            c: req.body.c,
            cplus: req.body.cplus,
            experience: req.body.experience
        }).then(function (dbUser) {
          console.log(dbUser);
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
      category: req.body.category,
      createdAt: req.body.createdAt
    }).then(function() {
      // `results` here would be the newly created post
      res.end();
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving all posts of a certain category
  app.get("/api/lang/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(data){
      res.json(data);
    })
  })


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
