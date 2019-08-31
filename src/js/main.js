$(document).ready(function(){

   //Включение меню
    $('#open').on("click", function(){
        $('.mobile-menu').fadeToggle(300)
        $('.menu__btn-burger').toggleClass('active-btn')
    });
   //Выключение меню при переходе по ссылке
    $('.mobile-menu__item').on('click', function(){
      $('.mobile-menu').fadeOut(300)
    });
    //Слайдер slick
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
    //Вызов модального окна
    $('.open').on('click', function(){
      $('.modal').fadeIn(300)
    });
    //Закрытие моального окна
    $('.close').on('click', function(){
      $('.modal').fadeOut(300)
    });
    //Маска для телефона
    $('.phone').mask('+7 (999) 999-99-99');
    //ajax
    $('#modal').on('submit', function(event){
      event.preventDefault()
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
          $('.success').text('Спасибо, ' + data + '. Ваша форма отправлена!')
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR + ':' + textStatus);
        }
      })
    });

    $('#callback').on('submit', function(event){
      event.preventDefault()
      $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
          $('.succsessful').text('Спасибо, ' + data + '. Ваша форма отправлена!')
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR + ':' + textStatus);
        }
      })
    });
});