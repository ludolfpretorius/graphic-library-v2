<?php
	require('./utilities.php');
	$files = scandir('../upload');
	$output = [];

	if (isset($_POST['filters']) && $files) {
		$filters = json_decode($_POST['filters']);
		foreach ($files as $file) {
			$hidden = substr($file, 0, 1) === ".";
			if ('.' !=  $file && '..' != $file && !$hidden) {
				$up = $filters->up ? $filters->up : '';
				$course = $filters->course ? $filters->course : '';
				$search = $filters->search ? $filters->search : '';
				if (preg_match("/^$up/", $file) && preg_match("/$course/", $file) && preg_match("/$search/i", $file)) {
					$output[] = preg_replace('/.svg/', '', $file);
				}
			}
		}
	}
		
	echo json_encode($output);
