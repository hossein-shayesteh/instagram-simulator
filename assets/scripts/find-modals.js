$(document).ready(function () {
  /////////////////////////
  //      modal show     //
  /////////////////////////
  $(".find-inner-items").click(function (e) {
    e.preventDefault();
    $(".find-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
  $("#find-inner-items-1").click(function (e) {
    e.preventDefault();
    $("#find-1").show();
    $("#find-1").siblings().hide();
  });
  $("#find-inner-items-2").click(function (e) {
    e.preventDefault();
    $("#find-2").show();
    $("#find-2").siblings().hide();
  });
  $("#find-inner-items-3").click(function (e) {
    e.preventDefault();
    $("#find-3").show();
    $("#find-3").siblings().hide();
  });
  $("#find-inner-items-4").click(function (e) {
    e.preventDefault();
    $("#find-4").show();
    $("#find-4").siblings().hide();
  });
  $("#find-inner-items-5").click(function (e) {
    e.preventDefault();
    $("#find-5").show();
    $("#find-5").siblings().hide();
  });
  $("#find-inner-items-6").click(function (e) {
    e.preventDefault();
    $("#find-6").show();
    $("#find-6").siblings().hide();
  });
  $("#find-inner-items-7").click(function (e) {
    e.preventDefault();
    $(".find-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
    $("#find-7").show();
    $("#find-7").siblings().hide();
  });
  $("#find-inner-items-8").click(function (e) {
    e.preventDefault();
    $(".find-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
    $("#find-8").show();
    $("#find-8").siblings().hide();
  });
  $("#find-inner-items-9").click(function (e) {
    e.preventDefault();
    $(".find-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
    $("#find-9").show();
    $("#find-9").siblings().hide();
  });
  /////////////////////////
  //      modal hide     //
  /////////////////////////
  //close modals by clicking on *.close-modal*
  $(".close-modal-1").click(function (e) {
    e.preventDefault();
    //hide modal
    $(".modals-1").fadeOut("fast");
    //allow screen to scroll
    $("body").removeClass("no-scroll");
    //close all modals and reset them and show *optins* modal as default modal on next attempt
    $(".otions-1").fadeIn();
    $(".otions-1").siblings().hide();
    //reset video time
    var vid = document.getElementsByClassName("otions-media-video");
    vid.currentTime = 0;
  });
  //close modals by clicking on *.modal-bg*
  $(".modal-bg-1").click(function (e) {
    e.preventDefault();
    //hide modal
    $(".modals-1").fadeOut("fast");
    //allow screen to scroll
    $("body").removeClass("no-scroll");
    //close all modals and reset them and show *optins* modal as default modal on next attempt
    $(".otions-1").fadeIn();
    $(".otions-1").siblings().hide();
    //reset video time
    var vid = document.getElementsByClassName("otions-media-video");
    vid.currentTime = 0;
  });
  /////////////////////////
  //     modal scroll    //
  /////////////////////////
  $(".find-modal-right-scroll").click(function (e) {
    e.preventDefault();
    $(this).parents(".otions-1").hide();
    $(this).parents(".otions-1").next(".otions-1").show();
  });
  //hide details
  $(".find-modal-left-scroll").click(function (e) {
    e.preventDefault();
    $(this).parents(".otions-1").hide();
    $(this).parents(".otions-1").prev(".otions-1").show();
  });
  /////////////////////////
  //     modal caption   //
  /////////////////////////
  // comment option show on hover
  $(".follower-post-box-comments-items-text").on("mouseenter", function () {
    $(this)
      .children(".follower-post-box-comments-items-text-replay")
      .children("svg")
      .css("opacity", "1");
  });
  //hide ... when the chat-me or chet-no-me is not hover
  $(".follower-post-box-comments-items-text").on("mouseleave", function () {
    $(this)
      .children(".follower-post-box-comments-items-text-replay")
      .children("svg")
      .css("opacity", "0");
  });
  /////////////////////////
  //  modal report modal //
  /////////////////////////
  $(".follower-post-box-header-options > button").click(function (e) {
    e.preventDefault();
    //show modal
    $(".dot-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
});
