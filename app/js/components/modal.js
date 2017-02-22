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

            modal.click(function(){
                modal.removeClass('is-open');
                $('body').removeClass('no-scroll');
            });

            modal.find('.content').click(function(e){
                e.stopPropagation();
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
