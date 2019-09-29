console.log("connected");

// Get references to page elements
var $usernameText = $("#username-text");
var $passwordText = $("#password-text");
var $firstName = $("#firstName");
var $lastName = $("#lastName");
var $age = $("#age");
var $city = $("#city");
var $state = $("#state");
var $zip = $("#zip");
var $html = $("#html");
var css = $("#css");
var node = $("#node");
var python = $("#python");
var react = $("#react");
var javascript = $("#javascript");
var sql = $("#sql");
var php = $("#php");
var ruby = $("#ruby");
var java = $("#java");
var c = $("#c");
var cplus = $("#cplus");
var experience = $("#experience");
var $submitBtn = $("#submit");
var $userList = $("#user-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveUser: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getUsers: function() {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  },
  deleteUser: function(id) {
    return $.ajax({
      url: "api/users/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshUsers = function() {
  API.getUsers().then(function(data) {
    var $users = data.map(function(user) {
      var $a = $("<a>")
        .text(user.text)
        .attr("href", "/user/" + user.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": user.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $userList.empty();
    $userList.append($users);
  });
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    text: $usernameText.val().trim(),
    password: $passwordText.val().trim()
  };

  if (!(user.text && user.password)) {
    alert("You must enter an user text and password!");
    return;
  }

  API.saveUser(user).then(function() {
    refreshUsers();
  });

  $usernameText.val("");
  $passwordText.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteUser(idToDelete).then(function() {
    refreshUser();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$userList.on("click", ".delete", handleDeleteBtnClick);
