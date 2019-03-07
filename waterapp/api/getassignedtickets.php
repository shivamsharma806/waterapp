<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/Ticket.php");

$engineer_id = $_GET['engineer_id'];

$newTicket = array();

	$newTicketSql = "SELECT * FROM ticket where ticket.engineer_id='$engineer_id'";

$newTicketResult = mysqli_query($conn, $newTicketSql);

$i=0;
while($ticketObj = mysqli_fetch_assoc($newTicketResult)) {

	$ticket = new Ticket();
    // output data of each row
	$ticket->id = $ticketObj['id'];
	$ticket->description = $ticketObj['description'];
	$ticket->phone = $ticketObj['phone'];
	$ticket->email = $ticketObj['email'];
	
	$newTicket = $ticket;
	$i++;
	
		
}

echo json_encode(array("result"=>"true","assignedTickets"=>$newTicket));
// echo json_encode($newTickets);
$conn->close();

?>