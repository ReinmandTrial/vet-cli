$(function () {
   $('.menu__link').on('click',function(){
      var btn = $(this);
      var btnParent = btn.closest('.menu__item');
      btnParent.toggleClass('open');
   })
   // $('.top__slider').slick({
   //    dots: true,
   //    arrows: false,
   //    fade: true,
   //    autoplay: true
   // });
   
   // Слайдер 
   $('.slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true
    });
    $('.slick--second').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       arrows: true
    })
    $('.slick-next').html('<span class="icon icon-angle-right"></span>');
    $('.slick-prev').html('<span class="icon icon-angle-left"></span>');
   //  Слайдер конец 
   //switch block
    $('.switch__item').on('click',function(){
       var btn = $(this)
       var btnItem = btn.closest('.switch__list').find('.switch__item');
      $(btnItem).each(function(){
         $(this).removeClass('active');
      })
      btn.addClass('active');
    })
   //switch block end
})