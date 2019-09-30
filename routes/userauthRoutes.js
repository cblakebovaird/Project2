var db = require("../models");
var path = require("path");
var passport = require("passport");

module.exports = function(app) {
app.get("/", checkAuthenticated, (req, res) => {
    res.render("index.handlebars", { name: req.user.name })
})

app.get("/login", checkNotAuthenticated, (req, res) => {
    res.render("index.handlebars", { name: false })
})

app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

app.get("/register", checkNotAuthenticated, (req, res) => {
    res.render("register.js");
})

app.post("/register", checkNotAuthenticated, async (req, res) => {
    try {
        //we can store our hashedPassword into our database
        var hashedPassword = await bcrypt.hash(req.body.password, 10);

        //this is to push our information into an array
        // users.push ({
        //     id: Date.now().toString(),
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: hashedPassword
        // })
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }).then(function (dbUser) {
            res.redirect("/login");
        })
    } catch {
        res.redirect("/register");

        //to veryfy if we actually added the users 
        //console.log(users);
    }
})
//loging out the user
app.delete("/logout", (req, res) => {
    //passport sets up the logOut function automatically
    req.logOut();
    res.redirect("/login");
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