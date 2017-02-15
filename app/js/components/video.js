(function($) {

    $.fn.video = function(options) {

        return this.each(function(){
            $(this).find('.play').click(function(){
                $(this).closest('.video').addClass('is-playing');
                $(this).closest('.video').find('video')[0].play();
            });

            $(this).find('.pause').click(function(){
                $(this).closest('.video').removeClass('is-playing');
                $(this).closest('.video').find('video')[0].pause();
            });
        });

    }

}(jQuery));
