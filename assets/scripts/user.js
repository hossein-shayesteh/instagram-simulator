$(document).ready(function () {
  //show activity dropdown
  $(".nav-user").click(function (e) {
    e.preventDefault();
    // check if dropdown is open
    // if its not open then open it
    if ($(".user-dropdown-section").css("display") == "none") {
      $(".user-dropdown-section").fadeIn("fast");
    }
  });
  //hide dropdown e=when you click outside the dropdown
  $(document).mousedown(function (e) {
    if ($(e.target).parents(".user-dropdown-section").length === 0) {
      $(".user-dropdown-section").fadeOut("fast");
    }
  });
});
