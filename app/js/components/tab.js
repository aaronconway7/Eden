(function($) {

    $.fn.tab = function(options) {

        //Establish our default settings
        // var settings = $.extend({
        //     type     : 'expandable'
        // }, options);

        return this.each(function(){
            $(this).find('.tab-heading').click(function(){
                $(this).closest('.tab').find('.tab-heading').removeClass('is-active');
                $(this).addClass('is-active');
                $(this).closest('.tab').find('.tab-content').removeClass('is-open');
                var tabNo = $(this).index();
                $(this).closest('.tab').find('.tab-content').eq(tabNo).addClass('is-open');
            });
        });

    }

}(jQuery));
