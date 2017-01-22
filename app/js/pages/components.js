$(document).ready(function() {
    $('.nav').nav();
    $('.modal').modal();
    $('.slider').slide({
        quantity: 3
    });
    $('.lightbox').lightbox();
    $('.animation').animate();

    $('.video .play').click(function(){
        $('.video').addClass('is-playing');
        $('.video video')[0].play();
    });

    $('.video .pause').click(function(){
        $('.video').removeClass('is-playing');
        $('.video video')[0].pause();
    });

});

$(window).scroll(function() {
    $('.animation').animate();
});
