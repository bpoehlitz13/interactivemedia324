$(document).ready(function() {
	alert('welcome :)');
});
$(function() {
    $('.cathover').hide();
    $('.catsleep').mouseenter(function() {
      	$('.cathover').show();
      	$('body').toggleClass('background-image');
      	$('body').css('background-color', 'red');
    });
    $('.cathover').mouseleave(function() {
      	$('.cathover').hide();
    });
});