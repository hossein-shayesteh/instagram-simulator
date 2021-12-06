$(document).ready(function () {
  $(".direct-send-to").click(function (e) {
    e.preventDefault();
    $(".direct-send-to-modals").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
});
