<template>
    <div>
		<app-header></app-header>
		
		<div class="formMainDiv">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="/">Home</a></li>
					<li>>></li>
					<li>Loan Against Property</li>
				</ul>
			</div>
			<div class="row formInnerDiv">
				<div class="col-lg-4 col-md-4 col-sm-4 col-12 formInnerLeft">
					<ul>
						<li id="b1" class="bluebg1 active">
							<div class="numbers">1</div>
							<div class="stepDetails"><p><span>Basic Details</span></p></div>
						</li>
						<li id="b2" class="bluebg2 ">
							<div class="numbers">2</div>
							<div class="stepDetails"><p><span>Verification Details</span></p></div>
						</li>
						<li id="b3" class="bluebg3 ">
							<div class="numbers">3</div>
							<div class="stepDetails"><p><span>Property Details</span></p></div>
						</li>
						<li id="b4" class="bluebg4 ">
							<div class="numbers">4</div>
							<div class="stepDetails"><p><span>Financial Details</span></p></div>
						</li>
						<li id="b5" class="bluebg5">
							<div class="numbers">5</div>
							<div class="stepDetails"><p><span>Get Offers</span></p></div>
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
										<label>Name</label>
										<input @focus="toggleBorder" class="form-control" id="name" type="text" v-model="name" placeholder="Enter Full Name">
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>Net Salary</label>
										<input @focus="toggleBorder" class="form-control" id="net_salary" onKeyPress="if(this.value.length==7) return false;" type="number" v-model="net_salary" @keyup="convertNumberToWords(net_salary,2)" placeholder="Enter Net Salary">
										<div class="numToWords" v-html="no_to_words_salary">adas</div>
									</div>	<!-- formInputFields -->
									<div class="formInputFields newsalHL">
										<label>City</label>
										<typeahead :data = "cities" 
											:serializer="name => name.name" 
											:minMatchingChars = "1"
											v-model="city"
											placeholder="Type and Select City"
											ref="city">
											</typeahead>
									</div>	<!-- formInputFields -->
									
									
								</div> 
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields newsalHL">
										<label>Require Loan Amount</label>
										<input @focus="toggleBorder" id="required_loan_amount" onKeyPress="if(this.value.length==9) return false;" class="form-control" type="number" @keyup="convertNumberToWords(required_loan_amount,1)" v-model="required_loan_amount" placeholder="Input Desired Loan Amount">
										<div class="numToWords" v-html="no_to_words">adas</div>
									</div>	<!-- formInputFields -->
									<div class="row">
										<div class="col-md-5">
											<div class="formInputFields newsalHL">
										<label>Date of Birth</label>
										<datepicker @focus="toggleBorder" :bootstrap-styling="true" :disabled-dates="state.disabledDates" @selected="chnageClass" :input-class="{'is-invalid':bootstrapStyling, 'is-invalid':!bootstrapStyling}" id="dob" :open-date="new Date('1999-01-01')" v-model="date_of_birth" lang="en" type="month" format="yyyy-MM-dd" placeholder="Please Select"></datepicker>
									</div>
									
										</div>
										<div class="col-md-7">
									<div class="formInputFields newsalHL">
										<label>Mobile</label>
										<input @focus="toggleBorder" id="mobile" onKeyPress="if(this.value.length==10) return false;" class="form-control" type="number" v-model="mobile" placeholder="Enter Mobile No." maxlength="10">
									</div>	<!-- formInputFields -->
										</div>
										
											<!-- formInputFields -->
									
									</div>
										<div class="formInputFields newsalHL">
										<label>Email ID</label>
										<input @focus="toggleBorder" id="email" class="form-control" type="email" v-model="email" placeholder="Enter Valid Email ID">
									</div>	<!-- formInputFields -->
									
								</div> 
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary next-btn" @click="create()">PROCEED</a>
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
										<h5 class="dontReceCode">Didn't receive the code? <a href="javascript:void(0)" @click="sentOtp" class="send_code_again">Send code again</a></h5>
										
										<div style="clear:both;"></div>
									</div>
									<div style="clear:both;"></div>
								</div>
								<div style="clear:both;"></div>
								<div class="formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(1)" class="btn btn-primary prev-btn">Previous</a>
								</div>
							</div>	<!-- newpl_step2 -->
							
							<div class="row" id="newshl_step3" v-show="step_3">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Property To Mortgage</label>
										<select @focus="toggleBorder" id="property_to_mortgage" class="form-control" v-model="property_to_mortgage" name="">
											<option value="">Select Property </option>
											<option value="Residential Property">Residential Property</option>
											<option value="Commercial Property">Commercial Property</option>
											<option value="Industrial Property">Industrial Property</option>
										</select>
									</div>	<!-- formInputFields -->
									
									<div class="formInputFields">
										<label>Rental Income</label>
										<input @focus="toggleBorder" @keyup="convertNumberToWords(rental_income,3)" id="rental_income" class="form-control" v-model="rental_income" type="number" placeholder="Enter Rental Income">
										<div class="numToWords" v-html="no_to_words_rent_income">adas</div>
									</div>	<!-- formInputFields -->
									
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Property Occupied Status </label>
										<select @focus="toggleBorder" id="property_occupied_status" class="form-control" v-model="property_occupied_status" name="">
											<option value="">Select Property </option>
											<option value="Self Occupied">Self Occupied</option>
											<option value="Rented to Others">Rented to Others</option>
											<option value="Vacant">Vacant</option>
											<option value="Plot">Plot</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields">
										<label>Market Value of Property</label>
										<input @focus="toggleBorder" @keyup="convertNumberToWords(market_value,4)" id="market_value" class="form-control" v-model="market_value" type="number" placeholder="Enter Market Value of Property">
										<div class="numToWords" v-html="no_to_words_market_val">adas</div>
									</div>	<!-- formInputFields -->
									
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(1)"  class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(4)" class="btn btn-primary next-btn" data-toggle="modal">PROCEED</a>
								</div>
							</div>	<!-- newpl_step3 -->
							
							<div class="row" id="newshl_step4" v-show="step_4">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Any Existing EMI</label>
										<input @focus="toggleBorder" @keyup="convertNumberToWords(any_emi,5)" id="any_emi" class="form-control" v-model="any_emi" type="number" placeholder="Enter Existing EMI">
										<div class="numToWords" v-html="no_to_words_existing_emi">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Co-applicant Annual Income</label>
										<input @focus="toggleBorder" @keyup="convertNumberToWords(co_applicant_annual_income,6)" id="co_applicant_annual_income" class="form-control" v-model="co_applicant_annual_income" type="number" placeholder=" Enter Co-applicant Annual Income">
										<div class="numToWords" v-html="no_to_words_co_annual">adas</div>
									</div>	<!-- formInputFields -->
								</div>
								
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightTerms" style="padding-top:132px!important">
									<label><input type="checkbox" id="term_condition">I have read and agree to the <a href="#" target="_blank">terms and conditions</a></label>
								</div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(3)"  class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(0)" class="btn btn-primary next-btn" data-toggle="modal" data-target="#mobileotp" >PROCEED</a>
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
			<h1>Instant Loan Against Property for Salaried Online Apply</h1>
		</div>
		 
		<div class="contentInnerDiv padding50">
			<div class="container">
				<p><b>What is a loan against property for Salaried?</b></p>
				<p>It is a secured loan where the property is pledged to borrow the amount from the bank. The loan can be availed against property owned by the borrower for residential, commercial or the industrial purposes. In comparison to personal loans, loan against property for Salaried is a better option for salaried income individual who wants to meet any personal requirements with a bigger amount. Such a loan enables more repayment time along with lesser interest rates. Loan is provided by the banks which is usually 50%-80% of market value of the property mortgaged.</p>
				
				<p><b>Why should one opt for Loan against property for Salaried?</b></p>
				<p>Both personal loan and loan against property for Salaried are good options for the borrower coming from a salaried background. Loan against property for Salaried offers wider benefits to the customers.</p>
				<p>The leading banks including the traditional lenders offer the loan against property for Salaried making it conveniently available. Loan against property for Salaried has better tenures and a larger amount is sanctioned against property in comparison to personal loans. Also, interest rates are much lower to personal loans and hence lower EMI. Hence, this makes it a suitable option for a salaried person to utilize their salary to the maximum potential.</p>
				
			 
				<p><b>Which are the documents to be submitted for taking a loan against property for Salaried?</b></p>
				<p><b>Personal Documents</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Application form with Passport Size Photographs of applicant and co-applicants</li>
						<li class="tick">PAN Card of applicant and co-applicant</li>
						<li class="tick">Identity Proof – Voter ID / Driving License / Passport / Aadhar Card</li>
						<li class="tick">Address Proof – Voter ID / Driving License / Passport / Telephone Bill / Electricity Bill</li>
						<li class="tick">Ownership proof of residence either in the name of the applicant or jointly with family members.</li>
					</ul>
				</div>
				 
				
				<p><b>How do I apply?</b></p>
				<p>LoansJagat has a tie-up with various banks who offer customized Loan against property for Salaried options depending upon your requirement. An applicant from a salaried background has to answer 2 basic questions which are based on personal & financial numbers. Post reply, the system automatically shows various options available to the borrower from different banks to choose and decide.</p>
				<p>Once decided LoansJagat gives the option for proceeding further either online or offline with the documentation process. During this journey, a loan expert from the company helps you out for expediting the process. The borrower has complete online access to track the loan application.</p>
				
				<p><b>Why should I go with LoansJagat?</b></p>
				<p>We take pride in having the expertise to cater to the requirement seamlessly since our inception in the year 2002.  Our dedicated loan expert provide you with an excellent customer experience. Our efforts have been recognized by various institutions and we have an association with 40 banks and NBFCs which gives customers multiple loan options to choose from. We are a process oriented and digitised company safeguarding the interests of customers and their confidential personal data. </p>
				
				<p><b>Going to take Loan against Property for Salaried. Refrain from making these Mistakes!</b></p>
				<p>Loan against property for Salaried is one of the most popular products offered by the banks. It is a secured loan and one should be clear about the details of the product before taking it.</p>
				<p>Let us take an example of Raghu, he earns Rs.60 thousand every month. He needs Rs.15 lakh to meet his expenses for future investments or emergency. Given his income level he should be careful about the following:</p>
				
				<div class="contentList">
					<ul>
						<li class="tick"><b>Property being pledged </b> - Clear Valuation papers of the property should be in place. Along with the knowledge that not the entire amount basis valuation can be expected as a loan from the bank. Hence, it's better to have loan amount lesser than the property amount.</li>
						<li class="tick"><b>Rates </b> - Personal loan interest rates are more than loan against property for Salaried. In case the bank is charging you more or equivalent to personal loan rates then it's better to check with other financial institution.</li>
						<li class="tick"><b>Ownership </b> - In case property has co-owners, better to have their documents in place as well along with their consent without which documentation can be on hold.</li>
						<li class="tick"><b>Custody - </b>Be very clear to read the terms and conditions like ownership and charges in case of late payments or inability to repay back the loan. The borrower has the right to utilize the pledged property, but the bank has the right to take it when one defaults.</li>
					</ul>
				</div>
				<p>Be Clear from all Aspects before it is too Late and use LoansJagat to compare the best loan against property for salaried!</p>
				
				
				<h2 class="middleHeading">Loan Against Property Specific FAQs</h2>	
				
				<div class="faqsDiv" id="faqID">
					<div class="container">
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Who can avail a loan against property?</b></p>
								<div class="contentList">
									<ul>
										<li class="tick">Individuals - Salaried / Professionals / Self-employed</li>
										<li class="tick">Non-individual entities - Proprietorship firms / Partnership firms / Private limited companies / Public limited companies.</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How much loan can I avail against the property?</b><br>
								The loan amount depends on the property type, valuation and bank's policy. Generally, you can get a loan for maximum up to 100% of the property value.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the eligibility for loan against property?</b></p>
								<div class="contentList">
									<ul>
										<li class="tick">Anyone aged between 22 and 65 years who is not retired is eligible</li>
										<li class="tick">Your income Assets and liabilities</li>
										<li class="tick">Credit score and history (the prospect of getting a loan increases with a good credit score)</li>
										<li class="tick">The type and value of property</li>
										<li class="tick">Residential status.</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>My property is co-owned by my parents/ spouse/ relatives. Can I apply for a loan individually or do I need a co-applicant?</b><br>
								If the property is co-owned, all co-owners need to be co-applicants.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the loan processing time for LAP?</b><br>
								It usually takes 7-15 working days after all the documents are submitted. The process includes evaluating your property value through a credit, legal and technical accessor.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How would the value of my property be determined?</b><br>
								It will be determined through a valuation conducted by independent credit accessor appointed by the banks/NBFCs.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How do I apply for a loan against property?</b><br>
								You can first compare among different banks and NBFCs for the loan amount, rate of interest, time period and others facilities provided by them on the Loansjagat platform and than as per your convenience you can apply both online as well as offline.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Do I need a co-applicant for this loan?</b><br>
								A co-applicant for loan against property is required if you want to support better financial position to avail higher loan amount. Also co-applicant is required mandatory when the property being mortgaged is owned by more than one person. In all such cases, all co-owners of the property mandatorily become co-applicants.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What do you mean by the market value of a property?</b><br>
								The market value of a property is the estimated value in terms of money that a property can raise if it is sold at prevailing conditions.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>For how long can I take a loan against property and what interest rate will I be charged?</b><br>
								The tenure of a loan against property usually can be as long as 15 years, with interest rates typically ranging from 8.75% to 15.75%. The exact tenure and interest rate on your loan may vary to a certain extent from one lender to another.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Can NRIs avail loans against property?</b><br>
								Yes, several financial institutes offer loans against property to NRIs, subject to verification of all documents.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What can Loan against Property be used for?</b><br>
								Any loan against a residential or commercial property can be used for both personal and business purposes. In fact, you can use it for anything other than speculative or non-prohibitive activities.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What are the processing fees for such a loan?</b><br>
								Processing fee for loan against any property varies from bank to bank and is generally around 1 percent.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Does one have to provide any security to avail this loan? If yes, what kind of security?</b><br>
								Yes, a loan against property can be availed only after attaching the property as security. The property so attached should have clear titles and should be free from encumbrance. It should not have any existing loan, mortgage or litigation which can impact the title of the property.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Are self-employed individuals eligible for loan against property?</b><br>
								Yes, self-employed individuals can avail of this loan provided they have sufficient documents and repayment capacity.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Does the property in question have to be insured?</b><br>
								Yes, most banks require the property to be insured before providing a loan.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How does one get back the property pledged as security?</b><br>
								The property pledged as security will be returned back to the owner once the entire loan amount is cleared and there are no pending dues.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Can a loan against property be availed against rented property?</b><br>
