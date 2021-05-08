// const { each } = require("jquery");

$(function () {
   $('.menu__link').on('click',function(){
      var btn = $(this);
      var btnParent = btn.closest('.menu__item');
      btnParent.toggleClass('open');
      btn.find('.icon').toggleClass('icon-angle-down');
      btn.find('.icon').toggleClass('icon-minus');
   })
   // Слайдер 
   $('.slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive:[
         {
            breakpoint: 1400,
            settings:{
               slidesToShow: 2
            }
         }
      ]
    });
    $('.slick--second').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 1,
       arrows: true,
       responsive:[
          {
             breakpoint:1400,
             settings:{
                slidesToShow:3
             }
          }
       ]
    })
    $('.slick-next').html('<span class="icon icon-angle-right"></span>');
    $('.slick-prev').html('<span class="icon icon-angle-left"></span>');
   //  Слайдер конец 
   //masonry start
   $('.priceBlock__list').masonry({
      itemSelector: '.priceBlock__item',
      columnWidth: '.priceBlock__item',
      gutter: 40
   });
   //masonry end
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
   //skils
   $('.card__skills').on('click',function(){
      var btn = $(this);
      var thisParent = btn.closest('.skills__content');
      var btnItem = thisParent.find('.card__skills');

      $(btnItem).each(function(){
         $(this).removeClass('active');
      })
      btn.addClass('active');
   })
   //skils end
})
// review slider
var click = false;
var glowInterval = 2000 // 1000 = 1 sec
$(document).ready(function() {
   setInterval(function(){
      if(click === false){
         var pos = 1;
         //обработка dots
         var block = $('.review__dots');
         var blockItem = block.find('.review__dots-item');
         $(blockItem).each(function(index){
            if($(this).hasClass('active')){
               if($(this).is(':last-child')){
                  $(this).removeClass('active');
                  $(blockItem).each(function(){
                     if($(this).is(':first-child')){
                        $(this).addClass('active');
                        pos = 1;
                     }
                  })
               }else{
                  $(this).removeClass('active');
                  $(this).next().addClass('active');
                  pos = index + 2;
                  return false;
               }
            }
         })
         //обработка бордеров
         var blockBody = $('.review__slide');
         $(blockBody).each(function(){
            $(this).removeClass().addClass('review__slide');
         })
         if(pos === 1){
            blockBody.addClass('top');
         }else if(pos === 2){
            blockBody.addClass('right'); 
         }else if(pos === 3){
            blockBody.addClass('bottom');
         }else if(pos === 4){
            blockBody.addClass('left');
         }
         //обработка текста
         var blockTextItem = $('.review__info-list').find('.review__info-item');
         $(blockTextItem).each(function(){
            $(this).removeClass('active');
         })
         $(blockTextItem).each(function(index){
            if(pos === (index+1)){
               $(this).addClass('active');
            }
         })

      }
      click = false;
   }, glowInterval);
});
$('.review__dots-item').on('click',function(){
   //обработчик дотсов
   var btn = $(this);
   var btnItems = btn.closest('.review__dots').find('.review__dots-item');
   var blockBody = $('.review__slide');
   var blockTextItem = $('.review__info-list').find('.review__info-item');
   $(btnItems).each(function(){
      $(this).removeClass('active');
   })
   btn.addClass('active');
   $(btnItems).each(function(index){
      if($(this).hasClass('active')){
         pos2 = index + 1;
      }
   })
   //обработка бордеров
   $(blockBody).each(function(){
      $(this).removeClass().addClass('review__slide');
   })
   if(pos2 === 1){
      blockBody.addClass('top');
   }else if(pos2 === 2){
      blockBody.addClass('right'); 
   }else if(pos2 === 3){
      blockBody.addClass('bottom');
   }else if(pos2 === 4){
      blockBody.addClass('left');
   }
   //обработчик блоков с текстом
   $(blockTextItem).each(function(){
      $(this).removeClass('active');
   })
   $(blockTextItem).each(function(index){
      if(pos2 === (index+1)){
         $(this).addClass('active');
      }
   })
   click = true;
})
//review slider end

//popup start
// $('.btn-popup').on('click',function(){
//    if($(this).hasClass('.popup-template')){
//       $('.popup-template').show();
//    }
//    // $('.popup').show();
// })
$('.popup-close').on('click',function(){
   $(this).closest('.popup').removeClass('open');
})
//popup end
// popup-review start
$('.card__review-more').on('click',function(){
   var btn = $(this);
   var popup = $('.popup__review');
   var title = btn.closest('.card__review').find('.card__review-title').html();
   var text = btn.closest('.card__review').find('.card__review-text').html();
   popup.find('.popup__review-title').html(title);
   popup.find('.popup__review-text').html(text);
   popup.addClass('open');
})

