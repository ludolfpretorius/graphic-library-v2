<?php
	//error_reporting(E_ALL);
	date_default_timezone_set("Africa/Johannesburg");

	

	function runBlock($removeCookie, $redirect) {
		setcookie($removeCookie, '', time() - 3600, '/');
		header('Location: '.$redirect, true, 302);
		exit();
	}

	function blockUser($log, $removeCookie, $redirect) {
		$query = json_decode(file_get_contents('http://ip-api.com/json/' . $_SERVER['REMOTE_ADDR']));
		if ($query && $query->status == 'success') {
			$user = date('d-m-Y H:i:s').' - '.$_SERVER['REMOTE_ADDR'].' - '.$_SERVER['HTTP_USER_AGENT'].' - '.$query->country.', '.$query->regionName.', '.$query->city.', '.$query->zip.', '.$query->isp.', '.$query->org.', '.$query->as;
			writeToFile($log, $user);
			runBlock($removeCookie, $redirect);
		} else {
			$user = date('d-m-Y H:i:s').' - '.$_SERVER['REMOTE_ADDR'].' - '.$_SERVER['HTTP_USER_AGENT'];
			writeToFile($log, $user);
			runBlock($removeCookie, $redirect);
		}
	}

	function logUser($log) {
		$query = json_decode(file_get_contents('http://ip-api.com/json/' . $_SERVER['REMOTE_ADDR']));
		if ($query && $query->status == 'success') {
			$user = date('d-m-Y H:i:s').' - '.$_SERVER['REMOTE_ADDR'].' - '.$_SERVER['HTTP_USER_AGENT'].' - '.$query->country.', '.$query->regionName.', '.$query->city.', '.$query->zip.', '.$query->isp.', '.$query->org.', '.$query->as;
			writeToFile($log, $user);
		} else {
			$user = date('d-m-Y H:i:s').' - '.$_SERVER['REMOTE_ADDR'].' - '.$_SERVER['HTTP_USER_AGENT'];
			writeToFile($log, $user);
		}
	}

	function logGuest($log, $url, $token) {
		$query = json_decode(file_get_contents('http://ip-api.com/json/' . $_SERVER['REMOTE_ADDR']));
		if ($query && $query->status == 'success') {
			$user = date('d-m-Y H:i:s').' - '.$url.', '.$token.' - '.$_SERVER['REMOTE_ADDR'].' - '.$_SERVER['HTTP_USER_AGENT'].' - '.$query->country.', '.$query->regionName.', '.$query->city.', '.$query->zip.', '.$query->isp.', '.$query->org.', '.$query->as;
			writeToFile($log, $user);
		} else {
			$user = date('d-m-Y H:i:s').' - '.$url.', '.$token.' - '.$_SERVER['REMOTE_ADDR'].' - '.$_SERVER['HTTP_USER_AGENT'];
			writeToFile($log, $user);
		}
	}

	function sanitizeObject($data) {
	    foreach ($data as &$value) {
	        if (is_scalar($value)) {
	            $value = filter_var($value, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
	            continue;
	        }
	        $value = sanitize($value);
	    }
	    return $data;
	}