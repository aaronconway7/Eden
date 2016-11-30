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

function fixedBanner(){
    var wScroll = $(window).scrollTop();
    if(wScroll > 140){
        $('#banner .banner').addClass('is-fixed');
    } else {
        $('#banner .banner').removeClass('is-fixed');
    }
}

$(document).ready(function() {
    animatedScroll();
    fixedBanner();
    var bannerHeight = $('#banner .banner').height();
    $('.page-content').css('padding-top',bannerHeight+'px');
});

$(window).scroll(function() {
    fixedBanner();
});
