$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //            story slider           //
  ///////////////////////////////////////
  //click on scroll to right
  $(".story-right-scroll").click(function (e) {
    e.preventDefault();
    //hide scroll to right buttom
    $(this).fadeOut("fast");
    //show scroll to left buttom
    $(".story-left-scroll").fadeIn("fast");
    $(".story").children("ul").css("transform", "translateX(-320px)");
  });
  //click on scroll to left
  $(".story-left-scroll").click(function (e) {
    e.preventDefault();
    //hide scroll to left buttom
    $(this).fadeOut("fast");
    //hide scroll to right buttom
    $(".story-right-scroll").fadeIn("fast");
    $(".story").children("ul").css("transform", "translateX(0)");
  });
});
