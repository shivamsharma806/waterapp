<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/Ticket.php");


$ticket_id = $_GET['ticket_id'];
$remarks = $_GET['mobile'];
// $engineer_id = $_GET['engineer_id'];
$Tickets = array();

$sql = "SELECT ticket.id,ticket.complainant_name,ticket.father_name,ticket.city,ticket.phone
,ticket.email,ticket.description,ticket.image,ticket.state,ticket.engineer_id,user.name,ticket.user_id
,ticket.datetime FROM ticket left join user on ticket.engineer_id = user.id  where ticket.id='$ticket_id'";


$complaintResult = mysqli_query($conn, $sql);

$i=0;
while($ticketObj = mysqli_fetch_assoc($complaintResult)) {

	$ticket = new Ticket();
    // output data of each row
	$ticket->id = $ticketObj['id'];
	$ticket->name = $ticketObj['complainant_name'];
	$ticket->father_name = $ticketObj['father_name'];
	$ticket->city = $ticketObj['city'];
	$ticket->phone = $ticketObj['phone'];
	$ticket->email = $ticketObj['email'];
	$ticket->description = $ticketObj['description'];
	$ticket->image = $ticketObj['image'];
	$ticket->state = $ticketObj['state'];
	$ticket->engineer_id = $ticketObj['engineer_id'];
// 	if($user_type== '1')
		
// 	else
// 		$ticket->engineer_name = '';
			
	$ticket->user_id = $ticketObj['user_id'];
	$ticket->datetime = $ticketObj['datetime'];
	
	$Tickets[$i] = $ticket;
	$i++;
	
		
}

echo json_encode(array("result"=>"true","tickets"=>$Tickets));
// echo json_encode($newTickets);
$conn->close();

?>