<?php
	ob_start();
	date_default_timezone_set("Africa/Johannesburg");

	$contents = file('./logs/blocked.txt');
	$cookie = isset($_COOKIE['al-admin']) ? $_COOKIE['al-admin'] : '';
	$hashes = json_decode(file_get_contents('./db/hashes.json'));

	foreach($contents as $line) {
	    if (strpos($line, $_SERVER['REMOTE_ADDR']) !== false) {
	    	header('Location: blocked.php', true, 302);
	    	exit();
	    }
	}

	if (isset($_COOKIE['al-admin']) && password_verify($hashes->admincookie, $_COOKIE['al-admin'])) {
		if (strpos($_SERVER['REQUEST_URI'], '/adminlogin.php') !== false) {
			header("Location: admin.php");
			exit();
		}
	} else {
		if (strpos($_SERVER['REQUEST_URI'], '/adminlogin.php') === false) {
			header('Location: adminlogin.php');
			exit();
		}
	}
	ob_end_flush();