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
