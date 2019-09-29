// // when user clicks add-btn
$("#create-profile").on("click", function(event) {
  console.log("connected");
  event.preventDefault();

  // make a newUser obj
  var newUser = {
    // name from name input
    username: $("#username-text").val(),
    // password from password input
    password: $("#password").val(),
    firstName: $("#firstName").val(),
    // age from age input
    age: $("#age").val(),
    // city from city input
    city: $("city").val(),
    // state from state input
    state: $("#state").val(),
    // zip from zip input
    zip: $("#zip").val(),
    // html value
    html: $("#html").val(),
    // css value
    css: $("#css").val(),
    // node value
    node: $("#node").val(),
    // python value
    python: $("#python").val(),
    // react value
    react: $("#react").val(),
    // javascript value
    javascript: $("#javascript").val(),
    // sql value
    sql: $("#sql").val(),
    // php value
    php: $("#php").val(),
    // ruby value
    ruby: $("#ruby").val(),
    // experience value
    experience: $("experience").val()
  };

  // console.log(newUser);
  // send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
  
  .then(function() {
  
  });
});