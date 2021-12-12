$(document).ready(function () {
  //show activity dropdown
  $(".nav-activity").click(function (e) {
    e.preventDefault();
    // check if dropdown is open
    // if its not open then open it
    if ($(".activity-dropdown-section").css("display") == "none") {
      $(".activity-dropdown-section").fadeIn("fast");
    }
  });
  //hide dropdown e=when you click outside the dropdown
  $(document).mousedown(function (e) {
    if ($(e.target).parents(".activity-dropdown-section").length === 0) {
      $(".activity-dropdown-section").fadeOut("fast");
      //reset
      $(".activity-dropdown-inner").delay(500).show(0);
      $(".activity-dropdown-inner-alt").fadeOut("fast");
    }
  });
  //show follow request
  $(".activity-dropdown-follow-request").click(function (e) {
    e.preventDefault();
    $(".activity-dropdown-inner").hide();
    $(".activity-dropdown-inner-alt").show();
  });
});
