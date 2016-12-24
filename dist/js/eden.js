// function openModal(){
//     $('.open-modal').click(function(){
//         $('.modal').addClass('is-open');
//         $('body').addClass('no-scroll');
//     });
// }
//
// function closeModal(){
//     $('.modal .close').click(function(){
//         $('.modal').removeClass('is-open');
//         $('body').removeClass('no-scroll');
//     });
//
//     $(document).keyup(function(e) {
//         if (e.keyCode == 27) { // escape key maps to keycode `27`
//             $('.modal').removeClass('is-open');
//             $('body').removeClass('no-scroll');
//         }
//     });
// }
//
// $(document).ready(function(){
//     openModal();
//     closeModal();
// });

(function($) {

    $.fn.helloWorld = function() {

        this.each( function() {
            $(this).text("Hello, World!");
        });

    }

}(jQuery));
