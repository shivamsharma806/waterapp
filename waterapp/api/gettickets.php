<?php
header('Access-Control-Allow-Origin: *');  
include_once("../model/config.php");
include_once("../model/Ticket.php");

$user_id = $_GET['user_id'];
// $user_type = $_GET['user_type'];

// $id = '8';
$newTickets = array();
$processingTickets = array();
$completedTickets = array();

// $newTicketSql = "";
// 
// if($user_type == '1')
// {
	$newTicketSql = "SELECT ticket.id,ticket.complainant_name,ticket.father_name,ticket.city,ticket.phone
	,ticket.email,ticket.description,ticket.image,ticket.state,ticket.engineer_id,user.name,ticket.user_id
	,ticket.datetime FROM ticket left join user on ticket.engineer_id = user.id  where ticket.state='1' and (user_id='$user_id' or engineer_id='$user_id')";
// }
// else
// {
// 	$newTicketSql = "SELECT * FROM ticket where ticket.state='1' and engineer_id='$user_id'";
// }
$newTicketResult = mysqli_query($conn, $newTicketSql);

$i=0;
while($ticketObj = mysqli_fetch_assoc($newTicketResult)) {

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
		$ticket->engineer_name = $ticketObj['name'];
// 	else
// 		$ticket->engineer_name = '';
			
	$ticket->user_id = $ticketObj['user_id'];
	$ticket->datetime = $ticketObj['datetime'];
	
	$newTickets[$i] = $ticket;
	$i++;
	
		
}

// $processingTicketSql = "";
// 
// $processingTicketSql = "";
// if($user_type == '1')
// {
	$processingTicketSql = "SELECT ticket.id,ticket.complainant_name,ticket.father_name,ticket.city,ticket.phone
	,ticket.email,ticket.description,ticket.image,ticket.state,ticket.engineer_id,user.name,ticket.user_id
	,ticket.datetime FROM ticket inner join user on ticket.engineer_id = user.id  where ticket.state='2' and (user_id='$user_id' or engineer_id='$user_id')";
// }
// else
// {
// 	$processingTicketSql = "SELECT * FROM ticket where ticket.state='2' and engineer_id='$user_id'";
// }




$processingTicketResult = mysqli_query($conn, $processingTicketSql);

$i=0;
while($ticketObj = mysqli_fetch_assoc($processingTicketResult)) {

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
		$ticket->engineer_name = $ticketObj['name'];
// 	else
// 		$ticket->engineer_name = '';

	$ticket->user_id = $ticketObj['user_id'];
	$ticket->datetime = $ticketObj['datetime'];
	
	$processingTickets[$i] = $ticket;
	$i++;
	
		
}
// 
// $completedTicketSql = "";
// if($user_type == '1')
// {
	$completedTicketSql = "SELECT ticket.id,ticket.complainant_name,ticket.father_name,ticket.city,ticket.phone
	,ticket.email,ticket.description,ticket.image,ticket.state,ticket.engineer_id,user.name,ticket.user_id
	,ticket.datetime FROM ticket inner join user on ticket.engineer_id = user.id  where ticket.state='3' and (user_id='$user_id' or engineer_id='$user_id')";
// }
// else
// {
// 	$completedTicketSql = "SELECT * FROM ticket where ticket.state='3' and engineer_id='$user_id'";
// }


$completedTicketResult = mysqli_query($conn, $completedTicketSql);

$i=0;
while($ticketObj = mysqli_fetch_assoc($completedTicketResult)) {

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
		$ticket->engineer_name = $ticketObj['name'];
// 	else
// 		$ticket->engineer_name = '';

	$ticket->user_id = $ticketObj['user_id'];
	$ticket->datetime = $ticketObj['datetime'];
	
	$completedTickets[$i] = $ticket;
	$i++;
	
		
}

echo json_encode(array("result"=>"true","newtickets"=>$newTickets,"processingtickets"=>$processingTickets,"completedtickets"=>$completedTickets));
// echo json_encode($newTickets);
$conn->close();

?>