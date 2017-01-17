(function($){
    $.fn.lightbox = function(){

        var lightbox = this;

        return this.each(function(){
            $(this).append(
                "<div class='modal dark-bg row center-center'>"+
                "   <div class='content'>"+
                "       <div class='active-img'>"+
                "           <span class='slide-left slider-control'>❮</span>"+
                "           <span class='slide-right slider-control'>❯</span>"+
                "       </div>"+
                "       <div class='close light inside'>"+
                "           <span>✕</span>"+
                "       </div>"+
                "   </div>"+
                "</div>"
            );

            $(this).children('img').click(function(){
                if(!$(this).hasClass('is-active')){
                    $(this).addClass('is-active').clone(true).appendTo('.lightbox .modal .active-img');
                    $(this).next('.caption').clone(true).appendTo('.lightbox .modal .active-img');
                    $(this).siblings('.modal').addClass('is-open');
                    $('body').addClass('no-scroll');
                }
            });

            $(this).find('.slider-control').click(function(){
                if($(this).hasClass('slide-left')){
                    if($(this).closest('.lightbox').children('img.is-active').is(':first-of-type')){
                        $(this).closest('.lightbox').children('img.is-active').removeClass('is-active');
                        $(this).closest('.lightbox').children('img:last-of-type').addClass('is-active');
                    }else{
                        $(this).closest('.lightbox').children('img.is-active').removeClass('is-active').prevAll('img:first').addClass('is-active');
                    }
                }else{
                    if($(this).closest('.lightbox').children('img.is-active').is(':last-of-type')){
                        $(this).closest('.lightbox').children('img.is-active').removeClass('is-active');
                        $(this).closest('.lightbox').children('img:first-of-type').addClass('is-active');
                    }else{
                        $(this).closest('.lightbox').children('img.is-active').removeClass('is-active').nextAll('img:first').addClass('is-active');
                    }
                }
                $(this).siblings('img').remove();
                $(this).siblings('.caption').remove();
                $(this).closest('.lightbox').children('img.is-active').clone(true).appendTo('.lightbox .modal .active-img');
                $(this).closest('.lightbox').children('img.is-active').next('.caption').clone(true).appendTo('.lightbox .modal .active-img');
            });

            $(this).find('.close').click(function(){
                $(this).closest('.modal').removeClass('is-open');
                $('body').removeClass('no-scroll');
                $(this).closest('.lightbox').find('.is-active').removeClass('is-active');
                $(this).siblings('.active-img').find('img').remove();
                $(this).siblings('.active-img').find('.caption').remove();
            });

            $(document).keydown(function(e){
                if(e.keyCode == 37){ // left
                    lightbox.find('.slider-control.slide-left').trigger('click');
                }else if(e.keyCode == 39){ // right
                    lightbox.find('.slider-control.slide-right').trigger('click');
                }else if(e.keyCode == 27){ // esc
                    lightbox.find('.close').trigger('click');
                }
            });

        });

    }
}(jQuery));
