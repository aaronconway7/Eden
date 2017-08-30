$(document).ready(function(){
    smoothScrolling();
});

$('.sidebar-toggle').click(function(){
    $('.sidebar').toggleClass('is-closed');
});

$('.sidebar .component-search').keyup(function(){
    var filter = $(this).val().toUpperCase();
    var li = $('.sidebar .menu-item');

    li.each(function(i){
        if($(this).html().toUpperCase().indexOf(filter) > -1){
            $(this).show();
        }else{
            $(this).hide();
        }
    });

    $('.component-title').each(function(i){
        if($(this).html().toUpperCase().indexOf(filter) > -1){
            $(this).parents('.component').show();
        }else{
            $(this).parents('.component').hide();
        }
    });

});
