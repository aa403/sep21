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
	var q='q=' + $("#pw_attempt").val()
	var target=$(this).data("target")
	// submit to back end
	$.ajax({
        type: "GET",
        url: "pw.php",
        data: q,
        success: function(pw_resp){
        	// console.log(q)
        	// console.log(pw_resp)
        	// console.log(target)

           if (pw_resp == true){
				pw_done=true
				window.location=target;
			}
			else {
				$("#try_again").slideDown("slow")
				$("#pw_attempt").removeAttr('value')
			}
        }

    }); // Ajax Call

})