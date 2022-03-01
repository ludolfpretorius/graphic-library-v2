<?php 
	require './controllers/images/requestsClass.php';

	function init($req) {
		$img = new Images();
		$allImgs = $img->fetchAll();

		if ($allImgs) {
			echo json_encode(['status' => 'Success: 200 (Fetched all images)', 'body' => $allImgs]);
		} else {
			echo json_encode(['status' => 'Error: 400 (Bad request)']);
		}
	}