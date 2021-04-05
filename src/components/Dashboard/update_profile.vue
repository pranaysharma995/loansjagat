<template>
    <div>
        <header class="cd-main-header">
	<a href="index.html" class="cd-logo"><img src="@/assets/img/logo-white.png" alt="Logo"></a>
	<a href="#0" class="cd-nav-trigger"><span></span></a>
	<nav class="cd-nav">
		<ul class="cd-top-nav hidden-xs">
			<li><a href="#0"><i class="fa fa-bell"></i></a></li>
			<li><a href="mailto:care@loansjagat.com" title="Quick Contact"><i class="fa fa-envelope"></i></a></li>
			<li class="has-children account">
				<a href="#0">
					<img src="@/assets/img/dashman.jpg" alt="avatar">
					1223
				</a>
			<ul>
				<li><a href="#"><i class="fa fa-power-off"></i><span>Logout</span></a></li>
			</ul>
			</li>
		</ul>
	</nav>
</header> <!-- .cd-main-header -->
<main class="cd-main-content">
<nav class="cd-side-nav">
	<ul>
		<li class="">
		<router-link to="/dashboard"><i class="fa fa-home"></i><span>Dashboard</span></router-link>
		</li>
		<li class="has-children overview hidden-xs">
		<a href="#0"><i class="fa fa-server"></i><span>Products<i class="fa fa-angle-right hidden-xs" style="float: right;"></i></span></a>
			<ul>
				<li><a target="_blank" href="#">Salaried Personal Loans</a></li>
				<li><a target="_blank" href="#">Salaried Home Loans</a></li>
				<li><a target="_blank" href="#">Salaried Loan Against Property</a></li>
				<li><a target="_blank" href="#">Business Loans</a></li>
				<li><a target="_blank" href="#">Dropline Overdrafts</a></li>
				<li><a target="_blank" href="#">Loan Against Property</a></li>
				<li><a target="_blank" href="#">Home Loan</a></li>
				<li><a target="_blank" href="#">Know Your Property</a></li>
				<li><a target="_blank" href="#">Balance Transfer</a></li>
			</ul>
		</li>
		<li>
		<router-link to="/update-profile"><i class="fa fa-user"></i><span>Update Profile</span></router-link>
		</li>
		<li>
		<a href="#"><i class="fa fa-file-text-o"></i><span class="blink">Upload Documents</span></a>
		</li>
		<li>
		<a href="#"><i class="fa fa-refresh"></i><span>Refer & Earn</span></a>
		</li>
		<li>
		<a href="#"><i class="fa fa-phone"></i><span>Contact Us</span></a>
		</li>
		<li>
		<a href="#"><i class="fa fa-power-off"></i><span>Logout</span></a>
		</li>
	</ul>
</nav>
	<div class="mobileHeadingDashboard">
		<img src="@/assets/img/logo-white.png" alt="Logo">
	</div>
	<div class="mobileMyBoard">
		<div class="mobileMyBoardTop">
			<span class="profileName">Dashboard</span>
			<span class="edit">
				<a href="" title="Edit"><i class="fa fa-pencil-square-o"></i></a>
			</span>
		</div>
		<div style="background: #212121; width: 100%; float: left; padding: 10px; border-radius: 5px;">
			<div class="mobileMyBoardName">1223</div>
			<div class="mobileMyBoardMobile"><img src="img/phone.png"> 7838480658</div>
			<div class="mobileMyBoardGender"><img src="img/user_male.png"> male	</div>
			<div class="mobileMyBoardDOB"><img src="img/gift.png"> 1970-01-01	</div>
			<div class="mobileMyBoardLoc"><img src="img/envelope.png"> test@gmail.com	</div>
		</div>
	</div>
	<div class="mobileMenuDashboard">
		<ul>
			<li><a href="#"><i class="fa fa-home"></i><span>Dashboard</span></a></li>
			<li><router-link to="/update-profile"><i class="fa fa-user"></i><span>Update Profile</span></router-link>	</li>
			<li><a href="#"><i class="fa fa-file-text-o"></i><span class="blink black">Upload Documents</span></a></li>
			<li><a href="#"><i class="fa fa-refresh"></i><span>Refer & Earn</span></a></li>
			<li><a href="#"><i class="fa fa-phone"></i><span>Contact Us</span></a></li>
			<li><a href="#"><i class="fa fa-power-off"></i><span>Logout</span></a></li>
		</ul>
	</div>
