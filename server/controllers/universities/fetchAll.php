<?php 
	require './controllers/universities/requestsClass.php';

	function init($req) {
		$unis = new Universities();
		$allUnis = $unis->fetchAll();

		if ($allUnis) {
			echo json_encode(['status' => 'Success: 200 (Fetched all universities)', 'body' => $allUnis]);
		} else {
			echo json_encode(['status' => 'Error: 400 (Bad request)']);
		}
	}