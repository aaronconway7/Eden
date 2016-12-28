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
