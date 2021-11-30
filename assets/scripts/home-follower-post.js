$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //            follower post          //
  ///////////////////////////////////////
  //                dropdown show                //
  $(
    ".follower-post-box-header-img , .follower-post-box-header-title"
  ).mouseenter(function () {
    var $this = $(this);
    //       show dropdown
    $(".follower-post-box-header-dropdown").hide(0);
    // set timer for 800ms
    // if mouse remain on a profile name or picture more than 800ms then dropdown will show
    timer = setTimeout(function () {
      $this.siblings(".follower-post-box-header-dropdown").fadeIn("fast");
    }, 800);
  });
  //       hide dropdown under 2 Conditions
  // 1.when mouse leave dropdown
  $(".follower-post-box-header-dropdown").mouseleave(function () {
    $(this).hide(0);
  });
  // 2.when mouse leave div with *follower-post-box-header* class
  $(".follower-post-box-header").mouseleave(function () {
    $(".follower-post-box-header-dropdown").hide(0);
  });
  // 3.when click div with *follower-post-box-header* class
  $(".follower-post-box-header").click(function () {
    $(".follower-post-box-header-dropdown").hide(0);
  });
  //      reset timer under 3 Conditions
  // 1. mouse leaves *suggestions-for-you* class
  $(".follower-post-box-header").mouseleave(function () {
    clearTimeout(timer);
  });
  // 2. mouse leaves dropdown
  $(".follower-post-box-header-dropdown").mouseleave(function () {
    clearTimeout(timer);
  });
  // 3. mouse Enter others profiles name or picture
  $(
    ".follower-post-box-header-img , .follower-post-box-header-title"
  ).mouseleave(function () {
    clearTimeout(timer);
  });
  //                captions                //
  //press more button
  $(".follower-post-box-caption-more").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).siblings(".follower-post-box-caption-3dots").hide();
    $(this).siblings(".follower-post-box-caption-totall-caption").show();
  });
  //post a comment
  $(".comment-send").keyup(function () {
    if ($(this).val()) {
      $(this).siblings("span").addClass("active");
    } else {
      $(this).siblings("span").removeClass("active");
    }
  });
});
