(function($) {

    $.fn.nav = function(options) {

        var nav = this;
        var toggle = nav.find('.mob-toggle');
        var sidebar = nav.find('.sidebar');

        // Establish our default settings
        var settings = $.extend({
            pageShift     : false,
            openColor     : '#2F2F2F',
            closeColor    : '#2f2f2f',
            pageClass     : '.page-container'
        }, options);

        return toggle.change(function(){
            if(this.checked){
                $('body').addClass('no-scroll');
                nav.find('.hamburger').css('background-color', settings.openColor);
                if(settings.pageShift){
                    if(sidebar.hasClass('left')){
                        if(sidebar.hasClass('skinny')){
                            $(settings.pageClass).css('margin-left', '200px');
                        } else if(sidebar.hasClass('fat')){
                            $(settings.pageClass).css('margin-left', '300px');
                        } else{
                            $(settings.pageClass).css('margin-left', '250px');
                        }
                    } else if(sidebar.hasClass('right')){
                        if(sidebar.hasClass('skinny')){
                            $(settings.pageClass).css('margin-right', '200px');
                        } else if(sidebar.hasClass('fat')){
                            $(settings.pageClass).css('margin-right', '300px');
                        } else{
                            $(settings.pageClass).css('margin-right', '250px');
                        }
                    }
                }
            } else {
                $(settings.pageClass).css('margin-left', '0px');
                $(settings.pageClass).css('margin-right', '0px');
                nav.find('.hamburger').css('background-color', settings.closeColor);
                $('body').removeClass('no-scroll');
            }
        });

    }

}(jQuery));
