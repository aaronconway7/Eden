$(document).ready(function(){
    $('.modal').modal();
    $('.animation').animate();
});

$(window).scroll(function(){
    $('.animation').animate();
    $('.parallax').parallax();
});

// function parallax(){
//     var wScroll = $(window).scrollTop();
//     if ( wScroll < $('.parallax').height() ){
//         $('.parallax').css({
//             'background-position':'center '+ wScroll/2 + 'px'
//         });
//         $('.parallax .content').css({
//             'transform':'translate3d(0px,'+ wScroll/10 +'%,0px)',
//             'opacity':1-(wScroll/400)
//         });
//     }
// }
