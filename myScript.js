  /*Решение из другого проекта*/
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  navMain.classList.remove('menu-nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

var sliderHead = document.querySelectorAll('input[name="slide"]');
var allSlides = document.querySelectorAll('.header-content');
var sliderPos = 0;
var slideInterval = setInterval(nextSlide,7000);

  function nextSlide(){
    sliderPos = (sliderPos+1)%sliderHead.length;
    sliderHead[sliderPos].checked = true;
  }

// Меню
var subMenu = $(".sub-nav");
  if(subMenu.css('position')=='absolute'){
  $(".main-nav li").hover(function(){
  $(this).children("ul").stop(false,true).fadeIn(300);
     }, function(){
       $(this).children("ul").stop(false,true).fadeOut(1000);
  
})};


// Новости
$(".news-content").dotdotdot();
  
$(".news-wrapper").hover(function(){
	$(this).css("height", "280");
	$(this).find(".news-content").toggleClass("news-content--full");
  $(this).find(".news-content").dotdotdot();
  $(this).find("a").css("display", "block");
     }, function(){
    $(this).find(".news-content").toggleClass("news-content--full");
    $(this).find("a").css("display", "none");
    $(this).css("height", "135");
    $(this).find(".news-content").dotdotdot();
});



// Red stars WOOOOOO
$('.email-input').click(function(){
    
$('.required-email').addClass('no-after');
$('.email-input').blur(function()
{
    if( $(this).val().length === 0 ) {
      $('.required-email').removeClass('no-after');
    }
});
});

$('.name-input').click(function(){
    
$('.required-name').addClass('no-after');
$('.name-input').blur(function()
{
    if( $(this).val().length === 0 ) {
      $('.required-name').removeClass('no-after');
    }
});
});

$('.thema-input').click(function(){
    
$('.required-thema').addClass('no-after');
$('.thema-input').blur(function()
{
    if( $(this).val().length === 0 ) {
      $('.required-thema').removeClass('no-after');
    }
});
});
// end