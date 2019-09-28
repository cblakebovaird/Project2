// when user clicks add-btn
$("#create-profile").on("click", function(event) {
  event.preventDefault();

  // make a newUser obj
  var newUser = {
    // name from name input
    username: $("#username-text").val().trim(),
    // password from password input
    password: $("#password").val().trim(),
    firstName: $("#firstName").val().trim(),
    // age from age input
    age: $("#age").val().trim(),
    // city from city input
    city: $("city").val().trim(),
    // state from state input
    state: $("#state").val().trim(),
    // zip from zip input
    zip: $("#zip").val().trim()
  };
  console.log(newUser);
  // send an AJAX POST-request with jQuery
  $.post("/api/newusers", newUser)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding user...");
    });
});
