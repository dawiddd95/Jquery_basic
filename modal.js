$(document).ready(function() {
   var mouse_in = false;
   const $registerBtn = $('.register-button');
   const $navModal = $('.nav__modal');
   const $modalBtn = $('.modal__button');

   $navModal.hide();

   $navModal.on('mouseover', function() {
      mouse_in = true;
   })

   $navModal.on('mouseout', function() {
      mouse_in = false;
   })

   $registerBtn.on('click', function() {
      $navModal.slideDown(700);
   })

   $modalBtn.on('click', function() {
      $navModal.slideUp(700);
   })

   $('body').mouseup( function() {
      if(!mouse_in) {
         $navModal.slideUp(700);
      } 
   })
})