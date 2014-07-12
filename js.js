
// turn navBar into little ball
function hideNavBar(ele){
	ele.slideUp(125)
	$('#showNavBar').show()
};

// show navBar

$('#showNavBar').on('click', function(){
	$(this).hide()
	$('#navBar').slideDown(125)
});

$('#navBar').on('click', function(){
	hideNavBar($(this))
});