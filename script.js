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








});
