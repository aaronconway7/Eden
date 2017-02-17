(function($) {

    $.fn.collapsible = function(options) {

        //Establish our default settings
        var settings = $.extend({
            type     : 'expandable'
        }, options);

        return this.each(function(){
            $(this).find('.show-content').click(function(){
                if($(this).closest('.panel').hasClass('is-open')){
                    $(this).closest('.panel').removeClass('is-open');
                    $(this).next('.content').css('max-height', '0');
                }else{
                    if(settings.type == 'accordion'){
                        $(this).closest('.collapsible').find('.panel').removeClass('is-open');
                        $(this).closest('.collapsible').find('.content').css('max-height', '0');
                    }
                    $(this).closest('.panel').addClass('is-open');
                    var scrollHeight = $(this).next('.content')[0].scrollHeight+40;
                    $(this).next('.content').css('max-height', scrollHeight);
                }
            });
        });

    }

}(jQuery));
