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
	<div class="dashHeading">
		<div class="dashHeadingLeft">
			<h3>Upload Documents - Salaried Home Loan</h3>
		</div>
	</div>
<div class="uploadDocxMain">
	 
<div class="uploadDocumentMain">
<div class="tabBootstrap">
	<ul class="nav nav-tabs">
		<li class="active"><a data-toggle="tab" href="#basicDocxNew"><span class="txtSeparate">Basic</span> Documents<span class="smallTxt">(Upload each file less than 2 MB)</span></a></li>
		<li><a data-toggle="tab" href="#salarySlipsNew"><span class="txtSeparate">Salary</span> Slips<span class="smallTxt">(Upload latest three months)</span></a></li>
		<li><a data-toggle="tab" href="#bankStatementNew"><span class="txtSeparate">Bank</span> Statements<span class="smallTxt">(Upload Monthly or Quarterly)</span></a></li>
		<li><a data-toggle="tab" href="#propertyDocx"><span class="txtSeparate">Property</span> Documents<span class="smallTxt">(Upload If Any)</span></a></li>
		<li><a data-toggle="tab" href="#additionalDocx"><span class="txtSeparate">Additional</span> Docx<span class="smallTxt">(If Any)</span></a></li>
	</ul>
	<div class="tab-content">
		<div id="basicDocxNew" class="tab-pane in active">
			<div class="uploadDocumentInner" v-show="basic_document">
				<div class="uploadDocsSingle">
					<div class="uploadDocsSingleLeft">
						<p>1. Aadhar Card -
							<span class="pendingDocx">Pending!</span>
						</p>
					</div>
					<div class="uploadDocsSingleMiddle">
						<input type="text" placeholder="Enter Password if file is Password Protected">
					</div>
					<div class="uploadDocsSingleRight">
						<input type="file" name="Aadhar_Card" @change="selectFile($event,'Aadhar_Card')" id="file-1" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
						<label for="file-1"><span v-html="aadhar_card_f"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
					</div>
				</div>
				<div class="uploadDocsSingle">
					<div class="uploadDocsSingleLeft">
						<p>2. PAN Card -
						<span class="pendingDocx">Pending!</span> </p>
					</div>
					<div class="uploadDocsSingleMiddle">
						<input type="text" placeholder="Enter Password if file is Password Protected">
					</div>
					<div class="uploadDocsSingleRight">
						<input type="file" name="PAN_Card" @change="selectFile($event,'PAN_Card')" id="file-2" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
						<label for="file-2"><span v-html="pan_card_f"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
					</div>
				</div>
				<div class="uploadDocsSingle">
					<div class="uploadDocsSingleLeft">
						<p>3. Passport Size Photo -
						<span class="pendingDocx">Pending!</span>	</p>
					</div>
					<div class="uploadDocsSingleMiddle">
						<input type="text" placeholder="Enter Password if file is Password Protected">
					</div>
					<div class="uploadDocsSingleRight">
						<input type="file" @change="selectFile($event,'Passport_Size_Photo')" name="Passport_Size_Photo" id="file-3" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
						<label for="file-3"><span v-html="pass_photo"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
					</div>
				</div>
				<div class="uploadDocsSingle">
					<div class="uploadDocsSingleLeft">
						<p>4. Current Residence Proof -
						<span class="pendingDocx">Pending!</span>	<span class="residProofSpan">(e.g. Aadhar Card / Electricity Bill / Water Bill / Bank Statement / Passport)</span></p>
					</div>
					<div class="uploadDocsSingleMiddle">
						<input type="text" placeholder="Enter Password if file is Password Protected">
					</div>
					<div class="uploadDocsSingleRight">
						<input type="file" name="Residence_Proof" @change="selectFile($event,'Residence_Proof')" id="file-4" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
						<label for="file-4"><span v-html="residance_p"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
					</div> 
				</div>
				<div style="clear:both;"></div>
				<div class="" style="text-align:center;">
					<input type="submit" @click="uploadImage(1)" name="document_name3" value="Upload" class="fileUploadSmt" style="margin: 10px 0 0 0;float: none; display: inline-block;">
					<p style="margin: 25px 0 0 0; font-size: 12px; color: #b7b7b7;text-align: left;">&nbsp;&nbsp;&nbsp;Please upload one of the following file formats - jpeg,jpg,pdf,doc,docx,xls,xslx,zip.</p>
				</div>
			</div>
			<div style="clear:both;"></div>
			<div class="outerLoader" v-show="loader">
			<div class="loader"></div>
			</div>
		</div><!-- Basic Document Tab -->
		<div id="salarySlipsNew" class="tab-pane fade">
			<div class="uploadDocumentInner" v-show="salary_document">
				<div class="uploadDocsSingle">
					<div class="salarySlipText">
						<div class="salarySlipTextTop">Please upload Salary Slips for the month of</div>
						<div class="salarySlipTextMonth">
							<ul>
								<li>May 20</li>
								<li>April 20</li>
								<li>March 20</li>
							</ul>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>1. Salary Slip <span class="dateMonth">(May 20)</span>
							<span class="pendingDocx">Pending!</span>
						</p>
						</div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-5" @change="selectFile($event,'Salary_Slip_1')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-5"><span v-html="salary_slip_one"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>2. Salary Slip <span class="dateMonth">(April 20)</span>
						<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-6"  @change="selectFile($event,'Salary_Slip_2')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-6"><span v-html="salary_slip_two"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>3. Salary Slip <span class="dateMonth">(March 20)</span>
							<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-7"  @change="selectFile($event,'Salary_Slip_3')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-7"><span v-html="salary_slip_three"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>4. Form 16 - 
							<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-17"  @change="selectFile($event,'Form_16')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-17"><span v-html="form_16"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>5. Password Protected Salary Slip</p></div>
						<div class="bankStatementInput">
							<input type="text" name="" placeholder="Enter Password if Salary Slip is Protected">
						</div>
					</div>
					<input type="submit" @click="uploadImage(2)" name="document_name2" value="Upload" class="fileUploadSmt">
				</div>
			</div>
			<div style="clear:both;"></div>
			<div class="outerLoader" v-show="loader_1">
			<div class="loader"></div>
			</div>
		</div><!-- Salary Slips Tab -->
		<div id="bankStatementNew" class="tab-pane">
			<div class="uploadDocumentInner" v-show="quarterly_statement_docs">
				<div class="uploadDocsSingle">
					<div class="bankStatementMainBox">
						<div class="bankStatementMonthly">
							<h3 class="bankStatementHeading">Quarterly</h3>
							<div class="salarySlipText">
								<div class="salarySlipTextTop">Please upload Bank Statements for the month of</div>
								<div class="salarySlipTextMonth">
									<ul>
										<li>March 19</li>
										<li>December 19</li>
										<li>September 19</li>
										<li>June 20</li>
									</ul>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText">
									<p>1. QTR1/Bank Statement <span class="dateMonth">(17th Mar 20 - 17th Jun 20)</span>
									<span class="pendingDocx">Pending!</span>
									</p>
								</div>
								<div class="bankStatementInput">
									<input type="file" name=""  @change="selectFile($event,'Qtr1')" id="file-8" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-8"><span v-html="qtr_1"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>2. QTR2/Bank Statement <span class="dateMonth">(17th Dec 19 - 17th Mar 20) </span>
								<span class="pendingDocx">Pending!</span></p></div>	
								<div class="bankStatementInput">
									<input type="file" name="" id="file-9" @change="selectFile($event,'Qtr2')" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-9"><span v-html="qtr_2"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>3. QTR3/Bank Statement <span class="dateMonth">(17th Sep 19 - 17th Dec 19)</span>
								<span class="pendingDocx">Pending!</span></p></div>	
								<div class="bankStatementInput">
									<input type="file" name="" id="file-10" @change="selectFile($event,'Qtr3')" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-10"><span v-html="qtr_3"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>4. QTR4/Bank Statement <span class="dateMonth">(17th Jun 19 - 17th Sep 19)</span>
								<span class="pendingDocx">Pending!</span></p></div>	
								<div class="bankStatementInput">
									<input type="file" name="" id="file-20"  @change="selectFile($event,'Qtr4')" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-20"><span v-html="qtr_4"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>5. Password Protected </p></div>	
								<div class="bankStatementInput">
									<input type="text" placeholder="Is file password protected? Enter Password..">
								</div>
							</div>
						</div>
						<div style="text-align: center;font-size: 20px;color: #006b9e;margin: 12px 0; float: left; width: 100%;">Or</div>
						<div class="bankStatementQuarterly">
							<h3 class="bankStatementHeading">Semi-Annually</h3>
							<div class="salarySlipText">
								<div class="salarySlipTextTop">Please upload Bank Statement for the following semi-annually</div>
								<div class="salarySlipTextMonth">
									<ul>
										<li>April 20</li>
										<li>May 20</li>
									</ul>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>Semi Anually1/Bank Statement <span class="dateMonth">(17th Dec 19 - 17th Jun 20)</span>
								<span class="pendingDocx">Pending!</span></p>
								</div>
								<div class="bankStatementInput">
									<input type="file" name=""  @change="selectFile($event,'Anually1')" id="file-21" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-21"><span v-html="semi_anuual_1"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>								
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>Semi Anually2/Bank Statement <span class="dateMonth">(17th Jun 19 - 17th Dec 20)</span>
								<span class="pendingDocx">Pending!</span></p>
								</div>
								<div class="bankStatementInput">
									<input type="file" name="" id="file-21" @change="selectFile($event,'Anually2')" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-21"><span v-html="semi_annual_2"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>								
							</div>
						</div>
						
						<div style="text-align: center;font-size: 20px;color: #006b9e;margin: 12px 0; float: left; width: 100%;">Or</div>
						<div class="bankStatementQuarterly">
							<h3 class="bankStatementHeading">Yearly</h3>
							<div class="salarySlipText">
								<div class="salarySlipTextTop">Please upload Bank Statement for the following yearly</div>
								<div class="salarySlipTextMonth">
									<ul>
										<li>June 19 - June 20</li>
									</ul>
								</div>
							</div>
							<div class="bankStatement">
								<div class="bankStatementText"><p>Bank Statement <span class="dateMonth">(17th June 19 - 17th Jun 20)</span>
								<span class="pendingDocx">Pending!</span></p>
								</div>
								<div class="bankStatementInput">
									<input type="file" name="" id="file-21" @change="selectFile($event,'Bank_Statement')" class="inputfile inputfile-6" data-multiple-caption="{count} files selected">
									<label for="file-21"><span v-html="bank_statment"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
								</div>								
							</div>
						</div>
						
						<input type="submit" @click="uploadImage(3)" name="document_name1" value="Upload" class="fileUploadSmt">
					</div>
				</div>
				<p style="margin: 10px 0 0 0; font-size: 12px; color: #b7b7b7;text-align: left;float: left; position: relative; padding: 0 0 0 10px;">* Please upload PDFs downloaded from your internet banking login or the bank statement email sent to you by your bank either monthly or quarterly.</p>
			</div>
			<div style="clear:both;"></div>
			<div class="outerLoader" v-show="loader_2">
			<div class="loader"></div>
			</div>
		</div><!-- Bank Statement Tab -->
		<div id="propertyDocx" class="tab-pane fade">
			<div class="uploadDocumentInner" v-show="property_documents">
				<div class="uploadDocsSingle">
					
					<div class="bankStatement">
						<div class="bankStatementText"><p>1. Sale Deed / Gift Deed / Khasra Khatauni
							<span class="pendingDocx">Pending!</span>
						</p>
						</div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-25" @change="selectFile($event,'Sale_Deed')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-25"><span v-html="self_deed"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>2. Conveyance Deed
						<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-26" @change="selectFile($event,'Conveyance_Deed')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-26"><span v-html="conveyance_deed"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>3. Allotment / Agreement / Builder Buyer Agreement
							<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-27"  @change="selectFile($event,'Allotment')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-27"><span v-html="allotment"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>4. Property Map <span class="dateMonth">(If Any)</span>
							<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-28" @change="selectFile($event,'Property_Map')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-28"><span v-html="property_map"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>5. Complete Back chain of property
							<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-29" @change="selectFile($event,'Back_Chain')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-29"><span v-html="complete_back_chain"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<div class="bankStatement">
						<div class="bankStatementText"><p>6. Any other Property Document
							<span class="pendingDocx">Pending!</span>
						</p></div>
						<div class="bankStatementInput">
							<input type="file" name="" id="file-30" @change="selectFile($event,'Any_other_Property_Document')" class="inputfile inputfile-6" data-multiple-caption="files selected">
							<label for="file-30"><span v-html="any_other_prop_doc"></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong></label>
						</div>
					</div>
					<!-- <div class="bankStatement">
						<div class="bankStatementText"><p>5. Password Protected Salary Slip</p></div>
						<div class="bankStatementInput">
							<input type="text" name="" placeholder="Enter Password if Salary Slip is Protected">
						</div>
					</div> -->
					<input type="submit" @click="uploadImage(4)" name="document_name2" value="Upload" class="fileUploadSmt">
				</div>
			</div>
			<div style="clear:both;"></div>
			<div class="outerLoader" v-show="loader_3">
			<div class="loader"></div>
			</div>
		</div><!-- Property Document Tab -->
		<div id="additionalDocx" class="tab-pane fade">
			<div class="uploadDocumentInner" v-show="additional_documents">
			
			<br>
			<img src="@/assets/img/docx-img.jpg" alt="Logo">
			<br>
			<br>
			<br>
			<div class="addDocumentMain">
				<div class="addDocument1">
					<p>1. Upload Additional Document</p>
				</div>
				<div class="addDocument2">
					<input type="file" name="pic" id="file-12" @change="selectFile($event,'Additional_Document')" class="inputfile inputfile-1" data-multiple-caption="{count} files selected">
					<label for="file-12"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> <span>Choose a file&hellip;</span></label>
				</div>
				<div class="addDocument3">
					<input type="text" name="" placeholder="Type File Name Here...">
				</div>
				<div class="addDocument4">
					<input type="text" name="" placeholder="Enter Password if file is Password Protected">
				</div>
			</div>
			
			
			<div style="clear:both;"></div>

			</div>
		<br>
		<input type="submit" @click="uploadImage(5)" name="document_name" value="Upload" class="fileUploadSmt">
		<br>
		<br>
		<br>
		<p style="font-size:12px; color: #b7b7b7;">Upload file less than 2MB</p>
		<br>
		<div style="clear:both;"></div>
		<div class="outerLoader" v-show="loader_4">
			<div class="loader"></div>
			</div>
		</div><!-- Additional Document Tab -->
	</div>
