<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/User.php");


$ticket_id = $_GET['ticket_id'];
$new_engineer_id = $_GET['new_engineer_id'];
// $engineer_id = $_GET['engineer_id'];


$sql = "update ticket set engineer_id='$new_engineer_id', state='2' where id='$ticket_id'";


if ($result = mysqli_query($conn, $sql)) {


	
	echo json_encode(array("result"=>"true"));
 
 
 
     
    
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>