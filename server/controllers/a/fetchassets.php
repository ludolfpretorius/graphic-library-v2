<?php	
	$files = scandir('../upload');

	$output = [];
	if ($files) {
		foreach ($files as $file) {
			$hidden = substr($file, 0, 1 ) === ".";
			if ('.' !=  $file && '..' != $file && !$hidden) {
				$output[] = preg_replace('/.svg/', '', $file);
			}
		}
	}
	echo json_encode($output);
