$(document).ready(function() {
	alert('welcome :)');
});
$(function() {
    $('.cathover').hide();
    $('.catsleep').mouseenter(function() {
      	$('.cathover').show();
      	$('body').css("background-color", "firebrick");
    });
    $('.cathover').mouseleave(function() {
      	$('.cathover').hide();
      	$('body').css("background-color", "white");
    });
});