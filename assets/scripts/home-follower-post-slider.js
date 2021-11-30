$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //            posts slider           //
  ///////////////////////////////////////
  //scroll to left
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
    // show or hide scroll buttum
    //left
    if (i == 0) {
      $(".left-scroll").hide();
    }
    if (i > 0) {
      $(".left-scroll").show();
    }
    //right
    if (i == SliderLength - 1) {
      $(".right-scroll").hide();
    }
    if (i < SliderLength - 1) {
      $(".right-scroll").show();
    }
  });
  //scroll to right
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
    //left
    if (i == 0) {
      $(".left-scroll").hide();
    }
    if (i > 0) {
      $(".left-scroll").show();
    }
    //right
    if (i == SliderLength - 1) {
      $(".right-scroll").hide();
    }
    if (i < SliderLength - 1) {
      $(".right-scroll").show();
    }
  });
});
