<template>
    <div>
		<app-header></app-header>
		
		<div class="formMainDiv">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="/">Home</a></li>
					<li>>></li>
					<li>Self-Employed Loan Against Property</li>
				</ul>
			</div>
			<div class="row formInnerDiv">
				<div class="col-lg-4 col-md-4 col-sm-4 col-12 formInnerLeft">
					<ul>
						<li class="bluebg1 active">
							<div class="numbers">1</div>
							<div class="stepDetails"><p><span>Basic Details</span></p></div>
						</li>
						<li class="bluebg2 ">
							<div class="numbers">2</div>
							<div class="stepDetails"><p><span>Verification Details</span></p></div>
						</li>
						<li class="bluebg3 ">
							<div class="numbers">3</div>
							<div class="stepDetails"><p><span>Property Details</span></p></div>
						</li>
						<li class="bluebg4 ">
							<div class="numbers">4</div>
							<div class="stepDetails"><p><span>Business Details</span></p></div>
						</li>
						<li class="bluebg5">
							<div class="numbers">5</div>
							<div class="stepDetails"><p><span>Financial Details</span></p></div>
						</li>
					</ul>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-8 col-12 formInnerRight">
					<div class="formInnerRightHead">
						<h2>Compare &amp; Apply for Loan Against Property</h2>
					</div>
					<form action="" method="">
						<div class="formInnerRightFields">
							<div class="row" id="newshl_step1" v-show="step_1">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields newsalHL">
										<label>Require Loan Amount</label>
										<input @focus="toggleBorder" class="form-control" id="loan_amount_required" v-model="loan_amount_required" @keyup="convertNumberToWords(loan_amount_required,1)" type="number" placeholder="XXXXXXXXX">
										<div class="numToWords" v-html="no_to_words">adas</div>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Date Of Birth</label>
										<datepicker :open-date="new Date('1999-01-01')" :bootstrap-styling="true" :disabled-dates="state.disabledDates" @selected="chnageClass" :input-class="{'is-invalid':bootstrapStyling, 'is-invalid':!bootstrapStyling}" v-model="date_of_birth" lang="en" type="month" format="yyyy-MM-dd"></datepicker>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>City</label>
										<typeahead :data = "cities" 
										:serializer="name => name.name" 
										:minMatchingChars = "1"
										v-model="city"
										ref="city">
										</typeahead>
									</div>	<!-- formInputFields -->
								</div>
								
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields newsalHL">
										<label>Turn Over</label>
										<select @focus="toggleBorder" class="form-control" v-model="turn_over" id="turn_over" name="">
											<option value="">--Please choose an option--</option>
											<option value="5000000">less than 50 lacs</option>
											<option value="7500000">50lacs-1cr</option>
											<option value="15000000">1cr-2cr</option>
											<option value="25000000">2cr-3cr</option>
											<option value="35000000">3cr-4cr</option>
											<option value="45000000">4cr-5cr</option>
											<option value="75000000">5cr-10cr</option>
											<option value="150000000">10cr-20cr</option>
											<option value="350000000">20cr-50cr</option>
											<option value="750000000">50cr-100cr</option>
											<option value="1000000000">more than 100cr</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Mobile</label>
										<input @focus="toggleBorder" class="form-control" id="mobile" v-model="mobile" type="number" placeholder="9999999999">
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Email ID</label>
										<input @focus="toggleBorder" class="form-control" id="email" type="email" v-model="email" placeholder="Enter Valid Email ID">
									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary next-btn" @click="create()" data-toggle="modal" data-target="#mobileotp" >Proceed</a>
								</div>
							</div>	<!-- newpl_step1 -->
							
							<div id="newshl_step2" v-show="step_2">
								
								<div class="newshl_step2_content">
									
									<div class="newshl_step2__mail">
										<img src="@/assets/images/mobile_mail.png">
									</div>
									<div class="newshl_step2__content">
										<p>We have sent you an OTP via SMS for Mobile number verification</p>
									</div>
									<div class="newshl_step2_otp_code">
										<div class="newshl_step2_otp_inputs">
											<input type="text" maxLength="1" size="1" min="0" max="9" v-model="no_one" pattern="[0-9]{1}" class="optinput1234" />
											<input type="text" maxLength="1" size="1" min="0" max="9" v-model="no_two" pattern="[0-9]{1}" class="optinput1234" />
											<input type="text" maxLength="1" size="1" min="0" max="9" v-model="no_three" pattern="[0-9]{1}" class="optinput1234" />
											<input type="text" maxLength="1" size="1" min="0" max="9" v-model="no_four" pattern="[0-9]{1}" class="optinput1234" />
											<div style="clear:both;"></div>
											<button type="button" @click="verifyOTP" class="btn btn-primary btn-embossed">Verify</button>
										</div>
										<h5 class="dontReceCode">Didn't receive the code? <a href="" class="send_code_again">Send code again</a></h5>
										
										<div style="clear:both;"></div>
									</div>
									<div style="clear:both;"></div>
								</div>
								
								<div style="clear:both;"></div>
								
								
							</div>	<!-- newpl_step2 -->
							
							<div class="row" id="newshl_step3" v-show="step_3">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Property To Mortgage</label>
										<select @focus="toggleBorder" class="form-control" name="" id="mortgage" v-model="mortgage">
											<option value="">Select Property </option>
											<option value="Residential Property">Residential Property</option>
											<option value="Commercial Property">Commercial Property</option>
											<option value="Industrial Property">Industrial Property</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Market Value of Property</label>
										<input class="form-control" type="number" @keyup="convertNumberToWords(market_value_property,2)" id="market_value_property" v-model="market_value_property" placeholder="Enter Market Value of Property">
										<div class="numToWords" v-html="no_to_words_market_value">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Property Occupied Status </label>
										<select @focus="toggleBorder" class="form-control" name="" id="property_occupied_status" v-model="property_occupied_status">
											<option value="">Select Property </option>
											<option value="Self Occupied">Self Occupied</option>
											<option value="Rented to Others">Rented to Others</option>
											<option value="Vacant">Vacant</option>
											<option value="Plot">Plot</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(4)" class="btn btn-primary next-btn" data-toggle="modal">PROCEED</a>
								</div>
							</div>	<!-- newpl_step3 -->
							
							<div class="row" id="newshl_step4" v-show="step_4">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Business Type</label>
										<select @focus="toggleBorder" class="form-control" name="" id="business_type" v-model="business_type">
											<option value="">Select Business Type </option>
											<option value="Proprietor">Proprietor</option>
											<option value="Partnership Firm">Partnership Firm</option>
											<option value="Pvt Ltd Company">Pvt Ltd Company</option>
											<option value="Director Applying As An Individual">Director Applying As An Individual</option>
											<option value="Others">Others</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Industry Name</label>
										<select @focus="toggleBorder" class="form-control" id="busi_indus" v-model="busi_indus" @change="filterLists($event, $event.target.selectedIndex)">
											<option value="">Select Industry</option>
											<option v-for="indus in industries" :value="indus.id" :key="indus.id">{{indus.industry}}</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Type of Industry</label>
										<select @focus="toggleBorder" class="form-control" name="" id="industry_type" v-model="industry_type">
											<option value="">Select Industry Type</option>
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
										<label>Industry Item</label>
										<select @focus="toggleBorder" class="form-control" id="busi_indus_item" v-model="busi_indus_item">
											<option>Select Industry Item</option>
											<option v-for="item in items" :value="item.id" :key="item.id">{{item.Item}}</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(3)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(5)" class="btn btn-primary next-btn" data-toggle="modal">PROCEED</a>
								</div>
							</div>	<!-- newpl_step4 -->
							
							<div class="row" id="newshl_step5" v-show="step_5">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Any Existing EMI</label>
										<input @focus="toggleBorder" class="form-control" type="number"  @keyup="convertNumberToWords(any_emi,3)" id="any_emi" v-model="any_emi" placeholder="XXXXX">
										<div class="numToWords" v-html="no_to_words_emi">adas</div>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Co-applicant Annual Income</label>
										<input @focus="toggleBorder" class="form-control" v-model="co_applicant_annual_income" @keyup="convertNumberToWords(co_applicant_annual_income,4)" id="co_applicant_annual_income" type="number" placeholder="XXXXX">
										<div class="numToWords" v-html="no_to_words_annual_income">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Gross Annual Income</label>
										<input @focus="toggleBorder" class="form-control" id="gross_anual_income" @keyup="convertNumberToWords(gross_anual_income,5)" v-model="gross_anual_income" type="number" placeholder="XXXXX">
										<div class="numToWords" v-html="no_to_words_annual_gross_income">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="formInnerRightTerms">
									<label><input type="checkbox" checked="checked">I have read and agree to the <a href="#" target="_blank">terms and conditions</a></label>
								</div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(4)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(0)" class="btn btn-primary next-btn" data-toggle="modal" data-target="#mobileotp" >PROCEED</a>
								</div>
								
							</div>	<!-- newpl_step5 -->
							
						</div>
						
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<div style="clear:both;"></div>
	
	<div class="contentMainDiv">
		<div class="contentHeading">
			<h1>Instant Loan Against Property for Self Employed</h1>
		</div>
		
		<div class="contentInnerDiv padding50">
			<div class="container">
				<p><b>Get to Choose the Best Lender for your Loan Against Property Needs</b></p>
				<p>A Home Loan is one of the best remedies of modern life’s financial concerns. Today, almost everyone comes across cash crunch situations and financial requirements that need funds at the moment, while one can gradually pay them over the period of time, these requirements may vary from education for self or family, medical requirements, need to travel or fulfil a long wishlist of a gadget and several other requirements.</p>
				<p>While there are several ways to get access to funds, asking friends and family may be a risky proportion, thus the best bet is to opt for Home Loans from financial institutions.</p>
				
				<p><b>Some key benefits of Loan Against Property?</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">While Loan Against Property need collaterals. A Home Loan unlike these loans requires a person to have a decent credit profile against which credit is given.</li>
						<li class="tick">There is no requirement of multiple documentation and one needs not visit branches to submit physical documents for Home Loans.</li>
						<li class="tick">A Home Loan is quick and one needs not wait for a long time to get the loans processed. These days the entire process is online and transparent.</li>
						<li class="tick">Keep your credit utilisation ratio under 30% to enhance your credibility.</li>
					</ul>
				</div>
				 
				
				<h2 class="middleHeading" id="documentID">Loan Against Property - Documents Required</h2>	
				<p>The lenders seek the following documents from the Home Loan applicants. These documents can be submitted either as hard copy by physically visiting the bank or by uploading a scanned copy on the digital platform/website of the lender.</p>
				
				<p><b>Employees need the following standard documents and it may change as per the lender.</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Valid Identity Proof e.g. Voter ID Card, PAN Card</li>
						<li class="tick">Address Verification Proof e.g. Aadhar, Passport, DL and Utility Bills</li>
						<li class="tick">Previous 3 Months Bank Statements</li>
						<li class="tick">Latest Salary Slips</li>
					</ul>
				</div>
				
				<p><b>Self-Employed Professional often need following documents for a Loan Against Property</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Proof of Identity like a Passport, Voter ID Card or Aadhar</li>
						<li class="tick">Proof of Address like a Passport, Aadhar Card or Utility Bills</li>
						<li class="tick">Age Proof like Birth Registration and School Certificates</li>
						<li class="tick">PAN Card</li>
						<li class="tick">Latest Bank Statements</li>
						<li class="tick">Past Income Tax Returns of Last 3 Years</li>
						<li class="tick">Balance Sheet and P/L Statements Audited by a registered Chartered Accountant</li>
					</ul>
				</div>
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading" id="eligibilityID">Eligibility of Loan Against Property</h2>	
				<p>There are some different eligibility options for several loans from various banks. The eligibility criteria for the salaried and even the self-employed are different.</p>
				 
				
				<p>Different lenders have different eligibility criteria but more or less the same in the above-stated aspects.</p>
				<p>Here are a few Dos and DONTs to improve your Home Loan eligibility.</p>
				 
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading">Loan Against Property Specific FAQs</h2>	
				
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
				<div style="clear:both;"></div>
				 
				
			</div>
		</div>
		
	</div>
	<div style="clear:both;"></div>
	

		<app-footer></app-footer>

    </div>
</template>
<script src = "./LoanAgainstPropertySelfEmployed.js"></script> 
