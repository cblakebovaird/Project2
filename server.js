if (process.env.NOSE_ENV !== "production") {
  require("dotenv").config();
}
var express = require("express");
var exphbs = require("express-handlebars");

//var req for passport library and user authentication
var passport = require("passport"); // also do npm install passport-local
var flash = require("express-flash");
var session = require("express-session");
var methodOverride = require("method-override");
var bcrypt = require("bcrypt");
//===================================================== install them all - SM

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

//initializing the passport library
var initializePassport = require("./passport-config");
initializePassport(passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//user authentication middleware
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
//======================================= - SM 

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
//require("./routes/htmlRoutes")(app);
require("./routes/userauthRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
