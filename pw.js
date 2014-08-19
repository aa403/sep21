$(document).ready(function () { 
	// back_target = "home"
	if($('#pw_attempt').is("visible")){
		$('#pw_attempt').focus();
	}
	$('html, body').scrollTop(0);
})

$(document).keypress(function(e) {
    if(e.which == 13 && $("#pw_attempt").is(":focus")) {

        $("#submit").click()
    }
});



$("#submit").on('click', function() {
	var pw_val="nothing"
	if ($("#pw_attempt").val()!=""){
		pw_val=$("#pw_attempt").val()
	}

	var q='q=' + pw_val

	var target=$(this).data("target")
	// submit to back end
	$.ajax({
        type: "GET",
        url: "pw.php",
        data: q,
        success: function(resp){
        	// console.log(q)
        	// console.log(resp)
        	var pw_resp = JSON.parse(resp)
        	// console.log(pw_resp)
        	// console.log(target)

           if (pw_resp.pass == true){
				$("#main_content").html(pw_resp.ctt)
				$("#pw_box").hide()
				$("#main_content").show()
				
			}
			else {
				$("#try_again").slideDown("slow")
				$("#pw_attempt").removeAttr('value')
			}
        }

    }); // Ajax Call

})

function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0]; // <-- added this line
    return filename;                                    // <-- added this line
}


// on click, do these things:
$(".navItem").live('click', function() {
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


$(".nav").live('click', function() {
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
$('.to-link').live('click',function() {
	target=$(this).data("target")
	window.open(target);
  });


