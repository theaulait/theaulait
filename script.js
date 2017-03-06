$(document).ready(function(){

$(function() {
var menu = $('#menu');
var list    = $('nav ul');
var listHeight  = list.height();

  $(menu).on('click', function(e) {
    e.preventDefault();
    list.slideToggle();
    });

  $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && list.is(':hidden')) {
      list.removeAttr('style');
      }
    });

});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
      return false;
    }
  }
});


});
