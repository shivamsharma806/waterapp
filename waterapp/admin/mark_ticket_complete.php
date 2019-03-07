<?php
include_once("config.php");
if(isset($_GET['id']))
{
	$id = $_GET['id'];

	$sql = "update ticket set state='3' where id='$id'";

	if( mysqli_query($conn, $sql) === TRUE)
	{
		header("Location: index.php");
		die();
	}
	else
	{
		include_once('header.php');
		echo "Unable to mark ticket as complete at moment";
		include_once('footer.php');
	}
}

?>
