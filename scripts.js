$(document).ready(function() {

  function tabClick() {

    console.log($(this).attr("tabindex"))
    const activate = $(this).attr("tabindex")
    $(`.tab${activate}`).toggleClass('active');
  }
  $(".tablinks").on('click', tabClick);
})

