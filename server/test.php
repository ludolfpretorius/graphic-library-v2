<?php
	require './utils.php';
	require './cors.php';
	cors();

	echo json_encode($_POST['info']);

	exit();