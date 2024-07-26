$(function () {
    $('.scroll-button').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 500) {
//         $('.scroll-up').fadeIn();
//     }
//     else {
//         $('.scroll-up').fadeOut();
//     }
// });


$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-up').addClass('scrollShow');
    }
    else {
        $('.scroll-up').removeClass('scrollShow');
    }
});