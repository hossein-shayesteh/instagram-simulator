//home aside *suggest for you* div left value changes according to the window resizing
$(window).on("resize", function () {
  var ScreenWidth = $("body").width();
  // calculate the distance from left when resizing the window
  var AsideLeft = (ScreenWidth - 911) / 2 + 604;
  $(".suggestions-for-you-inner ").css("left", AsideLeft);
});
$(document).ready(function () {
  var ScreenWidth = $("body").width();
  // calculate distance from left when document is openeing
  var AsideLeft = (ScreenWidth - 911) / 2 + 604;
  $(".suggestions-for-you-inner ").css("left", AsideLeft);
  //hide the loading screen when document is ready
  $(".loading-screen").delay(1000).fadeOut("fast");
  $("body").removeClass("no-scroll");
});
