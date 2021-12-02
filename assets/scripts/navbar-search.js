$(document).ready(function () {
  ///////////////////////////////////////
  //              Nav Bar              //
  //              search               //
  ///////////////////////////////////////
  //      when input is focus      //
  $("#NavBarSearch").siblings("span").hide();
  $("#NavBarSearch").focus(function function1() {
    // show input placholder
    $(this).attr("placeholder", "Search");
    // hide input label
    $(this).siblings("label").hide();
    // show x-mark in the input
    $(this).siblings("span").show();
    // show dropdown div
    $(
      ".nav-search-dropdown-section,.nav-search-dropdown-section-background "
    ).fadeIn("fast");
  });
  //      when input is not focus      //
  $("#NavBarSearch").focusout(function () {
    // hide input placholder
    $(this).removeAttr("placeholder", "Search");
    // show input label
    $(this).siblings("label").show();
    // hide x-mark
    $(this).siblings("span").hide();
  });
  //      show dropdown    //
  // hide dropdown by click outside it
  $(".nav-search-dropdown-section-background,.suggestions-for-you").click(
    function (e) {
      e.preventDefault();
      $(".nav-search-dropdown-section-background").fadeOut("fast");
      $(".nav-search-dropdown-section").fadeOut("fast");
    }
  );
  //      dropdown inner     //
  // clear all buttom
  $(".nav-search-dropdown-title")
    .children("span:not(:first-child)")
    .click(function () {
      $(".nav-search-dropdown-items").hide();
    });
  // clear item with x-mark in front of each item
  $(".nav-search-dropdown-items-close").click(function () {
    $(this).parent(".nav-search-dropdown-items").hide();
  });
});
