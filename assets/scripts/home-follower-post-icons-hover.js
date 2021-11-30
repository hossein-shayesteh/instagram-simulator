$(document).ready(function () {
  //                posts icons hover                //
  //hover icon to change color
  //comment,share and save icons
  $(
    ".follower-post-box-like-comment-button-comment ,.follower-post-box-like-comment-button-share,.follower-post-box-like-comment-button-save"
  ).mouseenter(function () {
    $(this).children("svg").attr("fill", "#8e8e8e");
  });
  // hover like icon
  $(".follower-post-box-like-comment-button-like-2").mouseenter(function () {
    $(this).attr("fill", "#8e8e8e");
  });
  //unhover icon to change color
  //comment,share and save icons
  $(
    ".follower-post-box-like-comment-button-comment ,.follower-post-box-like-comment-button-share,.follower-post-box-like-comment-button-save"
  ).mouseleave(function () {
    $(this).children("svg").attr("fill", "#262626");
  });
  // unhover like icon
  $(".follower-post-box-like-comment-button-like-1").hide();
  $(".follower-post-box-like-comment-button-like-2").mouseleave(function () {
    $(this).attr("fill", "#262626");
  });
  // press like button to change color to red
  $(".follower-post-box-like-comment-button-like").click(function (e) {
    e.preventDefault();
    $(this).children(".follower-post-box-like-comment-button-like-1").toggle();
  });

  //                save icon popup                 //
  $(".follower-post-box-like-save").mouseenter(function () {
    var $this1 = $(this);
    //       show popup
    // set timer for 800ms
    // if mouse remain on  save icon more than 800ms then popup will show
    timer2 = setTimeout(function () {
      $this1.children(".follower-post-box-like-save-popup").fadeIn("fast");
    }, 800);
  });
  //       hide pop under 4 Conditions
  // 1.when mouse leave popup
  $(".follower-post-box-like-save-popup").mouseleave(function () {
    $(this).hide(0);
  });
  // 2.when mouse Enter div with *suggestions-for-you* class
  $(".suggestions-for-you ").mouseenter(function () {
    $(".follower-post-box-like-save-popup").hide(0);
  });
  // 3.when mouse Enter div with *follower-post-box-media* class
  $(".follower-post-box-media").mouseenter(function () {
    $(".follower-post-box-like-save-popup").hide(0);
  });
  // 4.when mouse Enter div with *follower-post-box-liked-by* class
  $(".follower-post-box-liked-by").mouseenter(function () {
    $(".follower-post-box-like-save-popup").hide(0);
  });

  //      reset timer under 1 Conditions
  // 1. mouse leaves *suggestions-for-you* class
  $(".follower-post-box-like-save").mouseleave(function () {
    clearTimeout(timer2);
  });
});
