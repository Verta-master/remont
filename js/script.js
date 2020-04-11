//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--opened');
  $('.menu__list').slideToggle();
});

if (window.innerWidth < 1230) {
  $('.menu__down').click(function() {
    $(this).toggleClass('menu__down--opened');
    $(this).next().slideToggle();
  })
}

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.header').addClass('header--scroll');
    $('main').addClass('main--scroll');
  } else {
    $('.header').removeClass('header--scroll');
    $('main').removeClass('main--scroll');
  };
});
