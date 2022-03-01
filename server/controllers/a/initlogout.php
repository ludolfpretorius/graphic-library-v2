<?php
	ob_start();
	setcookie('al-user', '', time() - 3600, '/');
	header('Location: ../login.php'); 
	exit();
	ob_end_flush();