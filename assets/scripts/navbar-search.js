$(document).ready(function () {
  ///////////////////////////////////////
  //              Nav Bar              //
  //              search               //
  ///////////////////////////////////////
  //      when input is focus      //
  $("#NavBarSearch").focus(function function1() {
    // show placholder
    $(this).attr("placeholder", "Search");
    // hide label
    $(this).siblings("label").hide();
    // show x-mark
    $(this).siblings("span").show();
    // show dropdown
    $(
      ".nav-search-dropdown-section,.nav-search-dropdown-section-background "
    ).fadeIn("fast");
  });
  //      when input is not focus      //
  $("#NavBarSearch").focusout(function () {
    // hide placholder
    $(this).removeAttr("placeholder", "Search");
    // show label
    $(this).siblings("label").show();
    // hide x-mark
    $(this).siblings("span").hide();
  });
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
    .children("span")
    .click(function () {
      $(".nav-search-dropdown-items").hide();
    });
  // clear item with x-mark
  $(".nav-search-dropdown-items-close").click(function () {
    $(this).parent(".nav-search-dropdown-items").hide();
  });
});