//popup-review end
//popup-createReview
$('.btn-review').on('click',function(){
   var btn = $(this);
   var select = $('.select');
   var items = select.find('.select-list').find('.select-item');
   var title = select.find('.select__header-title');
   if(!$('.content').hasClass('content--employee')){
      $(items).each(function(){
         if($(this).is(':first-child')){
            title.html($(this).html());
         }
      })
   }else{
      title.html($('.content--employee').find('.employee__info').find('h1.h2').html());
   }
   var popup = $('.createReview');
   popup.addClass('open');
})
//popup-createReview
//popup-createSubscribe
$('.btn-createSubscribe').on('click',function(){
   $('.createSubscribe').addClass('open');
})
//popup-createSubscribe
// select start 
$(function(){
   // var select = $('.select');
   // var items = select.find('.select-list').find('.select-item');
   // var title = select.find('.select__header-title');
   // if(!$('.content').hasClass('content--employee')){
   //    $(items).each(function(){
   //       if($(this).is(':first-child')){
   //          title.html($(this).html());
   //       }
   //    })
   // }else{
   //    title.html($('.content--employee').find('.employee__info').find('h1.h2').html());
   // }
   
})
$('.select__header').on('click',function(){
   var select = $(this).closest('.select');
   select.toggleClass('open');
})
$('.select-item').on('click',function(){
   var btn = $(this);
   var text = btn.html();
   var select = btn.closest('.select');
   select.find('.select__header-title').html(text);
})
$(document).mouseup(function (e) {
   var container = $(".select");
   // var body = container.find('.select__body');
   var header = container.find('.select__header');
   if (header.has(e.target).length === 0){
      container.removeClass('open');
   }
});
// select end 
// popup photogallery
$('.card__clinic').on('click',function(){
   $('.popup__gallery').addClass('open');
})
// popup photogallery end 
//slider photogallery 
var i = 1;
$('.s-next').on('click',function(){
   var sliderItem = $('.slickslide').find('.slickslide-item');
   var navSlideItem = $('.slickslide-nav').find('.slickslide-nav__item')
   $(sliderItem).each(function(index){
      if($(this).hasClass('active')){
         if($(this).is(':last-child')){
            $(this).removeClass('active');
            $(sliderItem).each(function(){
               if($(this).is(':first-child')){
                  $(this).addClass('active');
                  i = 1;
               }
            })
         }else{
            $(this).removeClass('active');
            $(this).next().addClass('active');
            i = index + 2;
            return false;
         }
      }
   })
   $(navSlideItem).each(function(index){
      if(index + 1 === i){
         $(this).addClass('active');
      }else{
         $(this).removeClass('active');
      }
   })
})
$('.s-prev').on('click',function(index){
   var sliderItem = $('.slickslide').find('.slickslide-item');
   var navSlideItem = $('.slickslide-nav').find('.slickslide-nav__item')
   $(sliderItem).each(function(ind){
      if($(this).hasClass('active')){
         if($(this).is(':first-child')){
            $(this).removeClass('active');
            $(sliderItem).each(function(inde){
               if($(this).is(':last-child')){
                  $(this).addClass('active');
               }
               i = inde + 1;
            })
            return false;
         }else{
            $(this).removeClass('active');
            $(this).prev().addClass('active');
            i = ind;
            return false;
         }
      }
   })
   console.log(i)
   $(navSlideItem).each(function(index){
      if(index + 1 === i){
         $(this).addClass('active');
      }else{
         $(this).removeClass('active');
      }
   })
})

$('.slickslide-nav__item').on('click',function(){
   var pos = 1;
   var sliderItem = $('.slickslide').find('.slickslide-item');
   var navSlideItem = $('.slickslide-nav').find('.slickslide-nav__item')
   var btn = $(this);
   $(navSlideItem).each(function(){
         $(this).removeClass('active');
   })
   btn.addClass('active');
   $(navSlideItem).each(function(index){
      if($(this).hasClass('active')){
         pos = index;
      }
   })
   $(sliderItem).each(function(index){
      if(pos === index){
         $(this).addClass('active');
      }else{
         $(this).removeClass('active');
      }
   })
})
//slider photogallery end 