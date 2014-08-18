

// on click, do these things:
$(".navItem").on('click', function() {
	target=$(this).data("target")
	// remove currentPage class from all navItems
    $(".navItem").removeClass("currentPage")
	// add currentPage class to $this
    $(this).addClass("currentPage")
	
	// find all divs with classes displayedContent
	$(".displayedContent").addClass("hiddenContent")
	$(".displayedContent").removeClass("displayedContent")

	// find div with id == $this.data-target, remove class hiddenContent, add class displayedContent
	target_ele = $("#".concat(target))
	target_ele.removeClass('hiddenContent')
	target_ele.addClass('displayedContent')

});


$('.to-map').click(function() {
	target=$(this).data("target")
	window.open(target);
  });



$(".nav").on('click', function() {
	target=$(this).data("target")
	// remove currentPage class from all navItems
    $(".navItem").removeClass("currentPage")
    
	// set nav_ele as the navItem with data-target = target
	nav_ele = $(".navItem[data-target=".concat(target).concat("]"))
	

	// add currentPage class to nav_ele
    $(nav_ele).addClass("currentPage")
	
	// find all divs with classes displayedContent
	$(".displayedContent").addClass("hiddenContent")
	$(".displayedContent").removeClass("displayedContent")

	// find div with id == $this.data-target, remove class hiddenContent, add class displayedContent
	target_ele = $("#".concat(target))
	target_ele.removeClass('hiddenContent')
	target_ele.addClass('displayedContent')

});