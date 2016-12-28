(function($) {

    $.fn.animate = function() {

        var wScroll = $(window).scrollTop();

        return this.each(function(i){
            if($(this).hasClass('on-delay') && $(this).hasClass('on-scroll')){
                if((wScroll + ($(window).height()*0.8)) > $(this).offset().top){
                    setTimeout(function(){
                        $('.animation').eq(i).addClass('animated');
                    }, 150 * (i+1));
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

            if(wScroll > (($(this).offset().top + $(this).height()) - $(window).height())){
                if(wScroll < $(this).offset().top + $(this).height()){
                    $(this).css({
                        'background-position':'center '+ wScroll/2 + 'px'
                    });
                    $(this).find('.content').css({
                        'transform':'translate3d(0px,'+ wScroll/10 +'%,0px)',
                        'opacity':1-(wScroll/400)
                    });
                }
            }

        });

    }

}(jQuery));
