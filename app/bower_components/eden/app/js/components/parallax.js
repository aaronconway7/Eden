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
