$(document).ready(function() {
    $('.main-nav').nav();
    $('.modal').modal();
    $('.slider').slide({
        quantity: 3
    });
    $('.lightbox').lightbox();
    $('.animation').animation();
    $('.tab').tab();
    $('.video').video();
    $('.collapsible').collapsible();
    $('.modal').modal();

    $('#container-component .wrapper .container').hover(function(event){
        event.stopPropagation();
    });

    smoothScrolling();


});

$(window).scroll(function() {
    $('.animation').animation();
});
