$(document).ready(function() {

  function tabClick() {

    console.log($(this).attr("tabindex"))
    const activate = $(this).attr("tabindex")
    const hasActive = $(this).hasClass("active")

    $(".tab").removeClass("active")
    $(`.tab${activate}`).toggleClass("active");
  }

  function imgClick() {
    const hasActive = $('.below-header-section').toggleClass("active")
  }
  $(".mobile-header-img").on('click', imgClick);
  $(".tablinks").on('click', tabClick);
})

