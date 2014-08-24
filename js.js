$(document).ready(function () { 
	$('html, body').scrollTop(0);
});

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
	$(".displayedContent").addClass("hiddenContent")
	$(".displayedContent").removeClass("displayedContent")
	// $('html, body').animate({ scrollTop: 0 }, 'slow');

	// find div with id == $this.data-target, remove class hiddenContent, add class displayedContent
	target_ele = $("#".concat(target))
	target_ele.removeClass('hiddenContent')
	target_ele.addClass('displayedContent')
	$('html, body').scrollTop(0);

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
	$('html, body').scrollTop(0);

});


// open external link
$('.to-link').on('click', function() {
	target=$(this).data("target")
	window.open(target);
  });


// submit a song
$("#add_song").on('click', function() {
	var song_val="nothing"

	if ($("#songs").val()!=""){
		song_val=$("#songs").val()
	}

	var q='q=' + song_val
	
	// reset css animations
	$("#nice_choice").css("display","none")
	$("#nice_choice").css("-webkit-animation-play-state","paused")
	$("#nice_choice").css("-animation-play-state","paused")

	$("#something_wrong").css("display","none")
	$("#something_wrong").css("-webkit-animation-play-state","paused")
	$("#something_wrong").css("-animation-play-state","paused")

	// submit to back end
	$.ajax({
        type: "GET",
        url: "songs.php",
        data: q,
        success: function(resp){
        	// console.log(q)
        	// console.log(resp)
        	try{var song_resp = JSON.parse(resp)}
        	catch(err){var song_resp = err}
        	// console.log(song_resp)
        	// console.log(target)

           if (song_resp.pass == true){
				$("#nice_choice").slideToggle(250)
				// $("#nice_choice").css("-webkit-animation-play-state","running")
				// $("#nice_choice").css("-animation-play-state","running")

			}
			else {
				$("#something_wrong").slideToggle(250)
				// $("#something_wrong").css("-webkit-animation-play-state","running")
				// $("#something_wrong").css("-animation-play-state","running")
			}
        },
        error: function (jqXHR, exception){
        	$("#something_wrong").slideToggle(300)
   //      	$("#something_wrong").css("-webkit-animation-play-state","running")
			// $("#something_wrong").css("-animation-play-state","running")
        }

    }); // Ajax Call

})