<div class="content-wrapper">
<div class="content_container">
	
	<div class="profile_view">
		<div class="profile_view_left">
			<div class="profile_img">
				<img src="@/assets/img/dashman.jpg">
			</div>
			<div class="profile_name">
				<h2>{{users.name}}</h2>
			</div>
		</div>
		<div class="profile_view_right">
			<div class="profile_pinfo">
				<div class="profile_pinfo_inner">
					<div class="profile_pinfo_title">Phone Number</div>
					<div class="profile_pinfo_detail">{{users.mobile_number}}</div>
				</div>
				<div class="profile_pinfo_inner">
					<div class="profile_pinfo_title">Email ID</div>
					<div class="profile_pinfo_detail">{{users.email}}</div>
				</div>
				<div class="profile_pinfo_inner">
					<div class="profile_pinfo_title">Date of Birth</div>
					<div class="profile_pinfo_detail">{{users.dob}}</div>
				</div>
				<div class="profile_pinfo_inner">
					<div class="profile_pinfo_title">Gender</div>
					<div class="profile_pinfo_detail">{{users.gender}}</div>
				</div>
			</div>
			<div class="profile_social">
				<ul>
					<li><a href="" class="hint--top" aria-label="Twitter"><i class="fa fa-twitter"></i></a></li>
					<li><a href="" class="hint--top" aria-label="Facebook"><i class="fa fa-facebook"></i></a></li>
					<li><a href="" class="hint--top" aria-label="Linkedin"><i class="fa fa-linkedin"></i></a></li>
				</ul>
			</div>
		</div>
	</div>
	
	<div class="clearfix"></div>
	
	<div class="profile_edit">
		<div class="alert alert-success" role="alert" v-show="success_msg">
			Your profile has been updated successfully
		</div>
		<div class="profile_edit_heading">
			<h4>Personal Details</h4>
		</div>
		<div class="profile_edit_content">
			<div class="profile_edit_50w">
				<div class="profile_label">Full Name</div>
				<div class="profile_input"><input type="text" v-model="full_name"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">Mobile Number</div>
				<div class="profile_input"><input type="text" v-model="mobile_num"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">Date of Birth</div>
				<div class="profile_input"><input type="text" v-model="dob" placeholder="__ / __ / ____"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">E-mail ID</div>
				<div class="profile_input"><input type="text" v-model="email"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">PAN Number</div>
				<div class="profile_input"><input type="text" v-model="pan_no"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">Monthly Income</div>
				<div class="profile_input"><input type="text" v-model="monthly_income"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">Gender</div>
				<div class="genderDiv">
					<label class="genderLabel"><input type="radio" @click="setVal('male')" v-model="gender" name="gender" value="male" checked>Male</label>
					<label class="genderLabel"><input type="radio" @click="setVal('female')" v-model="gender" name="gender" value="female">Female</label>
				</div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">Marital Status</div>
				<div class="profile_input">
					<select v-model="marital_status">
						<option value="">Select Maritial Status</option>
						<option value="Married">Married</option>
						<option value="Unmarried">Unmarried</option>
					</select>
				</div>
			</div>
			<div class="profile_edit_100w">
				<div class="profile_label">Residence Address <span>(with Landmark & Pin Code)</span></div>
				<div class="profile_input"><input type="text" v-model="residence_add"></div>
			</div>
			<div class="profile_edit_50w">
				<div class="profile_label">City</div>
				<div class="profile_input"><input type="text" v-model="city"></div>
			</div>
			<div class="profile_edit_30w">
				<div class="profile_label">State</div>
				<div class="profile_input">
					<select v-model="state">
						<option value="">Select State</option>
						<option value=""></option>
					</select>
				</div>
			</div>
			<div class="profile_edit_20w">
				<div class="profile_label">Pin Code</div>
				<div class="profile_input"><input type="text" v-model="pin_code"></div>
			</div>
			<div class="profile_edit_100w">
				<div class="addAddress"><a href=""><i class="fa fa-plus-circle"></i> Add Office Address</a></div>
			</div>
			<div class="profile_edit_100w">
				<input @click="updateProfile()" type="submit" value="Submit" class="updateSubmitBtn">
			</div>
		</div>
	</div>
	
	<div class="knowurprop">
		<h3>Know Your Property</h3>
		<img src="@/assets/img/know-your-prop.jpg">
		<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here Lorem. <a href="">Check Now >></a>
		</p>
	</div>
	
</div>	
<div class="clearfix"></div>
</div> <!-- .content-wrapper -->

<div class="clearfix"></div>
<!-- <div class="copyrit">&copy; 2018 Loansjagat.com</div> -->
</main> <!-- .cd-main-content -->

</div>
</template>
<script src = "./update_profile.js"></script> 
