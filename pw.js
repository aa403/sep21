$(document).ready(function () { 
	// back_target = "home"
	$('#pw_attempt').focus();
});

$(document).keypress(function(e) {
	if($(document.activeElement).is(':input')){
	 if(e.which == 13){
	 	$(this).nextAll(".submit").click();
    	}
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
				$("#try_again").slideDown()
			}
        },
        error: function (jqXHR, exception){
        	$("#pw_attempt").val("")
			$("#try_again").slideDown()
        }

    }); // Ajax Call

})