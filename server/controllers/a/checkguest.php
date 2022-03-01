<?php
	ob_start();
	require('./controllers/utilities.php');

	$blocked = file('./logs/blocked.txt');
	$tokenFilepath = './db/tokens.json';
	$tokenEntries = json_decode(file_get_contents($tokenFilepath));
	$token = isset($_GET["t"]) ? trim($_GET["t"]) : null;
	$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$time = time();

	foreach($blocked as $line) {
	    if (strpos($line, $_SERVER['REMOTE_ADDR']) !== false) {
	    	header('Location: blocked.php', true, 302);
	    	exit();
	    }
	}
	
	if (count($tokenEntries)) {
		$expired = false;
		$invalid = true;
		foreach ($tokenEntries as $index=>$entry) {
			if ($entry->token === $token && $entry->url === $url) {
				if ($time < $entry->expires) {
					$invalid = false;
					logGuest('./logs/guests.txt', $url, $token);
					echo "<script>document.addEventListener('DOMContentLoaded', () => document.querySelector('#expiryDate span').innerText = new Date($entry->expires * 1000).toDateString())</script>";
				} else {
					$expired = true;
				}
			}
		}
		if ($expired) {
			array_splice($tokenEntries, $index, 1);
			file_put_contents($tokenFilepath, json_encode($tokenEntries, JSON_PRETTY_PRINT));
			header('Location: expired.php', true, 302);
			exit();
		} elseif ($invalid) {
			header('Location: expired.php', true, 302);
			exit();
		}
	} else {
		header('Location: expired.php', true, 302);
		exit();
	}
	ob_end_flush();