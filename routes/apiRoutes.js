var db = require("../models/newUser");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/newuser", function(req, res) {
    console.log("New User Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO "

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
};
