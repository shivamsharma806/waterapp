<?php
include_once("config.php");
include_once("header.php");


if(isset($_POST['updateprofile_button']))
{
	$username = $_POST['username'];
	$password = $_POST['password'];	


	$sql1 = "UPDATE admin set username='$username', password='$password' where id ='1'";

	if (mysqli_query($conn,$sql1) === TRUE) {

	} else {
		echo "Unable to update profile at moment";
	}

}


	$sql = "SELECT * FROM admin where id='1'";

	$result = mysqli_query($conn, $sql);

	$row = mysqli_fetch_assoc($result);


?>

<div class="content-wrapper">
			<div class="container-fluid">

				<div class="row">


					
					
					
					</div>
					<div class="row">
							<div class="col-md-12">
								<div class="panel panel-default">
									<div class="panel-heading">Update</div>
									<div class="panel-body">
										<form method="POST" class="form-horizontal">
											<div class="form-group">
												<label class="col-sm-2 control-label">User Name</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="username" value="<?php echo $row['username'];?>">													
												</div>
											</div>
											<div class="hr-dashed"></div>
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Password</label>
												<div class="col-sm-10">
													<input type="password" class="form-control" name="password" value="<?php echo $row['password'];?>">													
												</div>
											</div>
											<div class="hr-dashed"></div>



											<div class="hr-dashed"></div>
											<div class="form-group">
												<label class="col-sm-2 control-label"></label>
												<div class="col-sm-10">
													<button class="btn btn-primary" type="submit" name="updateprofile_button">UPDATE</button>
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