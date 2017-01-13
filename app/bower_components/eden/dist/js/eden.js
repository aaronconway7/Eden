(function($) {

    $.fn.animate = function() {

        var wScroll = $(window).scrollTop();

        return this.each(function(i){
            if($(this).hasClass('on-delay') && $(this).hasClass('on-scroll')){
                if((wScroll + ($(window).height()*0.8)) > $(this).offset().top){
                    var n = $(this).index();
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

(function($) {

    $.fn.modal = function(options) {

        // Establish our default settings
        var settings = $.extend({
            open    : '.open-modal',
            close   : '.close-modal'
        }, options);

        return $(settings.open).click(function(){
            var modal = $(this).next('.modal');

            $(this).next('.modal').addClass('is-open');
            $('body').addClass('no-scroll');

            modal.find(settings.close).click(function(){
                modal.removeClass('is-open');
                $('body').removeClass('no-scroll');
            });

            $(document).keyup(function(e) {
                if (e.keyCode == 27) { // escape key maps to keycode `27`
                    modal.removeClass('is-open');
                    $('body').removeClass('no-scroll');
                }
            });

        });

    }

}(jQuery));

(function($) {

    $.fn.nav = function(options) {

        var nav = this;
        var toggle = nav.find('.mob-toggle');
        var sidebar = nav.find('.sidebar');

        // Establish our default settings
        var settings = $.extend({
            pageShift     : false,
            openColor     : '#2F2F2F',
            closeColor    : '#2f2f2f',
            pageClass     : '.page-container'
        }, options);

        return toggle.change(function(){
            if(this.checked){
                $('body').addClass('no-scroll');
                nav.find('.hamburger').css('background-color', settings.openColor);
                if(settings.pageShift){
                    if(sidebar.hasClass('left')){
                        if(sidebar.hasClass('skinny')){
                            $(settings.pageClass).css('margin-left', '200px');
                        } else if(sidebar.hasClass('fat')){
                            $(settings.pageClass).css('margin-left', '300px');
                        } else{
                            $(settings.pageClass).css('margin-left', '250px');
                        }
                    } else if(sidebar.hasClass('right')){
                        if(sidebar.hasClass('skinny')){
                            $(settings.pageClass).css('margin-right', '200px');
                        } else if(sidebar.hasClass('fat')){
                            $(settings.pageClass).css('margin-right', '300px');
                        } else{
                            $(settings.pageClass).css('margin-right', '250px');
                        }
                    }
                }
            } else {
                $(settings.pageClass).css('margin-left', '0px');
                $(settings.pageClass).css('margin-right', '0px');
                nav.find('.hamburger').css('background-color', settings.closeColor);
                $('body').removeClass('no-scroll');
            }
        });

    }

}(jQuery));

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