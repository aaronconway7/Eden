$(document).ready(function(){
    lightbox();
    // $('.animation').animate();
    // $('.nav').nav({
    //     pageShift: true,
    //     openColor: 'white',
    //     closeColor: 'white'
    // });

    // $('.slider').slide({
    //     quantity: 3,
    //     timer: false
    // });

});

$(window).scroll(function(){
    // $('.animation').animate();
    // $('.hero-1').parallax();
});

function lightbox(){
    $('.lightbox').each(function(){
        $(this).append(
            "<div class='modal dark-bg'>"+
            "   <div class='content'>"+
            "       <div class='active-img'>"+
            "           <span class='slide-left slider-control'>❮</span>"+
            "           <span class='slide-right slider-control'>❯</span>"+
            "       </div>"+
            "       <div class='close light inside'>"+
            "           <span>✕</span>"+
            "       </div>"+
            "   </div>"+
            "</div>"
        )
    });

    $('.lightbox > img').click(function(){
        if($(this).hasClass('is-active')){

        }else{
            $(this).addClass('is-active').clone(true).appendTo('.lightbox .modal .active-img');
            $(this).next('.caption').clone(true).appendTo('.lightbox .modal .active-img');
            $(this).siblings('.modal').show();
        }
    });

    $('.lightbox .slider-control').click(function(){
        if($(this).hasClass('slide-left')){
            if($('.lightbox > img.is-active').is(':first-of-type')){
                $('.lightbox > img.is-active').removeClass('is-active');
                $('.lightbox > img:last-of-type').addClass('is-active');
            }else{
                $('.lightbox > img.is-active').removeClass('is-active').prevAll('img:first').addClass('is-active');
            }
        }else{
            if($('.lightbox > img.is-active').is(':last-of-type')){
                $('.lightbox > img.is-active').removeClass('is-active');
                $('.lightbox > img:first-of-type').addClass('is-active');
            }else{
                $('.lightbox > img.is-active').removeClass('is-active').nextAll('img:first').addClass('is-active');
            }
        }
        $('.lightbox .modal .active-img img').remove();
        $('.lightbox .modal .active-img .caption').remove();
        $('.lightbox > img.is-active').clone(true).appendTo('.lightbox .modal .active-img');
        $('.lightbox > img.is-active').next('.caption').clone(true).appendTo('.lightbox .modal .active-img');
    });

    $(document).keydown(function(e){
        if(e.keyCode == 37){ // left
            $('.lightbox .slider-control.slide-left').trigger('click');
        }else if(e.keyCode == 39){ // right
            $('.lightbox .slider-control.slide-right').trigger('click');
        }else if(e.keyCode == 27){ // esc
            $('.lightbox .close').trigger('click');
        }
    });

    $('.lightbox .close').click(function(){
        $('.modal').hide();
        $('.lightbox .is-active').removeClass('is-active');
        $('.lightbox .modal .active-img img').remove();
        $('.lightbox .modal .active-img .caption').remove();
    });
}
