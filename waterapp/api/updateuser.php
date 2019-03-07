<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/User.php");

$id = $_GET['user_id'];
$name_ = $_GET['name'];
$phone = $_GET['phone'];
$email = $_GET['email'];


$sql = "UPDATE user set name='$name_',email='$email',phone='$phone'where id='$id'";


if ($result = mysqli_query($conn, $sql)) {
	
	echo json_encode(array("result"=>"true"));
       
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>