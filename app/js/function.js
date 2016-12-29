$(document).ready(function(){
    $('.modal').modal();
    $('.animation').animate();
});

$(window).scroll(function(){
    $('.animation').animate();
    $('.hero-1').parallax();
});
