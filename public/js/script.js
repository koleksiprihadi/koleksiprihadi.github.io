$(document).ready(function() {
  $('nav').removeClass('navbar-down').addClass('navbar-up');
});
$(window).scroll(function() {
  if ($("html").scrollTop() === 0) {
    $('nav').removeClass('navbar-down').addClass('navbar-up');
  } else {
    $('nav').removeClass('navbar-up').addClass('navbar-down');
  }
});