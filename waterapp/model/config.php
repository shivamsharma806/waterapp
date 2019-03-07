<?php
ob_start();
ob_clean();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onln132_waterapp";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>