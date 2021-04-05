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
		<a href=""><i class="fa fa-home"></i><span>Dashboard</span></a>
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
			<li><a href="#"><i class="fa fa-refresh"></i><span>Refer & Earn</span></a></li>
			<li><a href="#"><i class="fa fa-phone"></i><span>Contact Us</span></a></li>
			<li><a href="#"><i class="fa fa-power-off"></i><span>Logout</span></a></li>
		</ul>
	</div>
<div class="content-wrapper">
	<div class="dashHeading">
		<div class="dashHeadingLeft">
			<h3>Dashboard</h3>
		</div>
		<div class="dashHeadingRight">
			<a href="#"><i class="fa fa-files-o"></i> Upload Documents</a>
		</div>
	</div>
	<div class="dashInfoBox hidden-xs visible-lg">
		<div class="dashInfoBoxInner">
			<div class="dashInfoBoxInnerTitle">
			<h4>Basic Info <router-link to="/update-profile"><img src="@/assets/img/edit-icon.png" title="Edit"></router-link></h4>
			</div>
			<div class="dashInfoBoxInnerContent">
				<ul>
					<li><label>Name</label>{{users.name}} </li>
					<li><label>Phone</label>{{users.mobile_number}} </li>
					<li><label>Email ID</label>{{users.email}}  </li>
					<li><label>Date of Birth</label>{{users.dob}}</li>
					<li><label>Gender</label>{{users.gender}} </li>
				</ul>
			</div>
		</div>
		<div class="dashInfoBoxInner">
			<div class="dashInfoBoxInnerTitle">
				<h4>Personal Info <router-link to="/update-profile"><img src="@/assets/img/edit-icon.png" title="Edit"></router-link></h4>
			</div>
			<div class="dashInfoBoxInnerContent">
				<ul>
					<li><label>PAN Number</label>{{users.panno}} </li>
					<li><label>Monthly Income</label> <i class="fa fa-inr"></i> {{users.net_monthly_salary}} </li>
					<li><label>Res. Address</label> {{users.residence_address}}  </li>
					<li><label>Office Address</label>{{users.office_address}} </li>
				</ul>
			</div>
		</div>
		<div class="dashInfoBoxInner">
		<div class="dashInfoBoxInnerTitle">
			<h4>Know Your Property <span><img src="@/assets/img/home-icon.png" title="Edit"></span></h4>
		</div>
		<div class="dashInfoBoxInnerContent">
			<h5>What does Know Your Property means?</h5>
			<p>By answering few simple questions about your property, our mathematical algorithm will be able to provide details about your property and whether your property is eligible for getting Home loan or Loan Against Property from banks or NBFCs and also provide you the estimated eligible loan amount and EMI. <a href="" target="_blank">Check Now &#187;</a></p>
		</div>
		</div>
	</div>
	
	<div class="loanApplication">
		<div class="loanApplicationInner">
			<div class="loanApplicationHeading">
				<h3>Loan Application Status</h3>
			</div>
			<div class="loanApplicationBox" v-for="item in apply_loan" v-bind:key="item.id">
				<div class="loanApplicationInnerTop">
					<div class="loanApplicationInnerTopApplication">
						<p>{{item.loan_type}}: #{{item.application_no}}</p>
					</div>
					<div class="loanApplicationInnerTopFormType">
						<p>Applied Date - 27th August, 2019</p>
					</div>
					<div class="loanApplicationInnerTopLoan">
						<a href="javascript:void(0)" @click="redirectPage(item.loan_type)">Upload Documents</a>
					</div>
				</div>
				<div class="loanApplicationInnerMiddle">
					<div class="loanApplicationInnerMiddleBank">
						<p>Loan Amount: <span><i class="fa fa-inr"></i> {{item.loan_amount}}</span></p>
					</div>
					<div class="loanApplicationInnerMiddleProgress">
						<ul class="progressbar">
							<li class="active">Application Received</li>
							<li class="active">Documents Received</li>
							<li>Login</li>
							<li>Underwriting</li>
							<li>Sanction</li>
							<li>Disbursement</li>
						</ul>
					</div>
				</div>
				
			</div>	<!-- loanApplicationBox -->
			
			
			
			
		</div>
	</div>
	<div class="dashInfoBox visible-xs hidden-lg">
		<div class="dashInfoBoxInner">
			<div class="dashInfoBoxInnerTitle">
				<h4>Know Your Property <span><img src="@/assets/img/home-icon.png" title="Edit"></span></h4>
			</div>
			<div class="dashInfoBoxInnerContent">
				<h5>What does Know Your Property means?</h5>
				<p>By answering few simple questions about your property, our mathematical algorithm will be able to provide details about your property and whether your property is eligible for getting Home loan or Loan Against Property from banks or NBFCs and also provide you the estimated eligible loan amount and EMI. <a href="" target="_blank">Check Now &#187;</a></p>
			</div>
		</div>
	</div>
	
	<div class="clearfix"></div>
	<div class="newdasbox mobileShow" style="display:none;">
		<div class="newdasboxTitle">
			<h2><i class="fa fa-home"></i> Know Your Property </h2>
		</div>
		<div class="newdasboxContent">
			<p><span class="uniq-id">What does Know Your Property means?</span></p>
			<p>By answering few simple questions about your property, our mathematical algorithm will be able to provide details about your property and whether your property is eligible for getting Home loan or Loan Against Property from banks or NBFCs and also provide you the estimated eligible loan amount and EMI. </p>
			<a href="#" target="_blank" class="checkNow">Check now</a>
			<br>
			<div class="clearfix"></div>
			<div class="newdasbox-inner-img">
				<img src="img/knowyourproperty.jpg">
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
<div class="clearfix"></div>
</div> <!-- .content-wrapper -->

<div class="clearfix"></div>
<!-- <div class="copyrit">&copy; 2018 Loansjagat.com</div> -->
</main> <!-- .cd-main-content -->

</div>
</template>
<script src = "./dashboard.js"></script> 
