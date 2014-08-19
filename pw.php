<?php 
	$pw = 'barn_wedding';
	if ($_GET['q']){
		$q = $_GET["q"];
		if ($q == $pw){
			echo true;
		}
		else{
			echo false;
		}
	}
?>