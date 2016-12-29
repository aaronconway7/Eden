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
