(function($) {

    $.fn.slide = function(options) {

        var slider = this;
        var sliderArrows = this.find('.slider-control');
        var sliderDots = this.find('.dots');
        var sliderX = 0;

        // Establish our default settings
        var settings = $.extend({
            quantity        : 1,
            timer           : true,
            delay           : 5000,
            transition      : true,
            controls        : true,
            controlColor   : '#fff'
        }, options);

        return this.each(function(){

            $(this).find('.slides').css('width', settings.quantity*100 + '%');
            sliderArrows.css('color', settings.controlColor);
            sliderDots.find('.dot').css('background-color', settings.controlColor);

            if(!settings.transition){
                slider.find('.slides').css('transition', 'none');
            }

            if(settings.controls){
                sliderArrows.click(function(){
        			if($(this).hasClass('slide-left')){
                        if(slider.find('.slide.is-active').is(':first-child')){
        				    slider.find('.slide.is-active').removeClass('is-active');
                            slider.find('.slide:last-of-type').addClass('is-active');

                            sliderDots.find('.dot.is-active').removeClass('is-active');
                            sliderDots.find('.dot:last-of-type').addClass('is-active');

                            sliderX = -100 + (100/settings.quantity);
        					slider.find('.slides').css('transform', 'translateX('+ sliderX +'%)');
        				} else {
        					slider.find('.slide.is-active').removeClass('is-active').prev('.slide').addClass('is-active');
                            sliderDots.find('.dot.is-active').removeClass('is-active').prev('.dot').addClass('is-active');

                            sliderX = sliderX + (100/settings.quantity);
                            slider.find('.slides').css('transform', 'translateX('+ sliderX +'%)');
        				}
        			} else if($(this).hasClass('slide-right')){
                        if(slider.find('.slide.is-active').is(':last-child')){
        					slider.find('.slide.is-active').removeClass('is-active');
        					slider.find('.slide:first-of-type').addClass('is-active');

                            sliderDots.find('.dot.is-active').removeClass('is-active');
                            sliderDots.find('.dot:first-of-type').addClass('is-active');

                            sliderX = 0;
        					slider.find('.slides').css('transform', 'translateX('+ sliderX +'%)');
        				} else {
        					slider.find('.slide.is-active').removeClass('is-active').next('.slide').addClass('is-active');
                            sliderDots.find('.dot.is-active').removeClass('is-active').next('.dot').addClass('is-active');

                            sliderX = sliderX - (100/settings.quantity);
                            slider.find('.slides').css('transform', 'translateX('+ sliderX +'%)');
        				}
        			}
        		});

                sliderDots.find('.dot').click(function(){
                    if(!$(this).hasClass('is-active')){
                        var slideIndex = $(this).index();
                        slider.find('.slide.is-active').removeClass('is-active');
                        sliderDots.find('.dot.is-active').removeClass('is-active');

                        slider.find('.slide').eq(slideIndex).addClass('is-active');
                        $(this).addClass('is-active');
                    }
                });
            }

            if(settings.timer){
                setInterval(function(){
                    slider.find('.slide-right').trigger("click");
        		}, settings.delay);
            }

        });

    }

}(jQuery));
