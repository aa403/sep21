<?php
	if ($_GET['q']){
		$song = $_GET["q"];
		// $song = "'".$_GET["q"];
		// $song = $song."'";

		$dbconn = pg_connect("host=ec2-54-247-118-153.eu-west-1.compute.amazonaws.com 
					dbname=d7ae6vj91njv84
					user=cwazygvwzuhpuh
					password=hS_ZGtu5gu0dTJaCuhcwpvybmY")
				or die('Could not connect: ' . pg_last_error());

		//perform the insert using pg_query
		//$result = pg_query($dbconn, "INSERT INTO songs(request, created) VALUES(\"$song\", time());");
				// ERROR:  column "sine" does not exist\nLINE 1:
				// INSERT INTO songs(request)
				// 			VALUES("sine");\n 
				// INSERT INTO films (code, title, did, date_prod, kind)
				// 			VALUES ('T_601', 'Yojimbo', 106, '1961-06-16', 'Drama');
		// $result = pg_query($dbconn, "INSERT INTO songs (request) VALUES($song)");
		$result = pg_query($dbconn, "INSERT INTO songs (request) VALUES(\'song\')");

		//dump the result object
		if ($result == false) {
			echo false;
		}

		else{
			echo true;
		}

		// Closing connection
		pg_close($dbconn);
	}
?>