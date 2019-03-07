<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/User.php");



$email = $_GET['email'];
$password = $_GET['password'];



$sql = "SELECT * FROM user where email='$email' and password='$password'";


if ($result = mysqli_query($conn, $sql)) {

	$rowcount=mysqli_num_rows($result);

	if($rowcount > 0)
	{
		$userObj = mysqli_fetch_assoc($result);
		$user = new User();
		$user->id = $userObj['id'];
		$user->name = $userObj['name'];		
		$user->email = $userObj['email'];
		$user->phone = $userObj['phone'];
		$user->type = $userObj['type'];
		$user->datetime = $userObj['datetime'];			
		
		
		
		echo json_encode(array("result"=>"true","user"=>$user));
 
	}
	else
	{
		echo json_encode(array("result"=>"false"));
	}
 
     
    
} else {
    echo json_encode(array("result"=>"false","message"=>mysqli_error($conn)));
}

$conn->close();
?>