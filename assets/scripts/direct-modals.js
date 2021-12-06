$(document).ready(function () {
  /////////////////////
  // direct send modal
  $(".direct-send-to").click(function (e) {
    e.preventDefault();
    $(".direct-send-to-modals").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
  /////////////////////
  // delete chat modal
  $(".message-box-items-alt-footer-delete").click(function (e) {
    e.preventDefault();
    $(".delete-chat-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
  /////////////////////
  // block chat modal
  $(".message-box-items-alt-footer-block").click(function (e) {
    e.preventDefault();
    $(".block-chat-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
  /////////////////////
  // report chat modal
  $(".message-box-items-alt-footer-report").click(function (e) {
    e.preventDefault();
    $(".report-chat-modal").fadeIn("fast");
    //fixing screen
    $("body").addClass("no-scroll");
  });
});
