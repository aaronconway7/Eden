(function($) {

    $.fn.animate = function() {

        var wScroll = $(window).scrollTop();

        return this.each(function(){
            if((wScroll + ($(window).height()*0.8)) > $(this).offset().top){
                $(this).addClass('animated');
            }
        });

    }

}(jQuery));

(function($) {

    $.fn.modal = function(options) {

        var modal = this;

        // Establish our default settings
        var settings = $.extend({
            open    : '.open-modal',
            close   : '.close-modal'
        }, options);

        return $(settings.open).click(function(){
            modal.addClass('is-open');
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
