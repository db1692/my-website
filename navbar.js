var num = 850; //number of pixels before navbar sticks

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('stuck');
    } else {
        $('.header').removeClass('stuck');
    }
});
