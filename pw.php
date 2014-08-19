<?php 
	$pw = 'barn_wedding';
	$file = 'content.html';
	$content = file_get_contents($file);


	if ($_GET['q']){
		$q = $_GET["q"];
		if ($q == $pw){
			echo json_encode(array('pass'=>true,'ctt'=>$content));
		}
		else{
			echo json_encode(array('pass'=>false,'ctt'=>""));
		}
	}
?>