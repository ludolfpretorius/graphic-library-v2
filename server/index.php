<?php 
	require './utils.php';
	require './cors.php';
	cors();

	$req = getRequestData();
	$token = getBearerToken();

	if (!$req || $token !== 'c8ce9fe80d96063b79743a61cd68ed7ebf95') {
		exit('Error: 403 (Tsek!)');
	}

	$path = explode('/', $req['path']);
	$endpoint = 'controllers/'.$path[0].'/';
	$method = $path[1];
	
	require './'.$endpoint.$method.'.php';

	unset($req['req']);
	init($req);

	exit();