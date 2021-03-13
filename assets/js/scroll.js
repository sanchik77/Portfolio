'use strict';

$('.js-scroll-trigger').click(function() {
    let scrollName = $(this).attr('data-scroll'),
    scrollElem = $(scrollName);
   
    let scrollTop = scrollElem.offset().top;
    console.log(scrollTop);
    
    $('html, body').animate({
        scrollTop: scrollTop
      }, 500);
  });