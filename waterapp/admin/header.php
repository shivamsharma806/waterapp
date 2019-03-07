<?php
	session_start();
	if(!isset($_SESSION['isadmin']))
	{

			header('Location: logout.php');
	}


?>


<!doctype html>
<html lang="en" class="no-js">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="theme-color" content="#3e454c">
	
	<title>Water App | Admin</title>

	<!-- Font awesome -->
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<!-- Sandstone Bootstrap CSS -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<!-- Bootstrap Datatables -->
	<link rel="stylesheet" href="css/dataTables.bootstrap.min.css">
	<!-- Bootstrap social button library -->
	<link rel="stylesheet" href="css/bootstrap-social.css">
	<!-- Bootstrap select -->
	<link rel="stylesheet" href="css/bootstrap-select.css">
	<!-- Bootstrap file input -->
	<link rel="stylesheet" href="css/fileinput.min.css">
	<!-- Awesome Bootstrap checkbox -->
	<link rel="stylesheet" href="css/awesome-bootstrap-checkbox.css">
	<!-- Admin Stye -->
	<link rel="stylesheet" href="css/style.css">

	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
	<div class="brand clearfix">
		<a href="index.php" class="logo"><img src="img/logo.jpg" class="img-responsive" alt=""></a>
		<span class="menu-btn"><i class="fa fa-bars"></i></span>
		<ul class="ts-profile-nav">

			<li class="ts-account">
<!-- 				<a href="#"><img src="img/ts-avatar.jpg" class="ts-avatar hidden-side" alt=""> Account <i class="fa fa-angle-down hidden-side"></i></a> -->
				<a href="#"> Account <i class="fa fa-angle-down hidden-side"></i></a>
				<ul>
					<li><a href="myaccount.php">My Account</a></li>

					<li><a href="logout.php">Logout</a></li>
				</ul>
			</li>
		</ul>
	</div>

	<div class="ts-main-content">
		<nav class="ts-sidebar">
			<ul class="ts-sidebar-menu">
				<li class="ts-label">Main</li>
				<li><a href="index.php"><i class="fa fa-dashboard"></i>Tickets</a></li>
				<li><a href="engineers.php"><i class="fa fa-user"></i>Engineers</a></li>					
				<li><a href="users.php"><i class="fa fa-user"></i>Users</a></li>

				<li><a href="logout.php"><i class="fa fa-sign-out"></i>Logout</a></li>

			</ul>
		</nav>