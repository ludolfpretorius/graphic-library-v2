<?php
	require './controllers/universities/utils.php';

	class Universities {
		function fetchAll() {
			$data = file_get_contents('./db/universities.json');
			return json_decode($data);
		}
	}