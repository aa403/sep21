$(document).ready(function () { 
	// back_target = "home"
	$('#pw_attempt').focus();
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