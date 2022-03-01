<?php
	ob_start();
	date_default_timezone_set("Africa/Johannesburg");

	$contents = file('./logs/blocked.txt');
	$cookie = isset($_COOKIE['al-user']) ? $_COOKIE['al-user'] : (isset($_COOKIE['al-user-readonly']) ? $_COOKIE['al-user-readonly'] : '');
	$hashes = json_decode(file_get_contents('./db/hashes.json'));

	foreach($contents as $line) {
	    if (strpos($line, $_SERVER['REMOTE_ADDR']) !== false) {
	    	header('Location: blocked.php', true, 302);
	    	exit();
	    }
	}

	if (isset($_COOKIE['al-user']) && password_verify($hashes->cookie, $_COOKIE['al-user'])) {
		if (strpos($_SERVER['REQUEST_URI'], '/login.php') !== false) {
			header("Location: app.php");
			header('X-Hacker: Congratulations you nerd, you found an easter egg! 🥚 You have my respect for all time.');
			exit();
		}
	}
	// elseif (isset($_COOKIE['al-user-readonly']) && password_verify($hashes->readonlycookie, $_COOKIE['al-user-readonly'])) {
	// 	if (strpos($_SERVER['REQUEST_URI'], '/login.php') !== false) {
	// 		header("Location: read.php");
	// 		header('X-Hacker: Congratulations you nerd, you found an easter egg! 🥚 You have my respect for all time.');
	// 		exit();
	// 	}
	// } 
	else {
		if (strpos($_SERVER['REQUEST_URI'], '/login.php') === false) {
			header('Location: login.php');
			exit();
		}
	}
	ob_end_flush();