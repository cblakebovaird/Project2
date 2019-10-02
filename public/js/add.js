// var express = require("express");
// var app = express();

// when user clicks add-btn
$("#create-profile").on("click", function(event) {
  console.log("connected");
  event.preventDefault();
  var htmlValue = $("input[name='html']:checked").val();

  // make a newUser obj
  var newUser = {
    // name from name input
    username: $("#username-text").val(),
    // password from password input
    password: $("#password-text").val(),
    // firstname from firstname input
    firstName: $("#firstName").val(),
    // lastname from lastname input
    lastName: $("#lastName").val(),
    // age from age input
    age: $("#age").val(),
    // city from city input
    city: $("#city").val(),
    // state from state input
    state: $("#state").val(),
    // zip from zip input
    zip: $("#zip").val(),
    // html value
    html: htmlValue,
    // css value
    css: $("input[name='css']:checked").val(),
    // node value
    node: $("input[name='node']:checked").val(),
    // python value
    python: $("input[name='python']:checked").val(),
    // react value
    react: $("input[name='react']:checked").val(),
    // javascript value
    javascript: $("input[name='javascript']:checked").val(),
    // sql value
    sql: $("input[name='sql']:checked").val(),
    // php value
    php: $("input[name='php']:checked").val(),
    // ruby value
    ruby: $("input[name='ruby']:checked").val(),
    // experience value
    experience: $("experience").val()
  };
  $.post("/api/newuser", newUser, function() {
    console.log(newUser);
  }).then(
    window.location.href = "/landing"
  )

});
