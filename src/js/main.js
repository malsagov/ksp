$(document).ready(function(){
    $('#open').on("click", function(){
        $('.mobile-menu').fadeToggle(300)
        $('.menu__btn-burger').toggleClass('active-btn')
    });

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 764,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]    
    });

    $('.open').on('click', function(){
      $('.modal').fadeIn(300)
    });

    $('.close').on('click', function(){
      $('.modal').fadeOut(300)
    });
});