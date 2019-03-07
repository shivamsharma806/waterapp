<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/Ticket.php");


$suggestion = $_GET['suggestion'];
$user_id = $_GET['user_id'];


$sql = "INSERT INTO suggestion(suggestion,user_id)
VALUES ('$suggestion','$user_id')";


if (mysqli_query($conn, $sql) === TRUE) {
	echo json_encode(array("result"=>"true"));   
    
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>