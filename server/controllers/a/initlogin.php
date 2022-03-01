<?php
	ob_start();
	include './utilities.php';

	$password = isset($_POST['password']) ? filter_var($_POST['password'], FILTER_SANITIZE_STRING) : '';
	$hashes = json_decode(file_get_contents('../db/hashes.json'));
	
	if (isset($_POST['password']) && password_verify($password, $hashes->user)) {
		logUser('../logs/users.txt');
		setcookie('al-user', password_hash($hashes->cookie, PASSWORD_DEFAULT), time() + (86400 * 30), '/');
		header('Location: /app.php');
		exit();
	} elseif (isset($_POST['password']) && password_verify($password, $hashes->readonly)) {
		logUser('../logs/users - read only.txt');
		setcookie('al-user-readonly', password_hash($hashes->readonlycookie, PASSWORD_DEFAULT), time() + (86400 * 30), '/');
		header('Location: /read.php');
		exit();
	} elseif (isset($_POST['password']) && preg_match("/<|>|--|#|\/\/|;/i", $_POST['password'])) {
		blockUser('../logs/blocked.txt', 'al-user', '../blocked.php');
	} elseif (isset($_POST['password']) && !password_verify($password, $hash)) {
		header('Location: /login.php?login=failed', true, 302);
		exit();
	} else {
		blockUser('../logs/blocked.txt', 'al-user', '../blocked.php');
	}
	ob_end_flush();