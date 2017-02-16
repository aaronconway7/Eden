(function($) {

    $.fn.accordion = function(options) {

        // Establish our default settings
        // var settings = $.extend({
        //     pageWrapper     : 'main',
        // }, options);

        return this.each(function(){
            $(this).find('.show-content').click(function(){
                if($(this).closest('.panel').hasClass('is-open')){
                    $(this).closest('.panel').removeClass('is-open');
                    $(this).next('.content').css('max-height', '0');
                }else{
                    $(this).closest('.panel').addClass('is-open');
                    var scrollHeight = $(this).next('.content')[0].scrollHeight+40;
                    $(this).next('.content').css('max-height', scrollHeight);
                }
            });
        });

    }

}(jQuery));
