$('.about').click(function() {
	alert("My name is Bryce Poehlitz. I draw a lot of different things. This is only a sample of the many things I like to draw. If you need to contact me for any reason, my email address is bphltz@gmail.com.");
});
$('.button-toggler').click(function(){
    $('.button-container').fadeToggle(200);
});
$('.title').click(function(){
    $(this).parents('.picture').find('.content').slideToggle();
});