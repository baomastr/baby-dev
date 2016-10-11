

$('.table__title').first().siblings('.content').addClass("open")
$('.table__title').click(function() {
    $(this).siblings('.content').toggleClass("open");
});

// https://www.ldck.ru/diagnostics/mrt