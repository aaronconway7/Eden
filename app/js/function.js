$(document).ready(function(){
    $('.modal').modal();
    // $('.animation.on-delay').animateOnDelay();
    $('.animation').animate();
});

$(window).scroll(function(){
    $('.animation').animate();
});
