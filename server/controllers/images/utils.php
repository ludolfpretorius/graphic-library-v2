<?php
	function updateJsonFile($filepath, $dataObject, $id) {
		$currentFileData = json_decode(file_get_contents($filepath));
		$index = '';
		foreach ($currentFileData as $obj) {
			if ($obj->id === $id) {
				$index = $id;
			} 
		}
		$currentFileData[$index] = $dataObject;
		file_put_contents($filepath, json_encode($currentFileData, JSON_PRETTY_PRINT));
	}

	function writeToJsonFile($filepath, $dataObject) {
		$currentFileData = json_decode(file_get_contents($filepath));
		$currentFileData[] = $dataObject;
		$wroteSuccessfully = file_put_contents($filepath, json_encode($currentFileData, JSON_PRETTY_PRINT));
		return $wroteSuccessfully;
	}