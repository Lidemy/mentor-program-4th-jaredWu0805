<?php
	require_once('conn.php');
	function getNicknameByUsername($username) {
		global $conn;
		$getNicknameSQL = sprintf("
			SELECT nickname from users WHERE username='%s'",
			$username
		);

		$nicknameResult = $conn->query($getNicknameSQL);
		if ($row = $nicknameResult->fetch_assoc()) {
			$nickname = $row['nickname'];
		}
		return $nickname;
	}

?>