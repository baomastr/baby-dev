$(document).ready(function() {

  // Active tabs
  $(".jsTab").click(function() {
    $(".jsTab").removeClass("active").eq($(this).index()).addClass("active");
    $(".jsContFlex").removeClass("jsFlex").eq($(this).index()).addClass("jsFlex");
  }).eq(0)

  $(".jsTab").click(function() {
    $(".jsTab").removeClass("active").eq($(this).index()).addClass("active");
    $(".jsCont").removeClass("active").eq($(this).index()).addClass("active");
  }).eq(0)

  // popup

  var popup = $('.popup')
  $('.js__popup').click(function(event) {
    popup.addClass('jsVisible');
  });
  $('.popup__close').click(function(event) {
    popup.removeClass('jsVisible');
    $(this).closest('.jsVisible').removeClass('jsVisible');
  });
  $('.jsRev').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsRevPopup').addClass('jsVisible');
    return false;
  });
  $('.jsOrd').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsOrdPopup').addClass('jsVisible');
    return false;
  });
  $('.jsCall').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsCallPopup').addClass('jsVisible');
    return false;
  });
  $('.jsProc').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsProcPopup').addClass('jsVisible');
    return false;
  });

  // Navgoco acordion
  var acordion = $('.accord')
  acordion.navgoco({accordion: true});

  // Bx slider
  var slider = $('.bx-slider-1').bxSlider({
    pager: false,
    controls: true,
    auto: true,
    speed: 1000,
    pause: 5000,
    responsive: true,
    nextSelector: '.s-next',
    prevSelector: '.s-prev',
    nextText: '',
    prevText: ''
  });

  var slider2 = $('.bx-slider-2').bxSlider({
    pager: true,
    controls: true,
    auto: true,
    speed: 1000,
    pause: 8000,
    responsive: true,
    mode: 'fade',
    nextSelector: '.prev',
    prevSelector: '.next',
    nextText: '',
    prevText: ''
    // nextSelector: '.s-prev',
    // prevSelector: '.s-next',
    // nextText: '',
    // prevText: ''
  });

  var slider3 = $('.bx-slider-3').bxSlider({
    pager: true,
    controls: true,
    auto: true,
    speed: 1000,
    pause: 5000
  });

  var slider4 = $('.bx-slider-4').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 5000,
    responsive: true,
    slideWidth: 360,
    minSlides: 2,
    maxSlides: 6,
    slideMargin: 5
  });

  var slider5 = $('.bx-slider-5').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 8000,
    responsive: true,
    mode: 'fade'
  });

  // Slick slider
  // $().slick({
  // infinite: true,
  // dots: false,
  // arrows: false,
  // autoplay: false,
  // slidesToShow: 15,
  // slidesToScroll: 9,
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // });

  // Custom scroll function
  // (function($){
  //   $(window).load(function(){
  //     // $().mCustomScrollbar({
  //     //   scrollInertia:100,
  //     //   contentTouchScroll: false,
  //     //   autoExpandScrollbar: true
  //     // });
  //     $().mCustomScrollbar({
  //       scrollInertia:100,
  //       axis:"x",
  //       setWidth: false,
  //       setHeight: false,
  //       contentTouchScroll: false,
  //       autoExpandScrollbar: true
  //     });
  //   });
  // })(jQuery);

  // Scroll to top
  $().click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });

  // Height detect funciton
  function heightDetect(){
    $().css( 
      'height', $(window).height()
    );
  };
  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });


  $(window).scroll(function() {
    if ($(this).scrollTop() >= 104){ 
      $('.header__sticky').removeClass('jsNone');
    } else {
      $('.header__sticky').addClass('jsNone');
    }
  });

  // toggle menu
  $('.jsTag').click(function(event) {
    $('.jsTag2').removeClass('active')
    $('aside').removeClass('active animated fadeInLeft');
    $(this).toggleClass('active')
    $('.menu_ul').toggleClass('active animated fadeInUp');
    $('html').removeClass('overflow')
    $('body').removeClass('overflow')
  });
  $('.jsTag2').click(function(event) {
    $(this).toggleClass('active')
    $('html').toggleClass('overflow')
    $('body').toggleClass('overflow')
    $('.jsTag').removeClass('active')
    $('aside').toggleClass('active animated fadeInLeft');
    $('.menu_ul').removeClass('active animated fadeInUp');
  });

});

