<?php
	require_once('conn.php');

	$nickname= trim($_POST['nickname']);
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);

	if (empty($nickname) || empty($username) || empty($password)) {
		header('Location: ./register.php?errCode=1');
		die('欄位不能為空白');	
	}

	// check if username exists
	$selectSQL = sprintf( 
		"SELECT * FROM users WHERE username='%s'",
		$username
	);

	$mysqlGetUsers = $conn->query($selectSQL);
	
	while($row = $mysqlGetUsers->fetch_assoc()){
		header('Location: ./register.php?errCode=2');
		die('使用者名稱已被註冊');
	}

	// add user
	$addSQL = sprintf(
		"INSERT INTO users (nickname, username, password) 
		VALUES ('%s', '%s', '%s')",
		$nickname,
		$username,
		$password
	);

	$result = $conn->query($addSQL);
	if (!$result) {
		die('Failed to add user<br>' . $conn->error);
	}	
	echo 'Successfully add user';
	header('Location: ./index.php');
?>
