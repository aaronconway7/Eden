function openModal(){
    $('.open-modal').click(function(){
        $('.modal').addClass('is-open');
    });
}

function closeModal(){
    $('.modal .close').click(function(){
        $('.modal').removeClass('is-open');
    });
}

$(document).ready(function(){
    openModal();
    closeModal();
});
