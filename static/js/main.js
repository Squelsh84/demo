/**
* Template Name: Rapid - v2.0.0
* Template URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });
});


