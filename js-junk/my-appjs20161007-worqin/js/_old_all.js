$(document).ready(function() {
  if($('.main__wrapper aside .sidebar ul li').length){
    $('.main__wrapper aside .sidebar ul li').each(function(){
      if($(this).find('a').attr('href') == location.pathname){
        $(this).html('<span>'+$(this).find('a').html()+'</span>');
        $(this).find('span').css('font-size', '18px');
      }
    });
  }

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
  $('.jsProg').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsProgPopup').addClass('jsVisible');
    return false;
  });
  $('.jsOrd').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsOrdPopup').addClass('jsVisible');
    return false;
  });

  $('.jsOrdDoctor').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsOrdPopupDoctor').addClass('jsVisible');
    return false;
  });

  $('.header .jsCall').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsCallPopup').addClass('jsVisible');
    return false;
  });

  $('.footer .jsCall').click(function(event) {
    popup.addClass('jsVisible');
    $('.jsCallPopupFooter').addClass('jsVisible');
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
  $('.s-acord').navgoco({accordion: true});

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
    // video: true,
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
  });

  var $video = $('.vid');
  $video.on('canplaythrough', function() {
    this.play();
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

  var slider6 = $('.bx-slider-6').bxSlider({
    pager: false,
    controls: true,
    auto: false,
    speed: 1000,
    pause: 5000,
    responsive: true,
    slideWidth: 285,
    minSlides: 2,
    maxSlides: 6,
    slideMargin: 5
  });

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

  var StickyElement = function(node){
    var doc = $(document),
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.sticky-content');

    var onScroll = function(e){
      var docTop = doc.scrollTop(),
          anchorTop = anchor.offset().top;

      console.log('scroll', docTop, anchorTop);
      if(docTop > anchorTop){
        if(!fixed){
          anchor.height(content.outerHeight());
          content.addClass('fixed');
          fixed = true;
        }
      }  else   {
        if(fixed){
          anchor.height(0);
          content.removeClass('fixed');
          fixed = false;
        }
      }
    };

    $(window).on('scroll', onScroll);
  };

  var demo = new StickyElement($('#sticky'));

  /* start forms */
  $('form').submit(function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    var obj = $(this);
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData,
      success:function(data){
        if(obj.parents('.popup__container.animated.zoomIn').hasClass('jsCallPopup')){
          ga('send', 'event', 'sign_call_header', 'order');
          yaCounter39890470.reachGoal('sign_call_header');
          obj.parent('.popup__form').html('<p>Спасибо! Ваша заявка принята.</p>');
        } else if(obj.parents('.popup__container.animated.zoomIn').hasClass('jsCallPopupFooter')){
          ga('send', 'event', 'sign_call_footer', 'order');
          yaCounter39890470.reachGoal('sign_call_footer');
          obj.parent('.popup__form').html('<p>Спасибо! Ваша заявка принята.</p>');
        } else if(obj.hasClass('oneclick')){
          ga('send', 'event', 'sign_appointment_one_click', 'order');
          yaCounter39890470.reachGoal('sign_appointment_one_click');
          obj.html('<p>Спасибо! Секретарь свяжется с вами в течении 1 часа.</p>');
        } else if(obj.hasClass('doctor')){
          ga('send', 'event', 'sign_appointment_house_header', 'order');
          yaCounter39890470.reachGoal('sign_appointment_house_header');
          obj.html('<p>Спасибо! Наш оператор свяжется с вами в ближайшее время для уточнения деталей и подтверждения вызова.</p>');
        } else if(obj.hasClass('appointment')){
          ga('send', 'event', 'sign_appointment_header', 'order');
          yaCounter39890470.reachGoal('sign_appointment_header');
          obj.html('<p>Спасибо! Наш оператор свяжется с вами в ближайшее время для уточнения деталей.</p>');
        }
      },
      error:function(xhr, str){}
    });
  });
  /* end forms */

  /*схлопывание в таблицах*/
  $('.table__title').first().siblings('.content').addClass("open")
  $('.table__title').click(function() {
    $(this).siblings('.content').toggleClass("open");
  });

});

