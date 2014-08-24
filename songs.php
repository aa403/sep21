<?php
	if ($_GET['q']){
		$song = $_GET["q"];
		// $song = "'".$_GET["q"];
		// $song = $song."'";

		$dbconn = pg_connect("host=ec2-54-228-227-236.eu-west-1.compute.amazonaws.com 
					dbname=d76ka7eujlrtci
					user=wcuvqmvohiekbv
					password=sX7xoQepIEhS8PlXdfSz3Fexpb")
				or die('Could not connect: ' . pg_last_error());

		$result = pg_query_params($dbconn, 'INSERT INTO songs (request) VALUES($1)', array($song));

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