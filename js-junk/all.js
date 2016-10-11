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

  // $(".jsTabMore").click(function() {
  //   $(".jsTabMore").removeClass("active").eq($(this).index()).addClass("active");
  //   $(".jsContMore").removeClass("active").eq($(this).index()).addClass("active");
  // }).eq(0)

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
    // nextSelector: '.s-prev',
    // prevSelector: '.s-next',
    // nextText: '',
    // prevText: ''
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

  /* вставка заголовка в value input'а */
  var toInput = $('#h1_form').val($('h1').text());

  // /* прикрепить событие submit к форме */
  // $form.submit(function(event) {
  //
  //   /* отключение стандартной отправки формы */
  //   event.preventDefault();
  //
  //   /* собираем данные с элементов страницы: */
  //   var $form = $( this ),
  //       h1_form = $('h1').text(),
  //       name = $form.find( 'input[name="name"]' ).val(),
  //       phone = $form.find( 'input[name="phone"]' ).val(),
  //       time = $form.find( 'select[name="diapazon"]>option' ).val(),
  //       // url = $form.attr( 'action' );
  //       // url = 'http://baby.il7pro.ru/algo/addappointment.php';
  //
  //   /* отправляем данные методом POST */
  //   var posting = $.post( url, { h1: h1_form, name: name, phone: phone, time: time } );
  //
  //   /*после отправки формы*/
  //   posting.done(function( data ) {
  //
  //     /*выводим результат запроса*/
  //     alert( data );
  //     // $( "#result" ).empty().append( data );
  //
  //     /*очищаем поля формы*/
  //     $(':input','form')
  //         .not(':button, :submit, :reset, :hidden')
  //         .val('')
  //         .removeAttr('checked')
  //         .removeAttr('selected');
  //   });
  // });
/* прикрепить событие submit к форме */
  $('.formAjax').submit(function(event) {

    /* отключение стандартной отправки формы */
    event.preventDefault();

    /* собираем данные с элементов страницы: */
    var $form = $( this ),
        h1_form = $('h1').text(),
        h2_form = $('h2').text(),
        link = $form.find( 'input[name="url"]' ).val(),
        ajax = $form.find( 'input[name="ajax"]' ).val(),
        name = $form.find( 'input[name="name"]' ).val(),
        phone = $form.find( 'input[name="phone"]' ).val(),
        diapazon = $form.find( 'select[name="diapazon"]>option' ).val(),
        url = $form.attr( 'action' );
        // url = 'http://baby.il7pro.ru/algo/addappointment.php';

    /* отправляем данные методом POST */
    var posting = $.post( url, { h1: h1_form,  h2: h2_form, url: link, ajax: ajax, name: name, phone: phone, diapazon: diapazon } );

    /*после отправки формы*/
    posting.done(function( data ) {

      /*выводим результат запроса*/
      // alert( data );
      // alert('Вы записались на прием, мы скоро свяжемся с вами');
      // $('form').html(result);
      // $( "#result" ).empty().append( data );
      // $( "#result" ).text(data);
      // $( this ).find('#result').empty().append( data );
      console.log ('ok');
      // document.getElementById("result").innerHTML = xmlhttp.responseText;
      // var answer = $( this );
      // answer.find('#result').text('Вы записались на прием, мы скоро свяжемся с вами');
      
      $form.find("#result").text('Ваша заявка принята');
      console.log('ok');
      // $(this).find('#result').empty().append('Вы записались на прием, мы скоро свяжемся с вами');

      /*очищаем поля формы*/
      $(':input','form')
          .not(':button, :submit, :reset, :hidden')
          .val('')
          .removeAttr('checked')
          .removeAttr('selected');
    });
  });


  /*var data = {
    h1_form : $('h1').text(),
    name: $("input[name='name']").val(),
    phone: $('input[name="phone"]').val(),
    time: $('select[name="diapazon"]>option').val(),
    url: $('form').attr('action')
  };
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function( data ){
      // в data отправили статус операции
      // если письмо отправлено успешно, то
      $('#result').html(data).show();
    }
  });*/



});

