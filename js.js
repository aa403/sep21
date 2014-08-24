$(document).ready(function () { 
	$('html, body').scrollTop(0);
	
	if ($('#pw_attempt').is(':visible')){
		$('#pw_attempt').focus();
		}

	if ($('#songs').is(':visible')){
		$('#songs').focus();
	}

});



$(document).keypress(function(e) {
	if($(document.activeElement).is(':input')){
	 if(e.which == 13){
	 	$(document.activeElement).nextAll(".submit").click();
    	}
	}
});



$("#pw_submit").on('click', function() {
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
        	try{var pw_resp = JSON.parse(resp)}
        	catch(err){var pw_resp = err}
        	// console.log(pw_resp)
        	// console.log(target)

           if (pw_resp.pass == true){
				$("#main_content").html(pw_resp.ctt)
				$("#pw_box").hide()
				$("#main_content").show()
				
			}
			else {
				$("#pw_attempt").val("")
				$("#try_again").slideDown().delay(1500).slideUp(250)
			}
        },
        error: function (jqXHR, exception){
        	$("#pw_attempt").val("")
			$("#try_again").slideDown().delay(1500).slideUp(250)
        }

    }); // Ajax Call

})




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
	$("#nice_choice").hide()
	// $("#nice_choice").css("-webkit-animation-play-state","paused")
	// $("#nice_choice").css("-animation-play-state","paused")

	$("#something_wrong").hide()
	// $("#something_wrong").css("-webkit-animation-play-state","paused")
	// $("#something_wrong").css("-animation-play-state","paused")

	// submit to back end
	$.ajax({
        type: "GET",
        url: "songs.php",
        data: q,
        success: function(resp){
        	// console.log(q)
        	// console.log(resp)
        	try{var song_resp = resp}
        	catch(err){var song_resp = err}
        	// console.log(song_resp)
        	// console.log(target)

           if (song_resp == true){
				$("#nice_choice").slideDown(250).delay(1500).slideUp(250)
				// $("#nice_choice").css("-webkit-animation-play-state","running")
				// $("#nice_choice").css("-animation-play-state","running")

			}
			else {
				$("#something_wrong").slideDown(250).delay(1500).slideUp(250)
				// $("#something_wrong").css("-webkit-animation-play-state","running")
				// $("#something_wrong").css("-animation-play-state","running")
			}
        },
        error: function (jqXHR, exception){
        	$("#something_wrong").slideDown(300).delay(1500).slideUp(250)
   //      	$("#something_wrong").css("-webkit-animation-play-state","running")
			// $("#something_wrong").css("-animation-play-state","running")
        }

    }); // Ajax Call

})