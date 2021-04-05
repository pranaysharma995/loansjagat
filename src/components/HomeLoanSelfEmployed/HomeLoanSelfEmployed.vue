<template>
    <div>
		<app-header></app-header>
		
		<div class="formMainDiv">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="/">Home</a></li>
					<li>>></li>
					<li>Self-Employed Home Loan</li>
				</ul>
			</div>
			<div class="row formInnerDiv">
				<div class="col-lg-4 col-md-4 col-sm-4 col-12 formInnerLeft">
					<ul>
						<li class="bluebg1 active" @click="showStep(1)" id="sehl1">
							<div class="numbers">1</div>
							<div class="stepDetails"><p>Loan Amount Required, Turnover, Net Salary, Mobile, City or Pin code, Email ID</p></div>
						</li>
						<li class="bluebg2" @click="showStep(2)" id="shl2">
								<div class="numbers">2</div>
								<div class="stepDetails"><p><span>Mobile Verification</span></p></div>
							</li>
						<li class="bluebg2" @click="showStep(2)" id="sehl2">
							<div class="numbers">2</div>
							<div class="stepDetails"><p>Market value of property, Registry Value of property, Property type</p></div>
						</li>
						<li class="bluebg3" @click="showStep(3)" id="sehl3">
							<div class="numbers">3</div>
							<div class="stepDetails"><p>Business Type, Business Industry, Industry Name, Industry Item</p></div>
						</li>
						<li class="bluebg4" @click="showStep(4)" id="sehl4">
							<div class="numbers">4</div>
							<div class="stepDetails"><p>Any Existing EMI, Gross Annual Income, Co-Applicant Annual Income</p></div>
						</li>
						<li class="bluebg5" id="">
							<div class="numbers">5</div>
							<div class="stepDetails"><p>Get list of banks with best offers</p></div>
						</li>
					</ul>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-8 col-12 formInnerRight">
					<div class="formInnerRightHead">
						<h2>Compare &amp; Apply for Self-Employed Home Loan</h2>
					</div>
					<form action="" method="">
						<div class="formInnerRightFields">
							<div class="row" id="newsehl_step1" v-show="sehl_step_1">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields newsalHL">
										<label>Your Loan Amount</label>
										<input id="loan_amt" class="form-control" type="text"  v-model="loan_amount" @keyup="convertNumberToWords(loan_amount,1)" placeholder="Input Desired Loan Amount">
										<div class="numToWords" v-html="no_to_words">adas</div>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Mobile</label>
										<input id="mob" class="form-control" type="text" v-model="mobile" placeholder="">
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Email ID</label>
										<input id="email" class="form-control" type="email" v-model="email_id" placeholder="Enter Valid Email ID">
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields newsalHL">
										<label>Turnover</label>
										<select id="turn_over" class="form-control" v-model="turn_over">
											<option>Select An Option</option>
											<option value="5000000">Less than 50 Lacs</option>
											<option value="7500000">50 Lacs - 1 Cr</option>
											<option value="15000000">1 Cr - 2 Cr</option>
											<option value="25000000">2 Cr - 3 Cr</option>
											<option value="35000000">3 Cr - 4 Cr</option>
											<option value="45000000">4 Cr - 5 Cr</option>
											<option value="75000000">5 Cr - 10 Cr</option>
											<option value="150000000">10 Cr - 20 Cr</option>
											<option value="350000000">20 Cr - 50 Cr</option>
											<option value="750000000">50 Cr - 100 Cr</option>
											<option value="1000000000">More than 100 Cr</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>City</label>
										<typeahead :data = "cities" 
										:serializer="name => name.name" 
										:minMatchingChars = "1"
										v-model="city"
										ref="city"
										>
										</typeahead>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Date of Birth</label>
										<datepicker :open-date="new Date('1999-01-01')" :bootstrap-styling="true" :disabled-dates="state.disabledDates" @selected="chnageClass" :input-class="{'is-invalid':bootstrapStyling, 'is-invalid':!bootstrapStyling}" v-model="date_of_birth" lang="en" type="month" format="yyyy-MM-dd"></datepicker>
									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary next-btn"  @click="create()" >Proceed</a>
								</div>
							</div>	<!-- newpl_step1 -->
							<div class="row" id="" v-show="mob_otp">
									
									<div class="newshl_step2_content">
										
										<div class="newshl_step2__mail">
											<img src="@/assets/images/mobile_mail.png">
										</div>
										<div class="newshl_step2__content">
											<p>We have sent you an OTP via SMS for Mobile number verification</p>
										</div>
										<div class="newshl_step2_otp_code">
											<div class="newshl_step2_otp_inputs">
												<input type="text" maxLength="1" v-model="no_one" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
												<input type="text" maxLength="1" v-model="no_two" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
												<input type="text" maxLength="1" v-model="no_three" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
												<input type="text" maxLength="1" size="1" v-model="no_four" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
												<div style="clear:both;"></div>
												<button type="button" class="btn btn-primary btn-embossed" @click="verifyOTP">Verify</button>
											</div>
											<h5 class="dontReceCode">Didn't receive the code? <a href="javascript:void(0)" @click="sentOtp" class="send_code_again">Send code again</a></h5>
											<div style="clear:both;"></div>
										</div>
										<div style="clear:both;"></div>
									</div>
									<div style="clear:both;"></div>
									
								</div>	<!-- newpl_step2 -->
							<div class="row" id="newsehl_step2" v-show="sehl_step_2">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Market Value of Property</label>
										<input class="form-control" type="text" v-model="market_value" placeholder="Enter Market Value of Property">
										<div class="numToWords" v-html="no_to_words_market">adas</div>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Property Type</label>
										<select class="form-control" v-model="property_type">
											<option value="">Select Property Type</option>
											<option value="Completed Project">Completed Project</option>
											<option value="Under Construction">Under Construction</option>
											<option value="Land / Plot">Land / Plot</option>
											<option value="Construction on my own land">Construction on my own land</option>
											<option value="Not decided property">Not decided property</option>
										</select>
									</div>	<!-- formInputFields -->
									
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Registry Value of Property</label>
										<input class="form-control" @keyup="convertNumberToWords(registry_value,3)" type="text" v-model="registry_value" placeholder="Enter Registry Value of Property">
										<div class="numToWords" v-html="no_to_words_registry">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								
								<div class="formInputFields">
									<div class="formInputFieldLabel">
										<p>&nbsp;</p>
									</div>
									<div class="formInputFieldInput">&nbsp;</div>
								</div>	<!-- formInputFields -->
								
								<div class="formInputFields newsalHL">
									<div class="formInputFieldLabel">
										<p>&nbsp;</p>
									</div>
									<div class="formInputFieldInput">&nbsp;</div>
								</div>	<!-- formInputFields -->
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(1)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="showStep(3)" class="btn btn-primary next-btn">Proceed</a>
								</div>
							</div>	<!-- newpl_step2 -->
							
							<div class="row" id="newsehl_step3" v-show="sehl_step_3">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Business Type</label>
										<select class="form-control" v-model="business_type">
											<option value="">Select Business Type</option>
											<option value="Proprietor">Proprietor</option>
											<option value="Partnership Firm">Partnership Firm</option>
											<option value="Pvt Ltd Company">Pvt Ltd Company</option>
											<option value="Director Applying As An Individual">Director Applying As An Individual</option>
											<option value="Others">Others</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Business Industry</label>
										<select class="form-control" v-model="busi_indus" @change="filterLists($event, $event.target.selectedIndex)">
											<option value="">Select Industry</option>
											<option v-for="indus in industries" :value="indus.id" :key="indus.id">{{indus.industry}}</option>
										</select>
									</div>	<!-- formInputFields -->
								
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Type Of Business</label>
											<select class="form-control"  v-model="type_of_busi" id="type_of_business_industry" name="type_of_business_industry">
											<option value="">Select Business Type</option>
											<option value="Trader">Trader</option>
											<option value="Manufacturer">Manufacturer</option>
											<option value="Service Provider">Service Provider</option>
											<option value="Retailer">Retailer</option>
											<option value="E-commerce">E-commerce</option>
											<option value="Distributor">Distributor</option>
											<option value="Others">Others</option>
											</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Business Industry Items</label>
										<select class="form-control" v-model="busi_indus_item">
											<option>Select Industry Item</option>
											<option v-for="item in items" :value="item.id" :key="item.id">{{item.Item}}</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(2)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="showStep(4)" class="btn btn-primary next-btn">Proceed</a>
								</div>
							</div>	<!-- newpl_step3 -->
							
							
							<div class="row" id="newsehl_step4" v-show="sehl_step_4">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Any Existing EMI</label>
										<input class="form-control" @keyup="convertNumberToWords(any_existing_emi,4)" type="tel" v-model="any_existing_emi" placeholder="XXXXX">
										<div class="numToWords" v-html="no_to_words_existing_emi">adas</div>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Co-applicant Annual Income</label>
										<input class="form-control" @keyup="convertNumberToWords(co_applicant_annual_income,5)"  type="tel" v-model="co_applicant_annual_income" placeholder="XXXXX">
										<div class="numToWords" v-html="no_to_words_co_applicant_emi">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Gross Annual Income</label>
										<input class="form-control"  @keyup="convertNumberToWords(gross_annual_income,6)" type="tel" v-model="gross_annual_income" placeholder="XXXXX">
										<div class="numToWords" v-html="no_to_words_gross_anual_income">adas</div>

									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightTerms">
									<label><input type="checkbox" checked="checked">I have read and agree to the <a href="#" target="_blank">terms and conditions</a></label>
								</div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(3)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="update()" class="btn btn-primary next-btn">Submit</a>
								</div>
								
							</div>	<!-- newpl_step4 -->
							
						</div>
						
					</form>
				</div>
			</div>
		</div>
	</div>
		
		<div style="clear:both;"></div>
		
		<div class="contentMainDiv">
		<div class="contentHeading">
			<h1>Instant Home Loan Online Apply</h1>
		</div>
		 
		<div class="contentInnerDiv padding50">
			<div class="container">
				<p><b>What is a Home Loan for self-employed?</b></p>
				<p>Home loan for self-employed refers to the sum of money borrowed by a self-employed businessman to buy a property. In this case borrower gives guarantee for the property even though they are entitled to use the property for residential purpose.</p>
				
				<p><b>How much home loan for self-employed is sanctioned by the banks?</b></p>
				<p>Financial institutes usually fund 75%-90% of the property's market value. Borrowers income profile along with banks internal lending policies also determine the value.</p>
				
				<p><b>Why should you go for a Home loan for self-employed?</b></p>
				<p>For many people having a home of their own is a dream. Self-Employed individuals are independent in terms of working, having a home loan for self-employed option helps them to find their own comfort.</p>
				<p>Convenience, easy processing, and comfortable loan tenure make it all the more easy to opt for the home loan for self-employed. This is one product offered by most of the banking institutions at interest rates varying from 8.85%-10% with easy documentation process making it a viable loan product for the borrowers who are self-employed.</p>
				
				<p><b>What documents are required for availing Home Loan for self-employed?</b></p>
				<p></p>
				<p><b>Some key benefits of Home Loans?</b></p>
				<div class="contentList">
					<p>Personal Documents</p>
					<ul>
						<li class="tick">Application form with Passport Size Photographs of applicant and co-applicants</li>
						<li class="tick">PAN Card of applicant and co-applicant</li>
						<li class="tick">Identity Proof – Voter ID / Driving License / Passport / Aadhar Card</li>
						<li class="tick">Address Proof – Voter ID / Driving License / Passport / Telephone Bill / Electricity Bill</li>
					</ul>
					<br>
					<p>Financial Documents</p>
					<ul>
						<li class="tick">Latest audited ITR and financials for the last 3 years including Balance Sheet, Profit & Loss A/c., Computation of Income along with all schedules and audit report of the business entity</li>
						<li class="tick">Past 12 months Bank statements from the borrower's main account/s as mentioned in the Balance Sheet for the latest year</li>
						<li class="tick">GST returns of the last 12 months</li>
						<li class="tick">Sanction letter and repayment track of any running loan</li>
					</ul>
				</div>
				
				 
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading">Home Loan Specific FAQs</h2>	
				<div class="faqsDiv" id="faqID">
					<div class="container">
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the eligibility for home loan ?</b><br>
								Broadly speaking, anyone aged between 23 and 65 years and is not retired is eligible, The following criteria are also important because they determine your potential to repay the loan: Purpose of the loan, you income assets and liabilities, your spouse’s income in case you’re applying for a joint loan educational qualifications, professional experience, credit score (the prospect of getting a loan increases with a good credit score), residential status and number of dependents, Most of the financial institutions determine your potential to repay based on the above parameters.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What are the different types of home loan ?</b><br>
								There are various types of home loans depending upon your specific requirement. Some of the key ones are as follows:
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">Land purchase loans : These loans are granted to individuals for the purchase of land on which they intend to build a house</li>
										<li class="tick">Home purchase loans: These are the most common type of home loans that is granted to individuals and they are granted for the purchase of an apartment.</li>
										<li class="tick">Home construction loan: This type of loan is granted to individuals for the construction of a house on a plot of land that is already owned by the applicant.</li>
										<li class="tick">Home Expansion/Extension Loan: This loan is specifically granted to individuals who want to expand their current home to include a new construction such as an additional floor, room, bathroom, etc.</li>
										<li class="tick">Home Improvement Loan: Existing home owners who lack sufficient funds to renovate their existing home can apply for this loan to upgrade their home with a new paint job, electrical wiring, water proofing, etc.</li>
										<li class="tick">Home conversion loans: Using this type of home loan, an existing home owner can add to their existing loan so that they can purchase a new house. This type of loan is only applicable to existing home owners.</li>
										<li class="tick">NRI Home Loans: These home loans are specifically designed to provide non-resident Indians with financing so that they can purchase a home in India.</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How long does it take to get business loan ?</b><br>
								Normally, it take around 4-7 working days to get the loan disbursed after providing all the documents.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the business loan amount one can avail ?</b><br>
								An unsecured business loan ranges from Rs 2 lakhs up to Rs 75 lakhs, depending upon the financial eligibility.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the Interest Rates ?</b><br>
								Interest rates entirely depend upon the loan amount, credit assessment, and other risk-based parameters applicable from time to time. The rate is usually fixed for the full tenure of the loan.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the Tenure of Business Loan ?</b><br>
								The tenure generally ranges from 12 to 60 months.
								</p>
							</div>
						</div>
						
					</div>
				</div>
				
				
				 
			</div>
		</div>
		
	</div>
	<div style="clear:both;"></div>

	<!-- Modal -->
	<div class="modal fade" id="mobileotp" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Verification</h4>
				</div>
				<div style="clear:both;"></div>
				<div class="modal-body">
					<div class="mobile_mail">
						<img src="images/mobile_mail.png">
					</div>
					<div class="mobile_otp_content">
						<p>We have sent you an access code via SMS for Mobile number verification</p>
					</div>
					<div class="mobile_otp_code">
						<p>enter code here</p>
						<div class="otp_inputs">
							<input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
							<input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
							<input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
							<input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" class="optinput1234" />
							<div style="clear:both;"></div>
							<button class="btn btn-primary btn-embossed">Verify</button>
						</div>
						<h5>Didn't receive the code?</h5>
						<a href="" class="send_code_again">Send code again</a>
						<div style="clear:both;"></div>
					</div>
					<div style="clear:both;"></div>
				</div>
			</div>
		</div>
	</div>
		<app-footer></app-footer>
    </div>
</template>
<script src = "./HomeLoanSelfEmployed.js"></script> 
