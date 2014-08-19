
$(document).ready(function () { 
	// back_target = "home"
	$('html, body').scrollTop(0);
	
	var pw_done=false
	var currurl = window.location.pathname;
	var curpage = getPageName(currurl)

	if (pw_done == false && curpage!="pw"){
		window.location="pw.html";
	}
})

function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0]; // <-- added this line
    return filename;                                    // <-- added this line
}


// on click, do these things:
$(".navItem").on('click', function() {
	target=$(this).data("target")
	// remove currentPage class from all navItems
    $(".currentPage").removeClass("currentPage")
	// add currentPage class to $this
    $(this).addClass("currentPage")
	
	// find all divs with classes displayedContent
	back_target = $(".displayedContent").attr('id')
	$(".displayedContent").addClass("hiddenContent")
	$(".displayedContent").removeClass("displayedContent")
	// $('html, body').animate({ scrollTop: 0 }, 'slow');

	// find div with id == $this.data-target, remove class hiddenContent, add class displayedContent
	target_ele = $("#".concat(target))
	target_ele.removeClass('hiddenContent')
	target_ele.addClass('displayedContent')

});


$(".nav").on('click', function() {
	target=$(this).data("target")
	// remove currentPage class from all navItems
    $(".currentPage").removeClass("currentPage")
    
	// set nav_ele as the navItem with data-target = target
	nav_ele = $(".navItem[data-target=".concat(target).concat("]"))
	

	// add currentPage class to nav_ele
    $(nav_ele).addClass("currentPage")
	
	// find all divs with classes displayedContent
	$(".displayedContent").addClass("hiddenContent")
	$(".displayedContent").removeClass("displayedContent")
	// $('html, body').animate({ scrollTop: 0 }, 'slow');

	// find div with id == $this.data-target, remove class hiddenContent, add class displayedContent
	target_ele = $("#".concat(target))
	target_ele.removeClass('hiddenContent')
	target_ele.addClass('displayedContent')

});


// open external link
$('.to-link').click(function() {
	target=$(this).data("target")
	window.open(target);
  });