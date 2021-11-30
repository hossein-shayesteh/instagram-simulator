$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //              modals               //
  ///////////////////////////////////////
  // 3dot modal//
  //show
  $(".follower-post-box-header-options > button").click(function (e) {
    e.preventDefault();
    $(".dot-modal").fadeIn("fast");
    $("body").addClass("no-scroll");
  });
  //send to direct modal//
  //show
  $(".follower-post-box-like-comment-button-share").click(function (e) {
    e.preventDefault();
    $(".send-modal").fadeIn("fast");
    $("body").addClass("no-scroll");
  });
  //close modals
  $(".close-modal").click(function (e) {
    e.preventDefault();
    $(".modals").fadeOut("fast");
    $("body").removeClass("no-scroll");
  });
  $(".modal-bg").click(function (e) {
    e.preventDefault();
    $(".modals").fadeOut("fast");
    $("body").removeClass("no-scroll");
  });
});
