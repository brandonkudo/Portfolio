var $ = jQuery;

$(document).ready(function() {
  $('.burger-container').click(function() {
    $('.hide-dropdown').slideToggle();
  });
});
