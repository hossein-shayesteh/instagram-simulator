$(document).ready(function () {
  $(".nav-post").click(function (e) {
    e.preventDefault();
    $(".post-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
});
