/* global moment */

// When user clicks add-btn
$("#postSubmit").on("click", function(event) {
  event.preventDefault();

  // Make a newPost object
  var newPost = {
    title: $("#title")
      .val()
      .trim(),
    body: $("#postBox")
      .val()
      .trim(),
    // category: $("#cateogry")
    //   .val()
    //   .trim(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newPost);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newPost)
    // On success, run the following code
    .then(function() {
      var row = $("<div>");
      row.addClass("post");

      row.append("<p>Title: " + newPost.title + " posted: </p>");
      row.append("<p>" + newPost.body + "</p>");
      // row.append("<p>Category: " + newPost.category + "</p>")
      row.append(
        "<p>At " + moment(newPost.createdAt).format("h:mma on dddd") + "</p>"
      );

      $("#postArea").prepend(row);
      window.location.reload();
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#postBox").val("");
});
console.log("getting all");
// When the page loads, grab all of our posts
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div class='postDivs'>");
      row.addClass("post");

      row.append("<p>" + data[i].title + "<hr>");
      row.append("<p>" + data[i].body + "</p>");
      row.append(
        "<p>At " + moment(data[i].createdAt).format("h:mma on dddd") + "</p><button class='comBtn' id='" + data[i].id + "' href='/posts/" + data[i].id + "'>View and Create Comments</button>"
      );

      $("#postArea").prepend(row);
    }
  }
});
$(document).on("click", "button.comBtn", commentBtn);
function commentBtn() {
    var currentPost = $(this)
      [0];
      console.log(currentPost);
      console.log("id: " + currentPost.id);
    window.location.href = "/posts/" + currentPost.id + "";
}