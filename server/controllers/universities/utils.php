<?php
	
	function getFileContent($filepath) {
		$currentFileData = file_get_contents($filepath);
		return $currentFileData;
	}

	function writeToFile($filepath, $data) {
		$currentFileData = file_get_contents($filepath);
		$currentFileData .= $data . PHP_EOL;
		file_put_contents($filepath, $currentFileData);
	}

	function writeToJsonFile($filepath, $dataObj) {
		$currentFileData = json_decode(file_get_contents($filepath));
		$currentFileData[] = $dataObj;
		file_put_contents($filepath, json_encode($currentFileData, JSON_PRETTY_PRINT));
	}

	function updateJsonFile($filepath, $dataObj, $updateId) {
		$currentFileData = json_decode(file_get_contents($filepath));
		$index = null;
		foreach ($currentFileData as $up) {
			if ($up->id === $updateId) {
				$index = $up->id - 1;
			} 
		}
		$newFileData = array_replace($currentFileData, [$index=>$dataObj]);
		file_put_contents($filepath, json_encode($newFileData, JSON_PRETTY_PRINT));
	}