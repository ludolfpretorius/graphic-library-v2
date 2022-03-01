<?php
	error_reporting(E_ALL);
	ob_start();
	if ($_SERVER['REQUEST_SCHEME'] === 'http') {
		header('Location: https://'.$_SERVER["SERVER_NAME"].$_SERVER['REQUEST_URI']);
	} else {
		header('Location: /app.php');
	}
	// $protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === 0 ? 'https://' : 'http://';
	// if ($protocol === 'http://') {
	// 	header('Location: https://'.$_SERVER["SERVER_NAME"].$_SERVER['REQUEST_URI']);
	// } else {
	// 	header("Location: /app.php");
	// }
	exit();
	ob_end_flush();
