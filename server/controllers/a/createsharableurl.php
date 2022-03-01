<?php
	require('./utilities.php');
	$output = '';
	if (isset($_POST['tokenData'])) {
		$reqBody = json_decode($_POST['tokenData']);
		$timeframe = filter_var($reqBody->timeframe, FILTER_SANITIZE_STRING);
		$url = filter_var($reqBody->url, FILTER_SANITIZE_URL);

		$length = random_bytes('6');
		$token = bin2hex($length);
		$filepath = '../db/tokens.json';

		$obj = new stdClass();
		$obj->token = $token;
		$t = strpos($url, 'up=') !== false || strpos($url, 'search=') !== false ? '&t=' : '?t=';
		$obj->url = $url.$t.$token;
		if ($timeframe === '2') {
			$obj->expires = time() + (86400 * 7);
		} elseif ($timeframe === '3') {
			$obj->expires = time() + (86400 * 30);
		} else {
			$obj->expires = time() + (86400 * 1);
		}

		writeToJsonFile($filepath, $obj);
		$output = $obj->url;
	}
	echo json_encode($output);