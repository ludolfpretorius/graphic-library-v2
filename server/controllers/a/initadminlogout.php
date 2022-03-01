<?php
	ob_start();
	setcookie('al-admin', '', time() - 3600, '/');
	header('Location: ../adminlogin.php'); 
	exit();
	ob_end_flush();