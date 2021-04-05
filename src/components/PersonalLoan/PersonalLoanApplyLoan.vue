<template>
    <div>
        <app-header></app-header>
     	<div class="thankYouMainDiv">
			<div class="container">
				<div class="row padding50">
					<div class="col-lg-12 text-center thankYouDiv">
						<h2 class="">Application No: <span v-html="value">LJ15012020072727137</span></h2>
						<p class="">Dear test, thanks for applying <span v-html="type"></span> through <b>LoansJagat.com</b> </p>
						<i class="fa fa-envelope-open-o" aria-hidden="true"></i>
						<p>We have also sent you an E-mail with the details about your application.</p>
						<h3>WHAT SHOULD BE DONE NEXT?</h3>
					</div>
                   
					<div class="col-lg-12 thanksPB m-btm40">
						<ul class="progressbar">
							<li class="active">
								<div class="thanksPBInner first">
									<div class="thanksPBInnerCheck"><i class="fa fa-check-circle-o" aria-hidden="true"></i></div>
									<div class="thanksPBInnerImg">
										<img src="https://d2kqv7ctx0fiz9.cloudfront.net/loansjagat/img/application_approved.jpg"    >
									</div>
									<p>Application Received</p>
								</div>
							</li>
							<li id="thanksPBSubmitDocx">
								<div class="thanksPBInner second" id="scrollDown">
									<div class="thanksPBInnerCheck"><i class="fa fa-circle-o" aria-hidden="true"></i></div>
									<div class="thanksPBInnerImg">
										<img src="https://d2kqv7ctx0fiz9.cloudfront.net/loansjagat/img/docxUpload.jpg" data-pagespeed-url-hash="1992496426" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">
									</div>
									<p>Submit Documents</p>
								</div>
							</li>
							<li>
								<div class="thanksPBInner third">
									<div class="thanksPBInnerCheck"><i class="fa fa-circle-o" aria-hidden="true"></i></div>
									<div class="thanksPBInnerImg">
										<img src="https://d2kqv7ctx0fiz9.cloudfront.net/loansjagat/img/loan_approved.jpg">
									</div>
									<p>Loan Approved</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-12 text-center m-btm40">
						<router-link to="/upload-pl-documents" type="button" class="btn btn-success">Upload Documents</router-link>
					</div>
					
				</div>
			</div>
		</div>
	    <div class="applyPageMain" style="display:none;">
            <div class="moduleTitle thankYouMainDiv">
             
            <div class="container" id="applicant_documents">
            <div class="documents">
            <form id="formoid">
            <input type="hidden" name="_token" value="XFaMXfaG1RMMRIuz3cg7Kox83GstDkr35caAtIKe">
            <input type="hidden" name="applicationid" id="applicationid" value="LJ15012020072727137">
            <div class="documentheading">
            <!-- <h4>In order to process your loan application faster, please update your document below <a class="tooltip" href="#" style="opacity: 1;">View Documents List<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><b>Documents List: -</b><br />1.	Aadhar Card<br />2.	PAN Card<br />3. Latest 3 month salary slip<br />4.	Latest 6 month bank statement<br />5. Address Proof (Electricity Bill, Water Bill, Aadhar Card, Bank statement, Passport).<br /></span></span></span></a> </h4>
            <h4>In order to process your loan application faster, please update your document below <a href="#"  data-toggle="modal" data-target="#docsList">View Documents List</a> </h4> -->
            <h3>Documents Schedule - Online / Offline </h3>
            </div>
            <div class="documentInner">
            <ul>
            <li>
            <input type="radio" id="size4654" name="doc_schedule" value="1" checked="" required="">
            <label for="size4654"><span>Paperless Approval<br><b style="font-size: 13px; font-weight: 400;">(Online)</b></span></label>
            <div class="check"></div>
            </li>
            <li>
            <input type="radio" id="size4655" name="doc_schedule" value="2" required="">
            <label for="size4655"><span>Paper-Pickup Approval<br><b style="font-size: 13px; font-weight: 400;">(Offline)</b></span></label>
            <div class="check"></div>
            </li>
            </ul>
            </div>
            <div id="showOne" class="myDiv">
            <div class="showOneInner">
            <!-- <input type="file" name="fileToUpload" multiple> -->
            <div class="checkBoxOption1" style="display:none;">
            <div style="width:40px; float:left;padding: 2px 0 0 0;">
            <input type="radio" name="" value="">
            </div>
            <div class="box">
            <input type="file" name="file-7[]" id="file-7" class="inputfile inputfile-6" data-multiple-caption="{count} files selected" multiple="">
            <label for="file-7"><span></span> <strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> Choose a file…</strong></label>
            </div>
            </div>
            <div class="uploadDocsBox">
            <a href="https://www.loansjagat.com/login">Upload Documents</a>
            </div>
            <div style="font-weight: 500;color: #212121;margin: 0 0 8px; font-size: 16px; float: left; width: 100%; text-align: center;">Or</div>
            <div class="checkBoxOption2">
            <div class="innerText">Email Documents on <a href="mailto:care@loansjagat.com">care@loansjagat.com</a></div>
            </div>
            </div>
            </div>
            <div style="clear:both;"></div>
            <div id="showTwo" class="myDiv" style="display:none;">
            <div class="appointmentTime">
            <label>Document Pickup Address <span class="redStar">*</span></label>
            <input type="text" name="addresspickup" id="addresspickup" required="" placeholder="Document Pickup Address">
            </div>
            <div class="appointmentTime mblWidth50">
            <label>Landmark</label>
            <input type="text" name="landmark" id="landmark" placeholder="Landmark">
            </div>
            <div class="appointmentTime mblWidth50">
            <label>Pin Code <span class="redStar">*</span></label>
            <input type="text" id="appointPinCode" name="appointPinCode" required="" placeholder="" maxlength="6" class="appointPinCode">
            </div>
            <div class="appointmentTime mblWidth50">
            <label>Pickup Date <span class="redStar">*</span></label>
            <select id="call_date" name="call_date" required="" class="call_timeLAT form-control">
            <option value="Today">Today</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            </select>
            </div>
            <div class="appointmentTime mblWidth50">
            <label>Pickup Time <span class="redStar">*</span></label>
            <select id="pickuptime" name="call_time" required="" class="call_timeLAT ltimes form-control">
            <option value="3">3 PM- 6 PM</option>
            <option value="4">6 PM- 9 PM</option>
            </select>
            </div>
            <div style="clear:both;"></div>
            <div class="applyLoanSubmitBtn">
            <button type="submit" id="submitpic" class="btn btn-default">Submit</button>
            </div>
            </div>
            </form>
            </div>
            </div>
            <div id="result"></div>
            <div style="clear:both;"></div>
            </div>
        </div>

        <app-footer></app-footer>
    </div>
</template>
<script src = "./PersonalLoanApplyLoan.js"></script> 
