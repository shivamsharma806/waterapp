<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/User.php");


$name = $_GET['name'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$password = $_GET['password'];
$type_ = $_GET['type'];

// $name = 'zzz';
// $father_name = 'zzz';
// $city = 'zzz';
// $phone = 'zzz';
// $email = 'zzz';
// $description = 'zzz';
// $image = 'zzz';
// $user_id = '0';


$sql = "INSERT INTO user(name,phone,email,password,is_active,type)
VALUES ('$name','$phone','$email','$password','1','$type_')";


if ($result = mysqli_query($conn, $sql)) {

// 	$rowcount=mysqli_num_rows($result);
// 
// 	if($rowcount > 0)

	
	echo json_encode(array("result"=>"true"));
 
 
 
     
    
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>