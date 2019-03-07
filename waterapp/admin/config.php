<?php
ob_start();
ob_clean();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onlne132_waterapp";


// Create connection

$conn = mysqli_connect($servername, $username, $password, $dbname);

?>