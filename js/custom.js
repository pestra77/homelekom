$(function(){
  $('.complectation-pane').click(function(event) {
    var indexOfActive = $(this).attr('id');
    $('.complectation-pane').each(function(index, el) {
      $(this).removeClass('complectation__list_active');
    });
    $('.complectation__tab').each(function(index, el) {
      $(this).removeClass('complectation__info_active')
    });
    $(this).addClass('complectation__list_active');
    $('.complectation__tab').eq(indexOfActive).addClass('complectation__info_active');
  });

  $('.option__title').click(function(event) {
    $('.option__list').toggleClass('option__list_active');
  });

  $(".menu__link").click(function (e) {
    e.preventDefault();
    var elementClick = $(this).attr("href");
    console.log(elementClick)
    var destination = $('#' + elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 800);

    return false;
  });
});