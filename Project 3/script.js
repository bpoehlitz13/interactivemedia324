$('.about').click(function() {
	alert("My name is Bryce Poehlitz. I am trained as an artist and graphic designer. This is a collection of some of the various images that I draw on a semi-daily basis, as well as projects that I have made for some of my classes. If you need to contact me, my email address is bphltz@gmail.com.");
});
$('.button-toggler').click(function(){
    $('.button-container').fadeToggle(200);
});
$('.title').click(function(){
    $(this).parents('.picture').find('.content').slideToggle();
});