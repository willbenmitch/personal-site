(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel({duration: 200});
    $('.live-date').text(new Date().getFullYear())

  }); // end of document ready
})(jQuery); // end of jQuery name space