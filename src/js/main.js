$(document).ready(function(){
    $('#open').on("click", function(){
        $('.mobile-menu').fadeToggle(300)
        $('.menu__btn-burger').toggleClass('active-btn')
    })
});