<?php
include_once("config.php");
include_once("header.php");




$info_label = "";
if(isset($_POST['addEngineer_button']))
{
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$password = $_POST['password'];
	$sql = "";
	$sql = "INSERT INTO user(name,email,phone,password,is_active,type)
		VALUES ('$name','$email','$phone','$password','1','2')";

		if (mysqli_query($conn,$sql) === TRUE) {
			$info_label = $pageTitle." Added";
		} else {
			$info_label = "Unable to Add Engineer at moment";
		}
}



?>

<div class="content-wrapper">
			<div class="container-fluid">

				<div class="row">
					<div class="col-md-12">

						<h2 class="page-title">Engineers</h2>

						<!-- Zero Configuration Table -->
						<div class="panel panel-default">
						<?php echo $info_label; ?>
						
							<div class="panel-heading">Manage</div>
							<div class="panel-body">
								<table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
									<thead>
										<tr>	
											<th>Id</th>
											<th>Name</th>
											<th>Email</th>
											<th>Phone</th>
								
											<th>Edit</th>
											<th>Delete</th>
										</tr>
									</thead>
									
									<tbody>
									<?php
									
									$sql = "SELECT * FROM user where type='2' and is_active='1'";


									$result = mysqli_query($conn, $sql);

								    while($row = mysqli_fetch_assoc($result)) {
	 
										echo '<tr>
										<td>'.$row["id"].'</td>';
										echo '<td>'.$row["name"].'</td>';
										echo '<td>'.$row["email"].'</td>';
										echo '<td>'.$row["phone"].'</td>';

										echo '<td><a target="_blank" href="editengineer.php?id='.$row["id"].'">Edit</a></td>';												
										echo '<td><a href="deleteengineer.php?id='.$row["id"].'">Delete</a></td></tr>';
										}
									?>

									</tbody>
								</table>

								
							</div>
						</div>

						</div>

					
					
					
					</div>
					<div class="row">
							<div class="col-md-12">
								<div class="panel panel-default">
									<div class="panel-heading">Add Engineer</div>
									<div class="panel-body">
										<form method="POST" class="form-horizontal" enctype="multipart/form-data">


											<div class="form-group">
												<label class="col-sm-2 control-label">Name</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="name" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>								
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Email</label>
												<div class="col-sm-10">
													<input type="email" class="form-control" name="email" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>	
											
																								
											<div class="form-group">
												<label class="col-sm-2 control-label">Phone</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="phone" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Password</label>
												<div class="col-sm-10">
													<input type="password" class="form-control" name="password" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>
											
											


											<div class="hr-dashed"></div>
											<div class="form-group">
												<label class="col-sm-2 control-label"></label>
												<div class="col-sm-10">
													<button class="btn btn-primary" type="submit" name="addEngineer_button">Add</button>	
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