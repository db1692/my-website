var num = 400;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('stuck');
        console.log("Stuck");
    } else {
        $('.header').removeClass('stuck');
    }
});
