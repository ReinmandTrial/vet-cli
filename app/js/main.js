$(function () {
   $('.menu__link').on('click',function(){
      var btn = $(this);
      var btnParent = btn.closest('.menu__item');
      btnParent.toggleClass('open');
   })
})