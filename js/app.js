$(document).ready(function () { 
  $('#slick-section').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.mobile-toggle').click(function () {
    $('nav').toggleClass('open');
  })
  
  $('.feature-mobile-toggle').click(function () {
    $('footer .feature').toggleClass('open');
  })
})
