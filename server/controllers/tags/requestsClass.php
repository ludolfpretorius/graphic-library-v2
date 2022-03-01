<?php
	class Tags {
		function fetchAll() {
			$data = file_get_contents('./db/tags.json');
			return json_decode($data);
		}
	}