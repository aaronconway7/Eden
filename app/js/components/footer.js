(function($) {

    $.fn.sticky = function(options) {

        // Establish our default settings
        var settings = $.extend({
            pageWrapper     : 'main',
        }, options);

        return this.each(function(){
            $('html').css('height', '100%');
            $('body').css({
                'min-height': '100%',
                'display': 'flex',
                'flex-direction': 'column'
            });

            $(settings.pageWrapper).css('flex', '1');
        });

    }

}(jQuery));
