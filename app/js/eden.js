(function($) {

    $.fn.animate = function() {

        var wScroll = $(window).scrollTop();

        return this.each(function(i){
            if($(this).hasClass('on-delay') && $(this).hasClass('on-scroll')){
                if((wScroll + ($(window).height()*0.8)) > $(this).offset().top){
                    var n = $(this).index() + 1;
                    setTimeout(function(){
                        $('.animation').eq(i).addClass('animated');
                    }, 150 * (n+1));
                }
            } else if($(this).hasClass('on-scroll')){
                if((wScroll + ($(window).height()*0.8)) > $(this).offset().top){
                    $(this).addClass('animated');
                }
            } else if($(this).hasClass('on-delay')){
                setTimeout(function(){
                    $('.animation').eq(i).addClass('animated');
                }, 150 * (i+1));
            }
        });

    }

}(jQuery));

(function($) {

    $.fn.modal = function(options) {

        // Establish our default settings
        var settings = $.extend({
            open    : '.open-modal',
            close   : '.close-modal'
        }, options);

        return $(settings.open).click(function(){
            var modal = $(this).next('.modal');

            $(this).next('.modal').addClass('is-open');
            $('body').addClass('no-scroll');

            modal.find(settings.close).click(function(){
                modal.removeClass('is-open');
                $('body').removeClass('no-scroll');
            });

            $(document).keyup(function(e) {
                if (e.keyCode == 27) { // escape key maps to keycode `27`
                    modal.removeClass('is-open');
                    $('body').removeClass('no-scroll');
                }
            });

        });

    }

}(jQuery));

(function($) {

    $.fn.parallax = function() {

        var wScroll = $(window).scrollTop();

        return this.each(function(){

            if(wScroll < $(this).offset().top + $(this).height()){
                if($(this).hasClass('short')){
                    $(this).css({
                        'background-position-y': 50 - (wScroll/4) + '%'
                    });
                    $(this).find('.content').css({
                        'transform':'translate3d(0px,'+ wScroll/7.5 +'%,0px)',
                        'opacity':1-(wScroll/500)
                    });
                } else {
                    $(this).css({
                        'background-position-y': 50 - (wScroll/2) + '%'
                    });
                    $(this).find('.content').css({
                        'transform':'translate3d(0px,'+ wScroll/15 +'%,0px)',
                        'opacity':1-(wScroll/750)
                    });
                }
            }
        });

    }

}(jQuery));
