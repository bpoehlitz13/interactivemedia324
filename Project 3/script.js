$('.about').click(function() {
	alert('My name is Bryce Poehlitz. I draw a lot. This is a sample of the things I like to draw.');
});
$('.button-toggler').click(function(){
    $('.button-container').fadeToggle(200);
});
$('.title').click(function(){
    $(this).parents('.picture').find('.content').slideToggle();
});