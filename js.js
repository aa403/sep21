
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

var plaxItems = $(document).find('.plaxItem');
var z_index = 0;
// var pos_top = 40;
plaxItems.each(function(){
	// pos_top = pos_top+40;
	// $(this).css('top', pos_top);
	$(this).css('z-index',++z_index);
});
$.stellar({
	 verticalOffset: 150
	});