//home aside *suggest for you* div left value changes according to the window resizing
$(window).on("resize", function () {
  var ScreenWidth = $("body").width();
  // calculate the distance from left when loading the window
  var AsideLeft = (ScreenWidth - 910) / 2 + 602;
  var DirectLeft = (ScreenWidth - 910) / 2;
  $(".suggestions-for-you-inner ").css("left", AsideLeft);
  $(".direct-inner").css("left", DirectLeft);
});
$(document).ready(function () {
  var ScreenWidth = $("body").width();
  // calculate the distance from left when loading the window
  var AsideLeft = (ScreenWidth - 910) / 2 + 602;
  var DirectLeft = (ScreenWidth - 910) / 2;
  $(".suggestions-for-you-inner ").css("left", AsideLeft);
  $(".direct-inner").css("left", DirectLeft);
  //hide the loading screen when document is ready
  $(".loading-screen").delay(1000).fadeOut("fast");
  $("body").removeClass("no-scroll");
});
