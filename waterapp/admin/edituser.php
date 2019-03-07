<?php
include_once("config.php");
include_once("header.php");


$pageTitle = 'User';
	
$info_label = "";
if(isset($_POST['updateUser_button']))
{
	$id = $_POST['id'];	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$password = $_POST['password'];

	
	
	
		$sql = "UPDATE user set name='$name',email='$email',phone='$phone',password='$password' where id='$id'";

		if (mysqli_query($conn,$sql) === TRUE) {
			$info_label =  $pageTitle." Update";
		} else {
			$info_label =  "Unable to Update ".$pageTitle." at moment";
		}
}
	
if(isset($_GET['id']))
{
	$id = $_GET['id'];

	$sql = "SELECT * FROM user where id='$id'";

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
								<div class="panel panel-default">
								<?php echo $info_label; ?>
									<div class="panel-heading">Update <?php echo $pageTitle; ?></div>
									<div class="panel-body">
										<form method="POST" class="form-horizontal" enctype="multipart/form-data">


											<div class="form-group">
												<label class="col-sm-2 control-label">Name</label>
												<div class="col-sm-10">
													<input type="hidden" class="form-control" name="id" value="<?php echo $row['id']; ?>"/>	
													<input type="text" class="form-control" name="name" value="<?php echo $row['name']; ?>" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>


											<div class="form-group">
												<label class="col-sm-2 control-label">Email</label>
												<div class="col-sm-10">
													<input type="email" class="form-control" name="email" value="<?php echo $row['email']; ?>" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>					
											
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Phone</label>
												<div class="col-sm-10">
													<input type="text" class="form-control" name="phone" value="<?php echo $row['phone']; ?>" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>																			
											
											<div class="form-group">
												<label class="col-sm-2 control-label">Password</label>
												<div class="col-sm-10">
													<input type="password" class="form-control" name="password" value="<?php echo $row['password']; ?>" required/>
												</div>
											</div>
											<div class="hr-dashed"></div>	
											
																								
											
											<div class="hr-dashed"></div>
											<div class="form-group">
												<label class="col-sm-2 control-label"></label>
												<div class="col-sm-10">
													<button class="btn btn-primary" type="submit" name="updateUser_button">Update</button>
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