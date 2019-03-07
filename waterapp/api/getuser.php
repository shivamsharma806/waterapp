<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/User.php");

$user_id = $_GET['user_id'];

$newUser = array();

	$newUserSql = "SELECT * FROM user where user.id='$user_id'";

$newUserResult = mysqli_query($conn, $newUserSql);

$i=0;
while($userObj = mysqli_fetch_assoc($newUserResult)) {

	$user = new User();
    // output data of each row
	$user->id = $userObj['id'];
	$user->name = $userObj['name'];
	$user->phone = $userObj['phone'];
	$user->email = $userObj['email'];
	
	$newUser = $user;
	$i++;
	
		
}

echo json_encode(array("result"=>"true","newUser"=>$newUser));
// echo json_encode($newTickets);
$conn->close();

?>