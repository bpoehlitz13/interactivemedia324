$(document).ready(function(){
	$('div').fadeIn(1000);	
});

$('button').click(function(){
	$('.collapse').fadeToggle();
});
$('.vanish').mouseenter(function(){
	$('.vanish').hide();
});