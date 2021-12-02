$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //            posts slider           //
  ///////////////////////////////////////
  //click on scroll to right
  var i = 0;
  $(".left-scroll").hide();
  $(".right-scroll").click(function (e) {
    e.preventDefault();
    //our variabels
    i = i + 1;
    var CountToLeft = i * -580;
    var x = $(this)
      .parents(".follower-post-box-media-scroll")
      .siblings(".follower-post-box-media-img ")
      .children();
    x.css("transform", "translateX(" + CountToLeft + "px)");
    var SliderLength = x.length;
    // show or hide scroll buttons
    //left scroll button
    if (i == 0) {
      $(".left-scroll").hide();
    }
    if (i > 0) {
      $(".left-scroll").show();
    }
    //right scroll button
    if (i == SliderLength - 1) {
      $(".right-scroll").hide();
    }
    if (i < SliderLength - 1) {
      $(".right-scroll").show();
    }
    //followers image circles
    $(".follower-post-box-circle")
      .children(":nth-child(" + (i + 1) + ")")
      .addClass("active");
    $(".follower-post-box-circle")
      .children(":nth-child(" + i + ")")
      .removeClass("active");
    $(".follower-post-box-circle")
      .children(":nth-child(" + (i + 2) + ")")
      .removeClass("active");
  });
  //click on scroll to left
  $(".left-scroll").click(function (e) {
    e.preventDefault();
    //our variabels
    i = i - 1;
    var CountToLeft = i * -580;
    var x = $(this)
      .parents(".follower-post-box-media-scroll")
      .siblings(".follower-post-box-media-img ")
      .children();
    x.css("transform", "translateX(" + CountToLeft + "px)");
    var SliderLength = x.length;
    // show or hide scroll buttum
    //left scroll button
    if (i == 0) {
      $(".left-scroll").hide();
    }
    if (i > 0) {
      $(".left-scroll").show();
    }
    //right scroll button
    if (i == SliderLength - 1) {
      $(".right-scroll").hide();
    }
    if (i < SliderLength - 1) {
      $(".right-scroll").show();
    }
    //followers image circles
    $(".follower-post-box-circle")
      .children(":nth-child(" + (i + 1) + ")")
      .addClass("active");
    $(".follower-post-box-circle")
      .children(":nth-child(" + i + ")")
      .removeClass("active");
    $(".follower-post-box-circle")
      .children(":nth-child(" + (i + 2) + ")")
      .removeClass("active");
  });
});
