<?php 
	require './controllers/tags/requestsClass.php';

	function init($req) {
		$tags = new Tags();
		$allTags = $tags->fetchAll();
		if ($allTags) {
			echo json_encode(['status' => 'Success: 200 (Fetched all tags)', 'body' => $allTags]);
		} else {
			echo json_encode(['status' => 'Error: 400 (Bad request)']);
		}
	}