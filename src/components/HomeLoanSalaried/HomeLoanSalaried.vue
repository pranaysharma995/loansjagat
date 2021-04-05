<template>
    <div>
		<app-header></app-header>
		<div class="formMainDiv">
			<div class="container">
				<div class="formBreadcrum">
					<ul>
						<li><a href="/">Home</a></li>
						<li>>></li>
						<li>Home Loans for Salaried</li>
					</ul>
				</div>
				<div class="row formInnerDiv">
					<div class="col-lg-4 col-md-4 col-sm-4 col-12 formInnerLeft">
						<ul>
							<li class="bluebg1 active" @click="showStep(1)" id="shl1">
								<div class="numbers">1</div>
								<div class="stepDetails"><p><span>Basic Details</span></p></div>
							</li>
							<li class="bluebg2" @click="showStep(2)" id="shl2">
								<div class="numbers">2</div>
								<div class="stepDetails"><p><span>Mobile Verification</span></p></div>
							</li>
							<li class="bluebg3" @click="showStep(3)" id="shl3">
								<div class="numbers">3</div>
								<div class="stepDetails"><p><span>Personal Details</span></p></div>
							</li>
							<li class="bluebg4" @click="showStep(4)" id="shl4">
								<div class="numbers">4</div>
								<div class="stepDetails"><p><span>Financial Details</span></p></div>
							</li>
							<li class="bluebg5" id="">
								<div class="numbers">5</div>
								<div class="stepDetails"><p><span>Get Offers</span></p></div>
							</li>
						</ul>
					</div>
					<div class="col-lg-8 col-md-8 col-sm-8 col-12 formInnerRight">
						<div class="formInnerRightHead">
							<h2>Compare &amp; Apply for Salaried Home Loan</h2>
						</div>
						<form action="" method="">
							<div class="formInnerRightFields">
								<div class="row" id="" v-show="shl_step_1">
									<div class="col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="formInputFields newsalHL">
											<label>Your Loan Amount</label>
											<input type="number" @focus="toggleBorder" id="loan_amount" class="form-control" v-model="loan_amount" @keyup="convertNumberToWords(loan_amount,1)" placeholder="Input Desired Loan Amount">
											<div class="numToWords" v-html="no_to_words">adas</div>
										</div>	<!-- formInputFields -->
										
										<div class="formInputFields newsalHL">
											<label>Mobile</label>
											<input type="number" @focus="toggleBorder" id="mobile" class="form-control" v-model="mobile" placeholder="Enter Mobile No">
										</div>	<!-- formInputFields -->
										
										<div class="formInputFields newsalHL">
											<label>Email ID</label>
											<input type="email" @focus="toggleBorder" id="email_id" class="form-control" v-model="email_id" placeholder="Enter Valid Email ID">
										</div>	<!-- formInputFields -->
									</div> 
									
									<div class="col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="formInputFields newsalHL">
											<label>Net Salary</label>
											<input type="number" @focus="toggleBorder"  id="net_salary" class="form-control" v-model="net_salary" @keyup="convertNumberToWords(net_salary,2)" placeholder="Enter Net Salary">
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
										
										<div class="formInputFields">
											<label>Date of Birth</label>
											<datepicker placeholder="Please Select"  @focus="toggleBorder" :bootstrap-styling="true" :disabled-dates="state.disabledDates" @selected="chnageClass" :input-class="{'is-invalid':bootstrapStyling, 'is-invalid':!bootstrapStyling}" id="date_of_birth" :open-date="new Date('1999-01-01')" v-model="date_of_birth" lang="en" type="month" format="yyyy-MM-dd"></datepicker>
										</div>

									</div> 
									<div style="clear:both;"></div>
									<div class="col-lg-12 formInnerRightProceed">
										<a href="javascript:void(0)" class="btn btn-primary next-btn" @click="create()" data-toggle="modal" data-target="#mobileotp" >Proceed</a>
									</div>
								</div>	<!-- newpl_step1 -->
								
								<div class="row" id="" v-show="shl_step_2">
									
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
								
								<div class="row" id="" v-show="shl_step_3">
									<div class="col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="formInputFields">
											<label>Market Value of Property</label>
											<input @focus="toggleBorder" type="number" id="market_value" class="form-control" v-model="market_value" @keyup="convertNumberToWords(market_value,3)"  placeholder="Enter Market Value of Property">
											<div class="numToWords" v-html="market_value_text">adas</div>
										</div>	<!-- formInputFields -->
										
										<div class="formInputFields">
											<label>Property Type</label>
											<select @focus="toggleBorder" id="property_type" class="form-control" v-model="property_type">
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
											<input @focus="toggleBorder"  id="registry_value1" type="number" class="form-control" v-model="registry_value"  @keyup="convertNumberToWords(registry_value,4)" placeholder="Enter Registry Value of Property">
											<div class="numToWords" v-html="registry_value_text">adas</div>
										</div>	<!-- formInputFields -->
									</div> 
									
									<div style="clear:both;"></div>
									<div class="col-lg-12 formInnerRightProceed">
										<a href="javascript:void(0)" @click="showStep(1)" class="btn btn-primary prev-btn">Previous</a>
										<a href="javascript:void(0)" @click="validate(4)" class="btn btn-primary next-btn">Proceed</a>
									</div>
								</div>	<!-- newpl_step3 -->
								
								<div class="row" id="" v-show="shl_step_4">
									<div class="col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="formInputFields">
											<label>Co-applicant Annual Income</label>
											<input @keyup="convertNumberToWords(co_applicant_annual_income,5)" @focus="toggleBorder" type="number" id="co_applicant_annual_income" class="form-control" v-model="co_applicant_annual_income" placeholder="Enter Co-applicant Annual Income">
											<div class="numToWords" v-html="no_to_words_co_aplicant">adas</div>
										</div>	<!-- formInputFields -->

										<div class="formInputFields">
											<label>Any Existing EMI</label>
											<input @keyup="convertNumberToWords(any_existing_emi,6)" @focus="toggleBorder"  type="number" id="any_existing_emi" class="form-control" v-model="any_existing_emi" placeholder="Enter Existing EMI">
											<div class="numToWords" v-html="no_to_words_existing_emi">adas</div>
										</div>	<!-- formInputFields -->
									</div> 
									
									<div class="col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="formInputFields">
											<label>Rental Income</label>
											<input @keyup="convertNumberToWords(rental_income,7)"  @focus="toggleBorder" type="number" id="rental_income" class="form-control" v-model="rental_income" placeholder="Enter Rental Income">
											<div class="numToWords" v-html="no_to_words_rental_income">adas</div>
										</div>	<!-- formInputFields -->
									</div> 
									
									<div style="clear:both;"></div>
									<div class="col-lg-12 formInnerRightTerms">
										<label><input type="checkbox" id="term_condition">I have read and agree to the <a href="#" target="_blank">terms and conditions</a></label>
									</div>
									<div class="col-lg-12 formInnerRightProceed">
										<a href="javascript:void(0)" @click="showStep(3)" class="btn btn-primary prev-btn">Previous</a>
										<a href="javascript:void(0)" @click="validate(0)" class="btn btn-primary next-btn">Submit</a>
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
				<p><b>What is a Home Loan for Salaried?</b></p>
				<p>Home loans refers to the sum of money borrowed by a salaried individual to buy their dream property. In this case borrower gives guarantee for the property even though they are entitled to use the property for residential purpose.</p>
				
				<p><b>How much home loan on Salary is sanctioned by the banks?</b></p>
				<p>Financial institutes usually fund 75%-90% of the property's market value. Borrowers income profile along with banks internal lending policies also determine the value. The remaining amount needs to be self-financed by the borrower ranging from 10% to 25%.</p>
				
				<p><b>Why should you avail a Home loan for Salaried?</b></p>
				<p>For many people having a home of their own is a dream. Given the limited income it’s a lucrative option for them. Home loans for salaried allows one to avail tax exemptions and build own house with the future salary income, such a home loan on salary allows one to fulfil their aspirations. </p>
				<p>Convenience, easy processing, and comfortable loan tenure makes it all the more easy to opt for the home loan for salaried. This is one product offered by most of the banking institutions at interest rates varying from 8.75%-11% with easy documentation process making it a viable loan product.</p>
				
				
				<p><b>What documents are required for availing the Home Loan for Salaried?</b></p>
				<p><b>Personal Documents</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Application form with Passport Size Photographs of applicant and co-applicants</li>
						<li class="tick">PAN Card of applicant and co-applicant</li>
						<li class="tick">Identity Proof – Voter ID / Driving License / Passport / Aadhar Card</li>
						<li class="tick">Address Proof – Voter ID / Driving License / Passport / Telephone Bill / Electricity Bill</li>
					</ul>
				</div>
				<p><b>Financial Documents</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Latest 12 months bank statement of salary account</li>
						<li class="tick">Last 3 months salary slips </li>
						<li class="tick">Form 16 of last financial year</li>
						<li class="tick">Latest 2 years Income Tax Returns</li>
					</ul>
				</div>
				
				<p><b>How do I apply?</b></p>
				<p>LoansJagat has a tie-up with various banks and NBFCs who offer home loan on Salary options depending upon your requirement. An applicant from a salaried background has to answer 2 basic questions which are based on personal & financial numbers.  Post reply, the system automatically shows various options available to the borrower from different banks to choose and decide. </p>
				<p>Once decided LoansJagat gives the option for proceeding further either online or offline with the documentation process. During this journey, a loan expert from the company helps you out for expediting the process. The borrower can always track the loan application. </p>
				
				<p><b>Why should I go with LoansJagat?</b></p>
				<p>LoansJagat is a leading platform which enables individuals and businesses to get access to best loan offers from over 40 banks and NBFCs with complete flexibility and transparency to choose from. Started in 2002, LoansJagat is a process-oriented organization that has stringent customer safeguard policies and offers a world-class customer experience.</p>
				
				<p><b>Applying for a Home loan on Salary? Don’t make these mistakes!</b></p>
				<p>Having a home loan on salary is a dream cherished by many individuals in the society. Loans provided today are the stepping stone for one to actualise that dream.</p>
				<p>Let us take example of Rohan whose yearly salary is Rs 15 lakh and has decided to purchase a house in Delhi and thus needs a home loan for Salaried of Rs 50 Lakh. He wants to ensure that all his requirements are fulfilled without him taking any other personal loan and EMI should not be a burden to him when he is on his way to fulfil his long-cherished dream. In order to a hassle-free experience while getting bank approval for loan, he should avoid making following mistakes:</p>
				
				<div class="contentList">
					<ul>
						<li class="tick"><b>Paperwork</b> - Clarity should be given to the banks about the objective as a first step. Financial institutes are within their rights to know how and where funds will be used. Also, keep all the required documents pertaining to income and property ready which form the basis for approval. </li>
						<li class="tick"><b>Financial position</b> - Borrower should have a clear calculation about their investments for home loan on salary. This will help them in having the visibility that how many loans they can afford and how much EMI is payable against loan that shall not eat away all their salary. </li>
						<li class="tick"><b>Credit Rating</b> - Borrower should be aware of their creditworthiness. Most of the banks check customers past loan history and their repayment trends to arrive on final conclusion on principal and interest for the home loan for salaried.</li>
						<li class="tick"><b>Agreement Terms</b> - It is the responsibility of the borrower to read the terms of the agreement clearly before signing. One should be clear about the charges that come with the loan in case of pre-closure, late payment of EMI's. </li>
					</ul>
				</div>
				
				 
				 
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading">Salaried Home Loan Specific FAQs</h2>	
				
				<div class="faqsDiv" id="faqID">
					<div class="container">
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What is the eligibility for home loan?</b><br>Broadly speaking, anyone aged between 23 and 65 years and is not retired is eligible. The following criteria are also important because they determine your potential to repay the loan: Purpose of the loan, your income assets and liabilities, your spouse’s income in case you’re applying for a joint loan educational qualifications, professional experience, credit score (the prospect of getting a loan increases with a good credit score), residential status and number of dependents. Most of the financial institutions determine your potential to repay based on the above parameters.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What are the different types of home loan?</b><br>There are various types of home loans depending upon your specific requirement. Some of the key ones are as follows:</p>
								<div class="contentList">
									<ul>
										<li class="tick"><b>Land purchase loans</b> -  These loans are granted to individuals for the purchase of land on which they intend to build a house.</li>
										<li class="tick"><b>Home purchase loans </b> - These are the most common type of home loans that is granted to individuals and they are granted for the purchase of an apartment.</li>
										<li class="tick"><b>Home construction loan </b> - This type of loan is granted to individuals for the construction of a house on a plot of land that is already owned by the applicant.</li>
										<li class="tick"><b>Home Expansion/Extension Loan </b> - This loan is specifically granted to individuals who want to expand their current home to include a new construction such as an additional floor, room, bathroom, etc.</li>
										<li class="tick"><b>Home Improvement Loan </b> - Existing home owners who lack sufficient funds to renovate their existing home can apply for this loan to upgrade their home with a new paint job, electrical wiring, water proofing, etc.</li>
										<li class="tick"><b>Home conversion loans</b> - Using this type of home loan, an existing home owner can add to their existing loan so that they can purchase a new house. This type of loan is only applicable to existing home owners.</li>
										<li class="tick"><b>NRI Home Loans</b> - These home loans are specifically designed to provide non-resident Indians with financing so that they can purchase a home in India.</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What do banks consider when granting a home loan?</b><br>Once repayment capacity determines your eligibility to apply for home loan, lenders consider the following factors:</p>
								<div class="contentList">
									<ul>
										<li class="tick">Income level of the applicant</li>
										<li class="tick">Age of the applicant</li>
										<li class="tick">Qualification (stability and occupation continuity)</li>
										<li class="tick">Resident status (maximum limit for an Indian resident differs from that of a non-resident)</li>
										<li class="tick">Spouse's income (household income is taken into account when there is a co-applicant)</li>
										<li class="tick">No. of dependants (it is a measure of repayment capacity)</li>
										<li class="tick">Credit history and score (past repayment track record)</li>
										<li class="tick">Status of existing loans.</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Can I avail home finance for renovation or construction of house ?</b><br>Yes. Home loans are offered under various sub-heads. Renovation of property or construction of house is also offered by all major banks in the country and you can do it with the help of home loan easily.</p>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What kind of property documents required at the time of housing loan application?</b><br>Every bank has its own set of mandatory documents to process the loan but this is a generic list:-</p>
								<div class="contentList">
									<ul>
										<li class="tick"><b>New home loan in approved projects:</b> Copy of the allotment letter/buyer agreement Receipt(s) of payment(s) made to the developer.</li>
										<li class="tick"><b>For a loan for a resale home : </b>Draft copy of sale agreement (in case of purchase transaction), property sale agreement along with entire previous chain of sale agreements, receipt/(s) of initial payment/(s) made to the seller, share certificate, occupancy certificate / approved plan copy. </li>
										<li class="tick"><b>For balance transfer : </b>A letter on the letterhead of the existing lender, stating the list of property documents held by them, latest outstanding balance letter from your existing financial institution on their letter head, photocopy of the property documents (including own contribution proof). </li>
										<li class="tick"><b>Loan for constructing your own home : </b>Title deeds of the plot, proof of no encumbrances on the property, copy of the plans approved by the local authorities, construction estimate by an architect/ civil engineer. </li>
										<li class="tick"><b>For self-construction : </b>Approved plans and clearance certificates along with estimates, allotment letters, photocopies of title deeds, encumbrance certificate, agreement to sell. </li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Is there any tax benefit on getting a home loan?</b><br>The tax benefit on home loans is given both on repayment of the principal amount and on interest paid:</p>
								<div class="contentList">
									<ul>
										<li class="tick"><b>Repayment of the principal amount:</b> Under Income Tax Section 80C with a maximum tax deduction of Rs. 150,000.</li>
										<li class="tick"><b>Repayment of the interest rate on home loan:</b> Under Income Tax Section 24, with a maximum deduction limit of Rs. 200,000.</li>
									</ul>
								</div>
							</div>
						</div>
						
						
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What are the key parameters to consider while looking for a home loan in India?</b><br>
								Firstly, you will have to decide whether you’re planning on purchasing a ready for possession house or a plot and construct a house later. Then you have to consider your loan eligibility amount, interest rate, EMI processing fee, pre-closure fees and pre-payment fees.
								</p>
							</div>
						</div>
						
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>What are the tenure options for home loan?</b><br>
								A home loan can be taken for any time period between 5 and 30 years. The tenure varies as per the lender and eligibility of the customer. It is important to remember that your eligibility ends after the age of 65, or when you retire – whichever comes first.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Can I apply for a housing loan with a co-applicant?</b><br>
								Yes, you can apply for a loan with a co-applicant. All you have to do is specify it in the application form, having a co-applicant increases your chances of availing an increased loan amount, depending on his/her profile, income and obligations.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>How long does it take to get my housing loan application processed and the loan sanctioned?</b><br>
								The entire process could take anywhere between 7-10 days for processing a home loan application if all the necessary documents are in order. Additionally, it may take a week or two for the bank to inspect the property papers and make the disbursement. The faster you complete documentation, the faster your application moves.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Do I need to take an insurance for my property? </b><br>
								Yes, you will have to insure the property against fire and other hazards, as required by the bank during the loan tenure.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Can I avail loan to buy a property in other city? </b><br>
								Yes, banks provide loan to purchase property in other cities after validating the property documents.
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
<script src = "./HomeLoanSalaried.js"></script> 
