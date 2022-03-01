<?php
	ob_start();

	$tokenFilepath = '../db/tokens.json';
	$tokenEntries = json_decode(file_get_contents($tokenFilepath));
	$expirehotlinkObj = isset($_POST["expirehotlink"]) ? json_decode($_POST["expirehotlink"]) : null;
	$token = $expirehotlinkObj->token;
	$url = $expirehotlinkObj->url;

	if (count($tokenEntries) && $token !== null) {
		foreach ($tokenEntries as $index=>$entry) {
			if ($entry->token === $token && $entry->url === $url) {
				array_splice($tokenEntries, $index, 1);
				file_put_contents($tokenFilepath, json_encode($tokenEntries, JSON_PRETTY_PRINT));
			}
		}
	}

	ob_end_flush();