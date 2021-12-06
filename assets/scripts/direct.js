$(document).ready(function () {
  ////////////////////////////////
  //            Tabs            //
  ////////////////////////////////
  //click on ".message-list-items" divs to change the background color
  $(".message-list-items").mousedown(function (e) {
    e.preventDefault();
    //add active class
    $(this).addClass("active");
    //hide the defaul page
  });
  $(".message-list-items").mouseup(function (e) {
    e.preventDefault();
    //remove active class from its siblings
    $(this).siblings().removeClass("active");
  });
  // click on message list to show its message box
  $(".message-box-items,.message-box-items-alt").hide();
  $("#message-list-1").click(function (e) {
    e.preventDefault();
    $("#message-box-1").delay(500).show(0);
    $("#message-box-1").siblings().delay(500).hide(0);
  });
  $("#message-list-2").click(function (e) {
    e.preventDefault();
    $("#message-box-2").delay(500).show(0);
    $("#message-box-2").siblings().delay(500).hide(0);
  });
  $("#message-list-3").click(function (e) {
    e.preventDefault();
    $("#message-box-3").delay(500).show(0);
    $("#message-box-3").siblings().delay(500).hide(0);
  });
  $("#message-list-4").click(function (e) {
    e.preventDefault();
    $("#message-box-4").delay(500).show(0);
    $("#message-box-4").siblings().delay(500).hide(0);
  });
  $("#message-list-5").click(function (e) {
    e.preventDefault();
    $("#message-box-5").delay(500).show(0);
    $("#message-box-5").siblings().delay(500).hide(0);
  });
  $("#message-list-6").click(function (e) {
    e.preventDefault();
    $("#message-box-6").delay(500).show(0);
    $("#message-box-6").siblings().delay(500).hide(0);
  });
  $("#message-list-7").click(function (e) {
    e.preventDefault();
    $("#message-box-7").delay(500).show(0);
    $("#message-box-7").siblings().delay(500).hide(0);
  });
  $("#message-list-8").click(function (e) {
    e.preventDefault();
    $("#message-box-8").delay(500).show(0);
    $("#message-box-8").siblings().delay(500).hide(0);
  });
  $("#message-list-9").click(function (e) {
    e.preventDefault();
    $("#message-box-9").delay(500).show(0);
    $("#message-box-9").siblings().delay(500).hide(0);
  });
  $("#message-list-10").click(function (e) {
    e.preventDefault();
    $("#message-box-10").delay(500).show(0);
    $("#message-box-10").siblings().delay(500).hide(0);
  });
  $("#message-list-11").click(function (e) {
    e.preventDefault();
    $("#message-box-11").delay(500).show(0);
    $("#message-box-11").siblings().delay(500).hide(0);
  });
  $("#message-list-12").click(function (e) {
    e.preventDefault();
    $("#message-box-12").delay(500).show(0);
    $("#message-box-12").siblings().delay(500).hide(0);
  });
  //show message box details
  //show details
  $(".alt-button-1").click(function (e) {
    e.preventDefault();
    $(this).parents(".message-box-items").hide();
    $(this).parents(".message-box-items").next(".message-box-items-alt").show();
  });
  //hide details
  $(".alt-button-2").click(function (e) {
    e.preventDefault();
    $(this).parents(".message-box-items-alt").hide();
    $(this).parents(".message-box-items-alt").prev(".message-box-items").show();
  });
  ////////////////////////////////
  //          send box          //
  ////////////////////////////////
  //show send button when input in not empty
  $(".message-box-items-footer-input-textarea").keydown(function () {
    if ($(this).val()) {
      //  hide send images and send like when textarea in not empty and show send button
      $(this)
        .siblings(
          ".message-box-items-footer-input-upload-images,.message-box-items-footer-input-sent-like"
        )
        .hide();
      $(this).siblings(".message-box-items-footer-input-sent").show();
    } else {
      //  show send images and send like when textarea in  empty and hide send button
      $(this)
        .siblings(
          ".message-box-items-footer-input-upload-images,.message-box-items-footer-input-sent-like"
        )
        .show();
      $(this).siblings(".message-box-items-footer-input-sent").hide();
    }
  });
  ////////////////////////////////
  //         chat popup         //
  ////////////////////////////////
  //      chat me      //
  //show ... when the chat-me or chet-no-me is hover
  $(".chat-me,.chat-not-me").on("mouseenter", function () {
    $(this)
      .children(".chat-me-options,.chat-not-me-options")
      .css("opacity", "1");
  });
  //hide ... when the chat-me or chet-no-me is not hover
  $(".chat-me,.chat-not-me").on("mouseleave", function () {
    $(this)
      .children(".chat-me-options,.chat-not-me-options")
      .css("opacity", "0");
  });
  // show popup
  $(".chat-me-options,.chat-not-me-options").click(function (e) {
    e.preventDefault();
    $(this)
      .children(
        ".chat-me-options-popup-container,.chat-not-me-options-popup-container"
      )
      .fadeIn();
  });
  //when click on outside the pupop the popup will hide
  $(document).mousedown(function (e) {
    if (
      $(e.target).parents(
        ".chat-me-options-popup-container,.chat-not-me-options-popup-container"
      ).length === 0
    ) {
      $(
        ".chat-me-options-popup-container,.chat-not-me-options-popup-container"
      ).fadeOut();
    }
  });
});
