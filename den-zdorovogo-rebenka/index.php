<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("");
?>

    <div class="row padding__row between section__article section__content-items">
        <div class="col__60 col_margin">
            <h2 class="section__article-title">Дни здорового ребенка</h2><span class="section__content-a">Бесплатный прием и назначение лечения</span>
            <p class="text">Открытая клиника приглашает на “Дни здорового ребенка!"<br>Наши доктора примут маленьких пациентов, дадут рекомендации родителям,
                <!--br-->назначат необходимое лечение.
            </p>
            <p class="text"><span class="section__article-blue">Даты проведения:</span> 5 - 6 ноября с 9:00 до 19:00<br><span class="section__article-blue">Только 2 дня</span> все приемы наших докторов -<span class="section__article-blue">  бесплатно.</span></p>
            <p class="text"><span class="section__article-blue title-blue">Уверенность в здоровье ребенка!</span></p>
        </div>
        <div class="col__34">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
    </div>
    <div class="row center-c">
        <h2 class="section__content-h2 section__content-h2_margin">Наши врачи:</h2>
    </div>
    <div class="row between wrap">
        <div class="bx-slider-7">
            <div class="slide row padding__row between center-c">
                <div class="section__content-item col__31">
                    <div class="section__content-img"><img src="/images/test/6.png" alt=""></div>
                    <div class="section__content-name"><span class="section__content-title">Антоненко Татьяна Викторовна</span><br>
                        <p class="mt"><b>Массажист,</b>&nbsp;
                            Профессионально владеет множеством массажных методик (более 8-и), Стаж работы - 10 лет
                        </p>
                        <p><b>Центр:</b>&nbsp;
                            Пресненский
                        </p>
                    </div>
                    <div class="section__content-btn"><a href="" class="button button_blue upper jsOrdDoctor">бесплатный приём</a></div>
                </div>
                <div class="section__content-item col__31">
                    <div class="section__content-img"><img src="/images/test/6.png" alt=""></div>
                    <div class="section__content-name"><span class="section__content-title">Антоненко Татьяна Викторовна</span><br>
                        <p class="mt"><b>Массажист,</b>&nbsp;
                            Профессионально владеет множеством массажных методик (более 8-и), Стаж работы - 10 лет
                        </p>
                        <p><b>Центр:</b>&nbsp;
                            Пресненский
                        </p>
                    </div>
                    <div class="section__content-btn"><a href="" class="button button_blue upper jsOrdDoctor">бесплатный приём</a></div>
                </div>
                <div class="section__content-item col__31">
                    <div class="section__content-img"><img src="/images/test/6.png" alt=""></div>
                    <div class="section__content-name"><span class="section__content-title">Антоненко Татьяна Викторовна</span><br>
                        <p class="mt"><b>Массажист,</b>&nbsp;
                            Профессионально владеет множеством массажных методик (более 8-и), Стаж работы - 10 лет
                        </p>
                        <p><b>Центр:</b>&nbsp;
                            Пресненский
                        </p>
                    </div>
                    <div class="section__content-btn"><a href="" class="button button_blue upper jsOrdDoctor">бесплатный приём</a></div>
                </div>
            </div>
        </div>
    </div>
    <!--.row.center-c-->
    <!--    a(href="").button.button_blue.button_grand бесплатный приём-->
    <div class="row center-c">
        <h2 class="section__content-h2">Прием доступен только по предварительной записи</h2>
    </div>
    <div class="row padding__row">
        <p class="text"><span class="section__article-blue">Посещение включает в себя</span> первичный прием специалиста и получение рекомендации по лечению</p>
    </div>
    <div class="row padding__row">
        <p class="text">Для маленьких пациентов доступно более<span class="section__article-blue"> 20 врачебных специальностей:</span></p>
    </div>
    <div class="row responsive-column">
        <ul class="section__content-ul col__50">
            <li class="section__content-li"><a href="" class="section__content-link">Педиатр</a></li>
            <li class="section__content-li"><a href="" class="section__content-link">Логопед</a></li>
            <li class="section__content-li"><a href="" class="section__content-link">Детский ортопед-травматолог</a></li>
            <li class="section__content-li"><a href="" class="section__content-link">Детский хирург</a></li>
        </ul>
        <ul class="section__content-ul col__50">
            <li class="section__content-li"><a href="" class="section__content-link">Детский ортопед-травматолог</a></li>
            <li class="section__content-li"><a href="" class="section__content-link">Детский хирург</a></li>
            <li class="section__content-li"><a href="" class="section__content-link">Педиатр</a></li>
            <li class="section__content-li"><a href="" class="section__content-link">Логопед</a></li>
        </ul>
    </div>
    <div class="row padding__row">
        <p class="text"><span class="section__article-blue">Бесплатно посетить клинику</span> можно 5 и 6 ноября с 9:00 до 19:00 по адресу: г. Москва, улица 1905 года, д. 7с, стр. 1</p>
    </div>
    <div class="row">
        <h2 class="section__content-h2">Получить консультацию, записаться на прием или задать вопрос специалисту</h2>
    </div>
    <div class="row">
        <div class="form-spec col__100">
            <form action="/algo/addquest.php" class="addquest formAjax">
                <div class="row between">
                    <div class="col__42">
                        <input type="text" placeholder="Имя*" required name="usr_name" class="form__input">
                        <input type="text" placeholder="Почта*" required name="usr_email" class="form__input">
                        <textarea placeholder="Вопрос*" name="comment" class="form__area responsive-hidden-area"></textarea>
                        <input type="submit" value="Задать вопрос" class="button button_blue button_grand-m">
                    </div>
                    <div class="col__54 desktop-area">
                        <textarea placeholder="Вопрос*" name="comment" class="form__area"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="row padding__row between">
        <div class="col__32">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
        <div class="col__32">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
        <div class="col__32">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
    </div>
    <div class="row padding__row between">
        <div class="col__32">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
        <div class="col__32">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
        <div class="col__32">
            <div class="img-wrapper"><img src="/images/test/healthybaby.png"></div>
        </div>
    </div>
    
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>