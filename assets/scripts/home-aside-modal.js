$(document).ready(function () {
  // switch account modal//
  //show
  $(".switch-account-switch > a ,.direct-switch-account").click(function (e) {
    e.preventDefault();
    $(".switch-account-modal").fadeIn("fast");
    //fixing screen from scrolling
    $("body").addClass("no-scroll");
  });
  //close modals by clicking on*.close-modal*
  $(".close-modal").click(function (e) {
    e.preventDefault();
    //hide
    $(".modals").fadeOut("fast");
    //allow screen to scroll
    $("body").removeClass("no-scroll");
    //close modals by clicking on*.modal-bg*
  });
  $(".modal-bg").click(function (e) {
    e.preventDefault();
    //hide
    $(".modals").fadeOut("fast");
    //allow screen to scroll
    $("body").removeClass("no-scroll");
  });
  //unfollow modal *shravanraoo*
  $(
    ".suggestions-for-you-list-items-follow-1 ,.suggestions-for-you-list-dropdown-follow-buttom-1 ,.follower-post-box-header-dropdown-follow-1"
  ).click(function (e) {
    //check if someone in followed or not
    var FollowText = $(".suggestions-for-you-list-items-follow-1")
      .children("a")
      .text();
    //if it is not followed then follow
    if (FollowText == "Follow") {
      e.preventDefault();
      //hide follow text
      $(".suggestions-for-you-list-items-follow-1")
        .children("a")
        .hide()
        .delay(1300)
        .show(0);
      //show loading
      $(".suggestions-for-you-list-items-follow-1")
        .children(".loading")
        .show()
        .delay(1300)
        .hide(0);
      //show followed text
      $(".suggestions-for-you-list-items-follow-1")
        .children("a")
        .text("Followed");
      //change text color to black
      $(".suggestions-for-you-list-items-follow-1")
        .children("a")
        .css("color", "#262626");
      //change the dropdown button when you follow someone
      $(".suggestions-for-you-list-items-follow-1")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".suggestions-for-you-list-dropdown-follow-buttom")
        .hide();
      //replace new button
      $(".suggestions-for-you-list-items-follow-1")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".follower-post-box-header-dropdown-follow")
        .delay(1300)
        .show(0);
    }
    if (FollowText == "Followed") {
      e.preventDefault();
      $(".unfollow-account-modal-1").fadeIn("fast");
      $("body").addClass("no-scroll");
      $(".modal-unfollow-1").click(function (e) {
        e.preventDefault();
        $(".modals").fadeOut("fast");
        $("body").removeClass("no-scroll");
        $(".suggestions-for-you-list-items-follow-1")
          .children("a")
          .text("Follow");
        $(".suggestions-for-you-list-items-follow-1")
          .children("a")
          .css("color", "#0095f6");
        $(".suggestions-for-you-list-items-follow-1")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".suggestions-for-you-list-dropdown-follow-buttom")
          .show();
        $(".suggestions-for-you-list-items-follow-1")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".follower-post-box-header-dropdown-follow")
          .hide();
      });
    }
  });
  //unfollow modal *eunibugg*
  $(
    ".suggestions-for-you-list-items-follow-2 ,.suggestions-for-you-list-dropdown-follow-buttom-2 ,.follower-post-box-header-dropdown-follow-2"
  ).click(function (e) {
    var FollowText = $(".suggestions-for-you-list-items-follow-2")
      .children("a")
      .text();
    if (FollowText == "Follow") {
      e.preventDefault();
      $(".suggestions-for-you-list-items-follow-2")
        .children("a")
        .hide()
        .delay(1300)
        .show(0);
      $(".suggestions-for-you-list-items-follow-2")
        .children(".loading")
        .show()
        .delay(1300)
        .hide(0);
      $(".suggestions-for-you-list-items-follow-2")
        .children("a")
        .text("Followed");
      $(".suggestions-for-you-list-items-follow-2")
        .children("a")
        .css("color", "#262626");
      $(".suggestions-for-you-list-items-follow-2")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".suggestions-for-you-list-dropdown-follow-buttom")
        .hide();
      $(".suggestions-for-you-list-items-follow-2")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".follower-post-box-header-dropdown-follow")
        .delay(1300)
        .show(0);
    }
    if (FollowText == "Followed") {
      e.preventDefault();
      $(".unfollow-account-modal-2").fadeIn("fast");
      $("body").addClass("no-scroll");
      $(".modal-unfollow-2").click(function (e) {
        e.preventDefault();
        $(".modals").fadeOut("fast");
        $("body").removeClass("no-scroll");
        $(".suggestions-for-you-list-items-follow-2")
          .children("a")
          .text("Follow");
        $(".suggestions-for-you-list-items-follow-2")
          .children("a")
          .css("color", "#0095f6");
        $(".suggestions-for-you-list-items-follow-2")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".suggestions-for-you-list-dropdown-follow-buttom")
          .show();
        $(".suggestions-for-you-list-items-follow-2")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".follower-post-box-header-dropdown-follow")
          .hide();
      });
    }
  });
  //unfollow modal *nataliedormerig*
  $(
    ".suggestions-for-you-list-items-follow-3 ,.suggestions-for-you-list-dropdown-follow-buttom-3 ,.follower-post-box-header-dropdown-follow-3"
  ).click(function (e) {
    var FollowText = $(".suggestions-for-you-list-items-follow-3")
      .children("a")
      .text();
    if (FollowText == "Follow") {
      e.preventDefault();
      $(".suggestions-for-you-list-items-follow-3")
        .children("a")
        .hide()
        .delay(1300)
        .show(0);
      $(".suggestions-for-you-list-items-follow-3")
        .children(".loading")
        .show()
        .delay(1300)
        .hide(0);
      $(".suggestions-for-you-list-items-follow-3")
        .children("a")
        .text("Followed");
      $(".suggestions-for-you-list-items-follow-3")
        .children("a")
        .css("color", "#262626");
      $(".suggestions-for-you-list-items-follow-3")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".suggestions-for-you-list-dropdown-follow-buttom")
        .hide();
      $(".suggestions-for-you-list-items-follow-3")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".follower-post-box-header-dropdown-follow")
        .delay(1300)
        .show(0);
    }
    if (FollowText == "Followed") {
      e.preventDefault();
      $(".unfollow-account-modal-3").fadeIn("fast");
      $("body").addClass("no-scroll");
      $(".modal-unfollow-3").click(function (e) {
        e.preventDefault();
        $(".modals").fadeOut("fast");
        $("body").removeClass("no-scroll");
        $(".suggestions-for-you-list-items-follow-3")
          .children("a")
          .text("Follow");
        $(".suggestions-for-you-list-items-follow-3")
          .children("a")
          .css("color", "#0095f6");
        $(".suggestions-for-you-list-items-follow-3")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".suggestions-for-you-list-dropdown-follow-buttom")
          .show();
        $(".suggestions-for-you-list-items-follow-3")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".follower-post-box-header-dropdown-follow")
          .hide();
      });
    }
  });
  //unfollow modal *eunibugg*
  $(
    ".suggestions-for-you-list-items-follow-4 ,.suggestions-for-you-list-dropdown-follow-buttom-4 ,.follower-post-box-header-dropdown-follow-4"
  ).click(function (e) {
    var FollowText = $(".suggestions-for-you-list-items-follow-4")
      .children("a")
      .text();
    if (FollowText == "Follow") {
      e.preventDefault();
      $(".suggestions-for-you-list-items-follow-4")
        .children("a")
        .hide()
        .delay(1300)
        .show(0);
      $(".suggestions-for-you-list-items-follow-4")
        .children(".loading")
        .show()
        .delay(1300)
        .hide(0);
      $(".suggestions-for-you-list-items-follow-4")
        .children("a")
        .text("Followed");
      $(".suggestions-for-you-list-items-follow-4")
        .children("a")
        .css("color", "#262626");
      $(".suggestions-for-you-list-items-follow-4")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".suggestions-for-you-list-dropdown-follow-buttom")
        .hide();
      $(".suggestions-for-you-list-items-follow-4")
        .siblings(".suggestions-for-you-list-dropdown")
        .children(".follower-post-box-header-dropdown-follow")
        .delay(1300)
        .show(0);
    }
    if (FollowText == "Followed") {
      e.preventDefault();
      $(".unfollow-account-modal-4").fadeIn("fast");
      $("body").addClass("no-scroll");
      $(".modal-unfollow-4").click(function (e) {
        e.preventDefault();
        $(".modals").fadeOut("fast");
        $("body").removeClass("no-scroll");
        $(".suggestions-for-you-list-items-follow-4")
          .children("a")
          .text("Follow");
        $(".suggestions-for-you-list-items-follow-4")
          .children("a")
          .css("color", "#0095f6");
        $(".suggestions-for-you-list-items-follow-4")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".suggestions-for-you-list-dropdown-follow-buttom")
          .show();
        $(".suggestions-for-you-list-items-follow-4")
          .siblings(".suggestions-for-you-list-dropdown")
          .children(".follower-post-box-header-dropdown-follow")
          .hide();
      });
    }
  });
});
