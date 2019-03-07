<?php
include_once("config.php");
if(isset($_GET['id']))
{
	$id = $_GET['id'];

	$sql = "update user set is_active='0' where id='$id'";

	if( mysqli_query($conn, $sql) === TRUE)
	{
		header("Location: engineers.php");
		die();
	}
	else
	{
		include_once('header.php');
		echo "Unable to delete engineer at moment";
		include_once('footer.php');
	}
}

?>
