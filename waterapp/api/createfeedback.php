<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/Ticket.php");


$complaint_number = $_GET['complaint_number'];
$star = $_GET['star'];
$feedback = $_GET['feedback'];
$user_id = $_GET['user_id'];


$sql = "INSERT INTO feedback(complaint_number,star,feedback,user_id)
VALUES ('$complaint_number','$star','$feedback','$user_id')";


if (mysqli_query($conn, $sql) === TRUE) {
	echo json_encode(array("result"=>"true"));   
    
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>