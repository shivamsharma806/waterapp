<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/User.php");


$ticket_id = $_GET['ticket_id'];
$remarks = $_GET['remarks'];

$sql = "update ticket set state='3' , remarks = '$remarks' where id='$ticket_id'";


if ($result = mysqli_query($conn, $sql)) {
	
	echo json_encode(array("result"=>"true"));
   
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>