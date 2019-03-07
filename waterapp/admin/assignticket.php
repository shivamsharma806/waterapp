<?php
include_once("config.php");
include_once("header.php");



	
$info_label = "";
if(isset($_POST['assignTicket_button']))
{
	$ticket_id = $_POST['ticket_id'];	
	$engineer_id = $_POST['engineer_id'];

	
	

		$sql = "UPDATE ticket set engineer_id='$engineer_id',state='2' where id='$ticket_id'";

		if (mysqli_query($conn,$sql) === TRUE) {
			$info_label = "Assigned ticket.";
		} else {
			$info_label = "Unable to assign ticket at moment";
		}
}
	
if(isset($_GET['id']))
{
	$id = $_GET['id'];

	$sql = "SELECT * FROM ticket where id='$id'";

	$result = mysqli_query($conn, $sql);

	$row = mysqli_fetch_assoc($result);
}


?>

<div class="content-wrapper">
			<div class="container-fluid">

				<div class="row">


					
					
					
					</div>
					<div class="row">
							<div class="col-md-12">
								<?php echo $info_label; ?>
								<div class="panel panel-default">
									<div class="panel-heading">Assign Ticket</div>
									<div class="panel-body">
										<form method="POST" class="form-horizontal" enctype="multipart/form-data">


											<div class="form-group">
												<label class="col-sm-2 control-label">Complainant name</label>
												<div class="col-sm-10">
													<input type="hidden" class="form-control" name="ticket_id" value="<?php echo $row['id']; ?>" />
													<input type="text" class="form-control" name="complainant_name" value="<?php echo $row['complainant_name']; ?>" disabled/>
												</div>
											</div>
											<div class="hr-dashed"></div>


											<div class="form-group">
												<label class="col-sm-2 control-label">Father Name</label>
												<div class="col-sm-10">
													<input type="email" class="form-control" name="father_name" value="<?php echo $row['father_name']; ?>" disabled/>
												</div>
											</div>
											<div class="hr-dashed"></div>					
											
											<div class="form-group">
												<label class="col-sm-2 control-label">City</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="city" value="<?php echo $row['city']; ?>" disabled/>
												</div>
											</div>
											<div class="hr-dashed"></div>		
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Phone</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="phone" value="<?php echo $row['phone']; ?>" disabled/>
												</div>
											</div>
											<div class="hr-dashed"></div>																								
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Email</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="email" value="<?php echo $row['email']; ?>" disabled/>
												</div>
											</div>
											<div class="hr-dashed"></div>																			
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Description</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="description" value="<?php echo $row['description']; ?>" disabled/>
												</div>
											</div>
											<div class="hr-dashed"></div>		


											<div class="form-group">
												<label class="col-sm-2 control-label">Select Engineer</label>
												<div class="col-sm-10">
													<select class="form-control" name="engineer_id">
													<?php
														$engineerSql = "SELECT * FROM user where type='2' and is_active = '1'";

														$engineerResult = mysqli_query($conn, $engineerSql);

													    while($engineerRow = mysqli_fetch_assoc($engineerResult)) {
													    
													    	echo '<option value="'.$engineerRow["id"].'">'.$engineerRow["id"].' - '.$engineerRow["name"].'</option>';
													    }

													?>
													
													
													
													</select>
												</div>
											</div>
											<div class="hr-dashed"></div>																										
											
											
											<div class="hr-dashed"></div>
											<div class="form-group">
												<label class="col-sm-2 control-label"></label>
												<div class="col-sm-10">
													<button class="btn btn-primary" type="submit" name="assignTicket_button">Assign</button>
												</div>
											</div>

													

										</form>

									</div>
								</div>
							</div>
							</div>
						
				</div>


			</div>
		</div>
	</div>
<?php
include_once("footer.php");
?>