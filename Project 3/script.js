$('.about').click(function() {
	alert('My name is Bryce Poehlitz.');
});
$('.title').click(function(){
    $(this).parents('.picture').find('.content').slideToggle();
});