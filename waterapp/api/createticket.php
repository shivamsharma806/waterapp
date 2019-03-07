<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/Ticket.php");


$name = $_GET['name'];
$father_name = $_GET['father_name'];
$city = $_GET['city'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$description = $_GET['description'];
$image = $_GET['image'];
$user_id = $_GET['user_id'];

// $name = 'zzz';
// $father_name = 'zzz';
// $city = 'zzz';
// $phone = 'zzz';
// $email = 'zzz';
// $description = 'zzz';
// $image = 'zzz';
// $user_id = '0';


$sql = "INSERT INTO ticket(complainant_name,father_name,city,phone,email,description,image,state,user_id)
VALUES ('$name','$father_name','$city','$phone','$email','$description','$image','1','$user_id')";


if (mysqli_query($conn, $sql) === TRUE) {
	echo json_encode(array("result"=>"true"));
 
 
 
     
    
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>