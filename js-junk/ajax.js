/* прикрепить событие submit к форме */
$('.formAjax').submit(function(event) {

    /* отключение стандартной отправки формы */
    event.preventDefault();

    var formData = $(this).serialize();
    // var obj = $(this);

    /* собираем данные с элементов страницы: */
    var $form = $( this ),
        h1_form = $('h1').text(),
        h2_form = $('h2').text(),
        id = $form.find( 'input[name="id"]' ).val(),
        link = $form.find( 'input[name="url"]' ).val(),
        ajax = $form.find( 'input[name="ajax"]' ).val(),
        name = $form.find( 'input[name="name"]' ).val(),
        usr_name = $form.find( 'input[name="usr_name"]' ).val(),
        usr_email = $form.find( 'input[name="usr_email"]' ).val(),
        comment = $form.find( 'textarea[name="comment"]' ).val(),
        rating = $form.find( 'input[name="rating"]:checked' ).val(),
        phone = $form.find( 'input[name="phone"]' ).val(),
        diapazon = $form.find( 'select[name="diapazon"]>option' ).val(),
        url = $form.attr( 'action' );
    // url = 'http://baby.il7pro.ru/algo/addappointment.php';

    /* отправляем данные методом POST */
    var posting = $.post( url, { id: id, h1: h1_form,  h2: h2_form, url: link, ajax: ajax, name: name, usr_name: usr_name, usr_email: usr_email, comment: comment, rating: rating, phone: phone, diapazon: diapazon } );

    /*после отправки формы*/
    posting.done(function( data ) {

        /*выводим результат запроса*/
        // alert( data );
        // alert('Вы записались на прием, мы скоро свяжемся с вами');
        // $('form').html(result);
        // $( "#result" ).empty().append( data );
        // $( "#result" ).text(data);
        // $( this ).find('#result').empty().append( data );
        // console.log ('ok');
        // document.getElementById("result").innerHTML = xmlhttp.responseText;
        // var answer = $( this );
        // answer.find('#result').text('Вы записались на прием, мы скоро свяжемся с вами');
        // $form.find( 'input[type="submit"]' ).hide();
        $form.find( '*:not(#result)' ).hide();
        // $form.find( 'input' ).hide();
        // $form.find( 'select' ).hide();

        $form.find("#result").text('Ваша заявка принята');
        console.log('ok');
        // $(this).find('#result').empty().append('Вы записались на прием, мы скоро свяжемся с вами');

        /*очищаем поля формы*/
        // $(':input','form')
        //     .not(':button, :submit, :reset, :hidden')
        //     .val('')
        //     .removeAttr('checked')
        //     .removeAttr('selected');

        if($form.parents('.popup__container.animated.zoomIn').hasClass('jsCallPopup')){
            ga('send', 'event', 'sign_call_header', 'order');
            yaCounter39890470.reachGoal('sign_call_header');
            $form.parent('.popup__form').html('<p>Спасибо! Ваша заявка принята.</p>');
        } else if($form.parents('.popup__container.animated.zoomIn').hasClass('jsCallPopupFooter')){
            ga('send', 'event', 'sign_call_footer', 'order');
            yaCounter39890470.reachGoal('sign_call_footer');
            $form.parent('.popup__form').html('<p>Спасибо! Ваша заявка принята.</p>');
        } else if($form.hasClass('oneclick')){
            ga('send', 'event', 'sign_appointment_one_click', 'order');
            yaCounter39890470.reachGoal('sign_appointment_one_click');
            $form.html('<p>Спасибо! Секретарь свяжется с вами в течении 1 часа.</p>');
        } else if($form.hasClass('doctor')){
            ga('send', 'event', 'sign_appointment_house_header', 'order');
            yaCounter39890470.reachGoal('sign_appointment_house_header');
            $form.html('<p>Спасибо! Наш оператор свяжется с вами в ближайшее время для уточнения деталей и подтверждения вызова.</p>');
        } else if($form.hasClass('appointment')){
            ga('send', 'event', 'sign_appointment_header', 'order');
            yaCounter39890470.reachGoal('sign_appointment_header');
            $form.html('<p>Спасибо! Наш оператор свяжется с вами в ближайшее время для уточнения деталей.</p>');
        } else if($form.hasClass('doctordetail')){
            ga('send', 'event', 'sign_appointment_doctor', 'order');
            yaCounter39890470.reachGoal('sign_appointment_doctor');
            $form.html('<p>Спасибо! Наш оператор свяжется с вами в ближайшее время для уточнения деталей.</p>');
        } else if($form.hasClass('addquest')){
            ga('send', 'event', 'sign_question', 'order');
            yaCounter39890470.reachGoal('sign_question');
            $form.html('<p>Спасибо! После прохождения модерации Вы получите ответ на Ваш вопрос.</p>');
        } else if($form.hasClass('addfeedback')){
            ga('send', 'event', 'sign_appointment_feedback', 'order');
            yaCounter39890470.reachGoal('sign_appointment_feedback');
            $form.html('<p>Спасибо! Наш оператор свяжется с вами в ближайшее время для уточнения деталей.</p>');
        } else if($form.parents('.popup__container.animated.zoomIn').hasClass('jsRevPopup')){
            $form.html('<p style="text-align: center;">Спасибо за отзыв!</p>');
        }
    });
});