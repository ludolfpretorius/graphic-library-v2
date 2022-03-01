<?php
	ob_start();
	include './utilities.php';

	$password = isset($_POST['password']) ? filter_var($_POST['password'], FILTER_SANITIZE_STRING) : '';
	$hashes = json_decode(file_get_contents('../db/hashes.json'));
	
	if (isset($_POST['password']) && password_verify($password, $hashes->admin)) {
		logUser('../logs/adminusers.txt');
		setcookie('al-admin', password_hash($hashes->admincookie, PASSWORD_DEFAULT), time() + (86400 * 1), '/');
		header('Location: /admin.php');
		exit();
	} elseif (isset($_POST['password']) && preg_match("/<|>|--|#|\/\/|;/i", $_POST['password'])) {
		blockUser('../logs/blocked.txt', 'al-admin', '../blocked.php');
	} elseif (isset($_POST['password']) && !password_verify($password, $hash)) {
		header('Location: /adminlogin.php?login=failed', true, 302);
		exit();
	} else {
		blockUser('../logs/blocked.txt', 'al-admin', '../blocked.php');
	}
	ob_end_flush();