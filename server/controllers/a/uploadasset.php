
<?php	
	$folder_name = '../upload/';
	$files = scandir('../upload');

	if (!empty($_FILES)) {
		$temp_file = $_FILES['file']['tmp_name'];
		$filename = $_POST['tags'].'.svg';
		$filenameNoExt = basename($filename, '.svg');
		if ($files) {
			$arr = [];
			foreach ($files as $file) {
				if (preg_match("/{$_POST['tags']}/i", basename($file))) {
					$arr[] = $file;
					$filename = $filenameNoExt.'-'.(count($arr)+1).'.svg';
				}
				
			}
		}
		$location = $folder_name.$filename;
		move_uploaded_file($temp_file, $location);
		
		$newFiles = scandir('../upload');
		$output = [];
		if ($newFiles) {
			foreach ($newFiles as $file) {
				$hidden = substr($file, 0, 1 ) === ".";
				if ('.' !=  $file && '..' != $file && !$hidden) {
					$output[] = preg_replace('/.svg/', '', $file);
				}
			}
		}
		echo json_encode($output);
	}



