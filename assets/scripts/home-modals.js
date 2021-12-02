$(document).ready(function () {
  ///////////////////////////////////////
  //               home                //
  //              modals               //
  ///////////////////////////////////////
  ///////////////////////////////
  //       3 dots modal        //
  ///////////////////////////////
  // show dot modal and fix screen from scrolling
  $(".follower-post-box-header-options > button").click(function (e) {
    e.preventDefault();
    //show modal
    $(".dot-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
  //close modals by clicking on *.close-modal*
  $(".close-modal").click(function (e) {
    e.preventDefault();
    //hide modal
    $(".modals").fadeOut("fast");
    //allow screen to scroll
    $("body").removeClass("no-scroll");
    //close all modals and reset them and show *optins* modal as default modal on next attempt
    $(".otions").fadeIn();
    $(".otions").siblings().hide();
    $(".copy-embeded-code-button").text("Copy Embed Code");
  });
  //close modals by clicking on *.modal-bg*
  $(".modal-bg").click(function (e) {
    e.preventDefault();
    //hide modal
    $(".modals").fadeOut("fast");
    //allow screen to scroll
    $("body").removeClass("no-scroll");
    //close all modals and reset them and show *optins* modal as default modal on next attempt
    $(".otions").fadeIn();
    $(".otions").siblings().hide();
    $(".copy-embeded-code-button").text("Copy Embed Code");
  });
  ///////////////////////////////
  //        report box        //
  $(".otions-report").click(function (e) {
    e.preventDefault();
    $(".report-box").siblings().hide();
    $(".report-box").fadeIn();
    //fixing screen
    $("body").addClass("no-scroll");
  });
  ///////////////////////////////
  //        unfollow box       //
  $(".otions-unfollow").click(function (e) {
    e.preventDefault();
    $(".unfollow-box").siblings().hide();
    $(".unfollow-box").fadeIn();
    //fixing screen
    $("body").addClass("no-scroll");
  });
  ///////////////////////////////
  //         share box         //
  $(".otions-share").click(function (e) {
    e.preventDefault();
    $(".share-box").siblings().hide();
    $(".share-box").fadeIn();
    //fixing screen
    $("body").addClass("no-scroll");
  });
  ///////////////////////////////
  //         embeded box         //
  $(".otions-embeded").click(function (e) {
    e.preventDefault();
    $(".embeded-box").siblings().hide();
    $(".embeded-box").fadeIn();
    //fixing screen
    $("body").addClass("no-scroll");
  });
  //change button text when input is not empty
  $(".copy-embeded-code-button").click(function (e) {
    e.preventDefault();
    $(this).text("Embed Code Copied!");
  });
  ///////////////////////////////
  //   sent to direct modal    //
  ///////////////////////////////
  $(".follower-post-box-like-comment-button-share").click(function (e) {
    e.preventDefault();
    $(".send-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
  ///////////////////////////////
  //   add collections modal   //
  ///////////////////////////////
  $(".follower-post-box-like-save-popup-header-add-collections").click(
    function (e) {
      e.preventDefault();
      $(".add-collections").fadeIn("fast");
      //fixing screen
      $("body").addClass("no-scroll");
    }
  );
  //change button  color when input is not empty
  $(".add-collections-input").keyup(function () {
    if ($(this).val()) {
      $(".save").css("color", "#0095f6");
      $(".save").addClass("close-modal");
    } else {
      $(".save").css("color", "#8e8e8e");
      $(".save").removeClass("close-modal");
    }
  });
});
