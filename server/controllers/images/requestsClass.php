<?php
	// require './controllers/images/utils.php';

	class Images {
		function fetchAll() {
			$data = file_get_contents('./db/images.json');
			return json_decode($data);
		}
	}