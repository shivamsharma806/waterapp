<?php
include_once("config.php");
include_once("header.php");







?>

<div class="content-wrapper">
			<div class="container-fluid">

				<div class="row">
					<div class="col-md-12">

						<h2 class="page-title">Tickets</h2>

						<!-- Zero Configuration Table -->
						<div class="panel panel-default">
							<div class="panel-heading">New</div>
							<div class="panel-body">
								<table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
									<thead>
										<tr>	
											<th>Id</th>
<!-- 											<th>Image</th>																																																							 -->
											<th>Name</th>
											<th>Father Name</th>
											<th>City/District</th>
											<th>Phone</th>											
											<th>Email</th>											
											<th>Description</th>											
											<th>Assign</th>
										</tr>
									</thead>
									
									<tbody>
									<?php
									
									$sql = "SELECT * FROM ticket where state='1'";


									$result = mysqli_query($conn, $sql);

								    while($row = mysqli_fetch_assoc($result)) {
	 
										echo '<tr>';
										echo '<td>'.$row["id"].'</td>';
// 										echo '<td><img src="images/'.$row["image"].'" style="width:50px; height:50px;"/></td>';
										echo '<td>'.$row["complainant_name"].'</td>';
										echo '<td>'.$row["father_name"].'</td>';										
										echo '<td>'.$row["city"].'</td>';										
										echo '<td>'.$row["phone"].'</td>';																				
										echo '<td>'.$row["email"].'</td>';
										echo '<td>'.$row["description"].'</td>';
										echo '<td><a target="_blank" href="assignticket.php?id='.$row["id"].'">Assign</a></td></tr>';
										}
									?>

									</tbody>
								</table>

								
							</div>
						</div>


						<!-- Zero Configuration Table -->
						<div class="panel panel-default">
							<div class="panel-heading">Assigned</div>
							<div class="panel-body">
								<table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
									<thead>
										<tr>	
											<th>Id</th>
<!-- 											<th>Image</th>																																																							 -->
											<th>Name</th>
											<th>Father Name</th>
											<th>City/District</th>
											<th>Phone</th>											
											<th>Email</th>		
											<th>Engineer Name</th>											
											<th>Description</th>																																	
											<th>Mark Complete</th>
										</tr>
									</thead>
									
									<tbody>
									<?php
									
									$sql = "SELECT ticket.id,ticket.complainant_name,ticket.father_name,ticket.city,ticket.phone
									,ticket.email,user.name,ticket.description FROM ticket left join user on ticket.engineer_id = user.id where ticket.state='2' and user.type='2'";


									$result = mysqli_query($conn, $sql);

								    while($row = mysqli_fetch_assoc($result)) {
	 
										echo '<tr>';
										echo '<td>'.$row["id"].'</td>';
// 										echo '<td><img src="images/'.$row["image"].'" style="width:50px; height:50px;"/></td>';
										echo '<td>'.$row["complainant_name"].'</td>';
										echo '<td>'.$row["father_name"].'</td>';										
										echo '<td>'.$row["city"].'</td>';										
										echo '<td>'.$row["phone"].'</td>';																				
										echo '<td>'.$row["email"].'</td>';
										echo '<td>'.$row["name"].'</td>';										
										echo '<td>'.$row["description"].'</td>';										
										echo '<td><a href="mark_ticket_complete.php?id='.$row["id"].'">Mark</a></td></tr>';
										}
									?>

									</tbody>
								</table>

								
							</div>
						</div>

						</div>
					
					
					
					</div>

						




				<!-- Zero Configuration Table -->
						<div class="panel panel-default">
							<div class="panel-heading">Completed</div>
							<div class="panel-body">
								<table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
									<thead>
										<tr>	
											<th>Id</th>
<!-- 											<th>Image</th>																																																							 -->
											<th>Name</th>
											<th>Father Name</th>
											<th>City/District</th>
											<th>Phone</th>											
											<th>Email</th>											
											<th>Description</th>											
									
										</tr>
									</thead>
									
									<tbody>
									<?php
									
									$sql = "SELECT * FROM ticket where state='3'";


									$result = mysqli_query($conn, $sql);

								    while($row = mysqli_fetch_assoc($result)) {
	 
										echo '<tr>';
										echo '<td>'.$row["id"].'</td>';
// 										echo '<td><img src="images/'.$row["image"].'" style="width:50px; height:50px;"/></td>';
										echo '<td>'.$row["complainant_name"].'</td>';
										echo '<td>'.$row["father_name"].'</td>';										
										echo '<td>'.$row["city"].'</td>';										
										echo '<td>'.$row["phone"].'</td>';																				
										echo '<td>'.$row["email"].'</td>';
										echo '<td>'.$row["description"].'</td>';

										}
									?>

									</tbody>
								</table>

								
							</div>
						</div>

						</div>








			</div>
		</div>
	</div>
<?php
include_once("footer.php");
?>