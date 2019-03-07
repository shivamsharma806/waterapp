<?php
session_start();
session_unset($_SESSION['isadmin']);
session_destroy();
header('Location: login.php');
?>