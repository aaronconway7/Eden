function animatedScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}

var wScroll = 0;
var bannerTop = $('#banner .banner').offset().top;

function fixedBanner(){
    console.log(wScroll);
    if(wScroll > bannerTop){
        $('#banner .banner').addClass('is-fixed');
    } else {
        $('#banner .banner').removeClass('is-fixed');
    }
}

$(document).ready(function() {
    animatedScroll();
});

$(window).scroll(function() {
    wScroll = $(window).scrollTop();
    animatedScroll();
    fixedBanner();
});
