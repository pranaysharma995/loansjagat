<template>
    <div>
<html lang="en" class="no-js">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' rel='stylesheet' type='text/css'>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="@/assets/css/style.css"> <!-- Resource style -->
<link rel="stylesheet" href="@/assets/css/page.css">

<title>Dashboard | Loansjagat</title>

</head>
<body>

	<div class="login_main">
		<img src="@/assets/img/logo-black.png" class="login_logo">
		<div class="login_box">
				  <!-- <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button> -->
			<div class="login_box_top">
				<h3>User Login!</h3>
				<h5>Sign in with Mobile Number</h5>
			</div>
			<div class="login_box_mobile" v-show="otp_frm">
				<label>OTP</label>
				<input type="text" v-model="otp" class="form-control" placeholder="Please Enter OTP">
				<br>
				<input type="button" class="btn" @click="verifyOTP()" value="Enter OTP">
			</div>
			<div class="login_box_mobile" v-show="login_frm">
				<label>Mobile Number</label>
				<input type="text" v-model="mobile" class="form-control" placeholder="You will get the OTP on this number">
				<br>
				<input type="button" class="btn" @click="getLogin()" value="Send OTP">
			</div>
			<!-- <div class="login_box_or">
				<p>or</p>
			</div>
			<div class="login_goglefb">

				<ul>
					<li class="logingoogle-list-item">
						<button>
							<span class="logingoogleicon">
								<img class="" alt="" src="img/google.svg">
							</span>

							<span class="logingoogletxt">Login with Google</span>
						</button>
					</li>
					<li class="loginfb-list-item">
						<button>
							<span class="loginfbicon">
								<i class="fa fa-facebook"></i>
							</span>
							<span class="loginfbtxt">Login with Facebook</span>
						</button>
					</li>
				</ul>	
			</div> -->
			<div class="login_terms">
				<p>By logging in, you agree to the following <a href="" target="_blank">Terms of Use</a></p>
			</div>
			<div style="clear:both;"></div>
		</div>
		
		<div class="login_Copyright">
			<p>© Copyright 2018-2020 Loansjagat.com. All Rights Reserved.</p>
		</div>
	</div>

</body>
</html>

    </div>
</template>
<script src = "./login.js"></script> 
<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

