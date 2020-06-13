$(document).ready(function() {
   const $nav = $('.nav');
   const $navExpand = $('.nav__expand').hide();
   const $navLink = $('.nav__link');
   const $menuLink = $('.menu__link');
   const $bodyFashion = $('.body__fashion');
   const $bodySport = $('.body__sport');
   const $bodyHealth = $('.body__health');

   $bodySport.hide();
   $bodyHealth.hide();

   $navLink.on('mouseover', function() {
      $navExpand.stop().slideDown();
   })

   $navExpand.on('mouseover', function() {
      $navExpand.stop().slideDown();
   })

   $navExpand.on('mouseout', function() {
      $navExpand.stop().slideUp();
   })

   $menuLink.on('click', function(event) {
      $menuLink.removeClass('active');
      $(this).addClass('active');

      if(event.target.id === 'sport-link') {
         $bodyFashion.hide();
         $bodyHealth.hide();
         $bodySport.show();
      } else if(event.target.id === 'fashion-link') {
         $bodySport.hide();
         $bodyHealth.hide();
         $bodyFashion.show();
      } else {
         $bodySport.hide();
         $bodyFashion.hide();
         $bodyHealth.show();
      }
   })
})