No, Loan against property can only be availed against own property of the applicant (whether Residential or Commercial or Industrial).
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Why should I opt for a Loan Against Property instead of a Personal and Business Loan?</b><br>
								A Loan Against Property (LAP) has many advantages over these Loans. They include:
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">A Higher Loan Amount: Typically, a LAP may offer a higher loan amount than these Loan.</li>
										<li class="tick">Lower rate of interest: With secured collateral rate of interest tends to be lower than these loans with no collateral.</li>
										<li class="tick">Longer tenure: A LAP can be availed for a long term than these Loans.</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the minimum and maximum amount of Loan Against Property that I can get?</b><br>
								You can get a Loan Against Property from Rs. 10 lakhs to Rs. 50 crores. Some of the factors that banks consider when deciding a loan amount are:
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">The property's registration</li>
										<li class="tick">The property's market value</li>
										<li class="tick">Your requirement and eligibility</li>
										<li class="tick">Your income and repayment capacity.</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What documents do I need to submit along with my application for a Loan Against Property?</b><br>
								Along with your application you need to submit the following documents:
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">Proof of residence</li>
										<li class="tick">Proof of identity</li>
										<li class="tick">Certified / latest financial documents</li>
										<li class="tick">Copies of all property documents (which to be submitted as collateral).</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How do I know if my property is eligible for loan against it?</b><br>
								It depends upon various factors such as :
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">Area location of the property</li>
										<li class="tick">Size of the property</li>
										<li class="tick">Construction of the property</li>
										<li class="tick">Status of the property (i.e. Self- Occupied / Rented / Vacant)</li>
										<li class="tick">Type of the property (i.e. Residential / Commercial / Industrial)</li>
									</ul>
								</div>
								<p>To know if your property is eligible for loan, click on (know your property page).</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Is salaried person eligible for loan against property?</b><br>
								Yes, a salaried person is eligible provided he/she gives suitable purpose of taking loan.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1  col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What are the physical events of loan against property?</b><br>
								The physical events involved are:-
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">The valuation of the property</li>
										<li class="tick">For higher loan amount, a personal discussion with the bankers to understand your financial position for the purpose of repayment of loan</li>
										<li class="tick">Residential and office verification.</li>
									</ul>
								</div>
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
<script src = "./LoanAgainstPropertySalaried.js"></script> 