</div>
 
</div>	<!--box-->
<div class="uploadDocumentTable">
	<div class="uploadDocumentMBLHead">Uploaded Documents List</div>
	<div class="uploadDocumentTableHead">
		<div class="uploadDocumentHDate">Date</div>
		<div class="uploadDocumentHTitle">Document Title</div>
		<div class="uploadDocumentHType">File Name</div>
		<div class="uploadDocumentHPass">Password</div>
		<div class="uploadDocumentHAction">Action</div>
	</div>
 
	<div class="uploadDocumentTableContent">
		<div class="uploadDocumentCDate">
			<p><span>Date</span> 25/10/2019 18:13</p>
		</div>
		<div class="uploadDocumentCTitle">
			<p><span>Document Title</span>Aadhar Card </p>
		</div>
		<div class="uploadDocumentCType">
			<p><span>File Name</span>aadhar_card.jpg </p>
		</div>
		<div class="uploadDocumentPass">
			<p><span>Password</span>hello@1109 </p>
		</div>
		<div class="uploadDocumentCAction">
			<a href="" class="uploadDocx hint--top" aria-label="Download"><i class="fa fa-download"></i><span>Download</span></a>
			<a onClick='deletefile(1796);' class="deleteDocx hint--top" aria-label="Delete"><i class="fa fa-trash-o"></i><span>Delete</span></a>
		</div>
	</div>
	<div class="uploadDocumentTableContent">
		<div class="uploadDocumentCDate">
			<p><span>Date</span> 25/10/2019 18:14</p>
		</div>
		<div class="uploadDocumentCTitle">
			<p><span>Document Title</span>Bank Statement </p>
		</div>
		<div class="uploadDocumentCType">
			<p><span>File Name</span>salary_slip.jpg </p>
		</div>
		<div class="uploadDocumentPass">
			<p><span>Password</span>testpassword </p>
		</div>
		<div class="uploadDocumentCAction">
			<a href="" class="uploadDocx hint--top" aria-label="Download"><i class="fa fa-download"></i><span>Download</span></a>
			<a class="deleteDocx hint--top" aria-label="Delete"><i class="fa fa-trash-o"></i><span>Delete</span></a>
		</div>
	</div>
</div>
<div class="clearfix"></div>
</div>
</div> <!-- .content-wrapper -->
 

<div class="clearfix"></div>
<!-- <div class="copyrit">&copy; 2018 Loansjagat.com</div> -->
</main> <!-- .cd-main-content -->

</div>
</template>
<script src = "./hl_documents.js"></script> 
