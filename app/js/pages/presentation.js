$(document).ready(function(){
    $('footer').sticky();
    smoothScrolling();

    $('#fullpage').fullpage({
        navigation: true,
        slidesNavigation: true,
        controlArrows: false
    });
});
