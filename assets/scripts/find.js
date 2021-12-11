$(document).ready(function () {
  //show the number of likes and comment of find section  when images mouse move on them
  $(".find-inner-items").mouseenter(function () {
    $(this).children(".find-inner-items-background").show();
  });
  //hide the number of likes and comment of find section  when images mouse leave on them
  $(".find-inner-items").mouseleave(function () {
    $(this).children(".find-inner-items-background").hide();
  });
});
