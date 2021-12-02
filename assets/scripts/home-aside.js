$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //        suggestions for you        //
  ///////////////////////////////////////
  // when your mouse move on a profile name or picture
  $(
    ".suggestions-for-you-list-items-img , .suggestions-for-you-list-items-title"
  ).mouseenter(function () {
    var $this = $(this);
    //       show dropdown
    $(".suggestions-for-you-list-dropdown").hide(0);
    // set timer for 800ms
    // if mouse remain on a profile name or picture more than 800ms then dropdown will show
    timer = setTimeout(function () {
      $this.siblings(".suggestions-for-you-list-dropdown").fadeIn("fast");
    }, 800);
  });
  //       hide dropdown under 2 Conditions
  // 1.when mouse leave dropdown
  $(".suggestions-for-you-list-dropdown").mouseleave(function () {
    $(this).hide(0);
  });
  // 1.when mouse leave div with *suggestions-for-you* class
  $(".suggestions-for-you ").mouseleave(function () {
    $(".suggestions-for-you-list-dropdown").hide(0);
  });
  //      reset timer under 3 Conditions
  // 1. mouse leaves *suggestions-for-you* class
  $(".suggestions-for-you ").mouseleave(function () {
    clearTimeout(timer);
  });
  // 2. mouse leaves dropdown
  $(".suggestions-for-you-list-dropdown").mouseleave(function () {
    clearTimeout(timer);
  });
  // 2. mouse Enter others profiles name or picture
  $(
    ".suggestions-for-you-list-items-img , .suggestions-for-you-list-items-title"
  ).mouseleave(function () {
    clearTimeout(timer);
  });
});
