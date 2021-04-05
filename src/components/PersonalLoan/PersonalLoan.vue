<template>
    <div>
          <app-header></app-header>

        <div class="formMainDiv">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="/">Home</a></li>
					<li>>></li>
					<li>Personal Loan</li>
				</ul>
			</div>
			<div class="row formInnerDiv">
				<div class="col-lg-4 col-md-4 col-sm-4 col-12 formInnerLeft">
					<ul>
						<li class="bluebg1 active"  id="b1">
							<div class="numbers">1</div>
							<div class="stepDetails"><p><span>Basic Details</span></p></div>
						</li>
						
						<li class="bluebg2" id="b2">
							<div class="numbers">2</div>
							<div class="stepDetails"><p><span>Personal Details</span></p></div>
						</li>

						<li class="bluebg3" id="b3">
							<div class="numbers">3</div>
							<div class="stepDetails" @click="showStep(3)"><p><span>Company Details</span></p></div>
						</li>
						<li class="bluebg4" id="b4">
							<div class="numbers">4</div>
							<div class="stepDetails"><p><span>Financial Details</span></p></div>
						</li>
						<li class="bluebg5" id="b4">
							<div class="numbers">5</div>
							<div class="stepDetails"><p><span>Get Offers</span></p></div>
						</li>
					</ul>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-8 col-12 formInnerRight">
					<div class="formInnerRightHead">
						<h2>Compare &amp; Apply for Personal Loan</h2>
					</div>
					
					<form action="" method="" autocomplete="on">
						<div class="formInnerRightFields">
							<div class="row" id="newpl_step1" v-show="step_1">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="form-group formInputFields">
										<label>Your Loan Amount </label>
										<input type="number"  @focus="toggleBorder"  class="form-control" id="loan_amt" v-model="loan_amount" maxlength="7" @keyup="convertNumberToWords(loan_amount,1)" placeholder="Input Desired Loan Amount">
										<div class="numToWords" v-html="no_to_words">adas</div>
									</div>
								
									<div class="form-group formInputFields">
										<label>Mobile </label>
										<input type="number" @focus="toggleBorder" id="mob" onKeyPress="if(this.value.length==10) return false;"  class="form-control" v-model="mobile" maxlength="10" placeholder="Enter Mobile No.">
									</div>
								
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Net Salary</label>
										<input type="number" onKeyPress="if(this.value.length==8) return false;" maxlength = "7" @focus="toggleBorder" id="net_salary" class="form-control" v-model="net_salary"  @keyup="convertNumberToWords(net_salary,2)" placeholder="Enter Net Salary">
										<div class="numToWords" v-html="no_to_words_salary">adas</div>
									</div>
									
									<div class="formInputFields">
										<label>City</label>
										<typeahead :data = "cities" 
										:serializer="name => name.name" 
										:minMatchingChars = "1"
										v-model="city"
										@focus="toggleBorder"
										ref="spllier_city"
										placeholder="Type and Select City"
										>
										</typeahead>
									</div>
								</div> 
								
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="create(1)" class="btn btn-primary next-btn">Proceed</a>
								</div>
								
							</div>	<!-- newpl_step1 -->
							<div class="row" id="" v-show="otp">
									<div class="newshl_step2_content">
										<div class="newshl_step2__mail">
											<img src="@/assets/images/mobile_mail.png">
										</div>
										<div class="newshl_step2__content">
											<p>We have sent you an OTP via SMS for Mobile number verification</p>
										</div>
										<div class="newshl_step2_otp_code">
											<div class="newshl_step2_otp_inputs">
												<input type="text" maxLength="1" size="1" min="0" max="9" v-model="no_one" pattern="[0-9]{1}" @keyup="callnext('no_two')" class="optinput1234" />
												<input type="text" maxLength="1" size="1" min="0" max="9" ref="no_two" id="no_two" @keyup="callnext('no_three')" v-model="no_two" pattern="[0-9]{1}" class="optinput1234" />
												<input type="text" maxLength="1" size="1" min="0" max="9" id="no_three" @keyup="callnext('no_four')" v-model="no_three" pattern="[0-9]{1}" class="optinput1234" />
												<input type="text" maxLength="1" size="1" min="0" max="9" id="no_four" v-model="no_four" pattern="[0-9]{1}" class="optinput1234" />
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
							<div class="row" id="newpl_step2" v-show="step_2">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Full Name</label>
										<input type="text" @focus="toggleBorder" id="name" class="form-control" v-model="name" placeholder="Enter name as on your pan card">
 									</div>
									
									<div class="formInputFields">
										<label>Date of Birth</label>
										<datepicker id="dob" :bootstrap-styling="true" :disabled-dates="state.disabledDates" @selected="chnageClass" :input-class="{'is-invalid':bootstrapStyling, 'is-invalid':!bootstrapStyling}" @focus="toggleBorder" :open-date="new Date('1999-01-01')" v-model="date_of_birth" lang="en" type="month" placeholder="Please Select" format="yyyy-MM-dd"></datepicker>
										 
									</div>
								</div> 
								
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Email ID</label>
										<input id="email" @focus="toggleBorder" type="email" class="form-control" v-model="email" placeholder="Enter Valid Email ID">
									</div>
									
									<div class="formInputFields">
										<label>PAN Number</label>
										<input id="pan_no" @focus="toggleBorder" type="text" class="form-control" v-model="pan_number" maxlength="10" placeholder="Input 10 Digit Pan Number">
									</div>
								</div> 
								
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary btn-md prev-btn" @click="showStep(1)">Previous</a>
									<a href="javascript:void(0)" @click="validate(3)" class="btn btn-primary next-btn" data-toggle="modal" data-target="#mobileotp" >Proceed</a>
								</div>
							</div>	<!-- newpl_step2 -->
							
							<div class="row"  id="newpl_step3" v-show="step_3">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Company Name</label>
										<div>
											<typeahead :data = "companies" 
											:serializer="name => name.name" 
											:minMatchingChars = "1"
											v-model="company_name"
											ref="company"
											@input="enableType()"
											@hit = "setLedgerID_1($event.id,$event.name)"
											placeholder="Type Slowly and Try to Choose from Dropdown"
											>
											</typeahead>
											<!-- <input type="text" placeholder="Enter Company Name"> -->
											<!-- <span class="company_icon"></span> -->
										</div>
									</div>
									
									<div class="formInputFields">
										<label>Joining In Current Company</label>
										<select @focus="toggleBorder" id="joining_time" class="form-control" name="" v-model="joining_time">
											<option value="">Select Joining</option>
											<option value="0 - 2 months">0 - 2 Months</option>
											<option value="2- 6 months">2 - 6 Months</option>
											<option value="6 months above">Greater than 6 Months</option>
										</select>
									</div>
								</div>
								
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields" v-show="is_com_type">
										<label>Company Type</label>
										<select @focus="toggleBorder" class="form-control" name="company_type" id="company_type"  v-model="company_type">
											<option value="">Select Type Of Company</option>
											<option value="Proprietorship">Proprietorship</option>
											<option value="Partnership">Partnership</option>
											<option value="Private Limited">Private Limited</option>
											<option value="LLP">LLP</option>
											<option value="Other">Other</option>
										</select>
									</div>
									
									<div class="formInputFields">
										<label>Total Experience</label>
										<select @focus="toggleBorder" id="total_exp" class="form-control" name="" v-model="total_exp">
											<option value="">Select Experience</option>
											<option value="0 - 1">0 - 1 Year</option>
											<option value="1 - 3">1 - 3 Years</option>
											<option value="3 year above">Greater than 3 Years</option>
										</select>
									</div>
								</div>
								
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary prev-btn" @click="showStep(2)">Previous</a>
									<a href="javascript:void(0)" @click="validate(4)" class="btn btn-primary next-btn" data-toggle="modal" data-target="#mobileotp" >Proceed</a>
								</div>
							</div>	<!-- newpl_step3 -->
							
							<div class="row" id="newpl_step4" v-show="step_4">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Any Current EMI</label>
										<input @focus="toggleBorder" id="any_emi" class="form-control" @keyup="convertNumberToWords(any_emi,3)" type="number" v-model="any_emi" maxlength="6" placeholder="Input Your Running EMI">
										<div class="numToWords" v-html="no_to_words_current_emi">adas</div>
									</div>
									
									<div class="formInputFields">
										<label>Cibil Score</label>
										<select @focus="toggleBorder" id="cibil" class="form-control" name="" v-model="cibil_score">
											<option value="">Select Cibil Score</option>
											<option value="Below 650">Below 650</option>
											<option value="Above 650">Above 650</option>
											<option value="Don't Know">Don't Know</option>
										</select>
									</div>
								</div> 
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Salary Paid Type</label>
										<select @focus="toggleBorder" id="salary_pay" class="form-control" name="" v-model="salary_pay_type" @change="setSalType(salary_pay_type)">
											<option value="">Select Salary Paid Type</option>
											<option value="Cash">Cash</option>
											<option value="Cheque">Cheque</option>
											<option value="Direct Bank">Direct Bank</option>
										</select>
									</div>
									
									<div class="formInputFields" v-show="sal_banks">
										<label>Salary Bank</label>
										<select  class="form-control" id="bank_name" @focus="toggleBorder" v-model="bank_name">
											<option value="">Select Bank</option>
											<option v-for="bank in banks" :key="bank.id" :value="bank.id">{{bank.bank_name}}</option>
										</select>
									</div>
								</div>	<!-- col-lg-6 -->
								
								<div class="col-lg-12 formInnerRightTerms">
									<label><input checked id="term_condition" type="checkbox">I have read and agree to the <a @click="redirectPage('terms-and-conditions')" href="/terms-and-conditions" target="_blank">terms and conditions</a></label>
								</div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" class="btn btn-primary prev-btn" @click="showStep(3)">Previous</a>
									<a href="javascript:void(0)" @click="validate(0)" class="btn btn-primary next-btn" data-toggle="modal" data-target="#mobileotp" >SUBMIT</a>
								</div>
							</div>	<!-- newpl_step4 -->
						</div>
					</form>
				</div>
			</div>
		</div>
		<div style="clear:both;"></div>

	<div class="contentMainDiv">
		<div class="contentHeading">
			<h1>Instant Personal Loan Online Apply</h1>
		</div>
		<!-- <div class="contentTabDiv" id="contentTabDivID">
			<div class="container">
				<div class="contentInnerTabDiv">
					<ul>
						<li class="active"><a href="#">Overview</a></li>
						<li><a href="#documentID">Documents</a></li>
						<li><a href="#eligibilityID" id="">Eligibility</a></li>
						<li><a href="#faqID" id="">FAQs</a></li>
						<li><a href="#loan_cycle" id="">Loan Cycle</a></li>
						<li><a href="#do_you_know" id="">Do You Know?</a></li>
						<li class="apply_now"><a href="#" id="apply_now_fix">APPLY NOW</a></li>
					</ul>
				</div>
			</div>
		</div> -->
		<div class="contentInnerDiv padding50">
			<div class="container">
				<p><b>Get to Choose the Best Lender for your Personal Loan Needs</b></p>
				<p>A Personal Loan is one of the best remedies of modern life’s financial concerns. Today, almost everyone comes across cash crunch situations and financial requirements that need funds at the moment, while one can gradually pay them over the period of time, these requirements may vary from education for self or family, medical requirements, need to travel or fulfil a long wishlist of a gadget and several other requirements.</p>
				<p>While there are several ways to get access to funds, asking friends and family may be a risky proportion, thus the best bet is to opt for personal loans from financial institutions.</p>
				
				<p><b>Some key benefits of Personal Loans?</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">While business loans and property loans need collaterals. A Personal loan unlike these loans requires a person to have a decent credit profile against which credit is given.</li>
						<li class="tick">There is no requirement of multiple documentation and one needs not visit branches to submit physical documents for personal loans.</li>
						<li class="tick">A Personal Loan is quick and one needs not wait for a long time to get the loans processed. These days the entire process is online and transparent.</li>
						<li class="tick">Keep your credit utilisation ratio under 30% to enhance your credibility.</li>
					</ul>
				</div>
				
				<div class="contentTable">
					<h3>The Best Type of Personal Loan in India:</h3>
					<table cellpadding="0" cellspacing="0">
						<tr>
							<th>S. No.</th>
							<th>Bank Name</th>
							<th>Interest Rate (p.a)</th>
							<th>Loan Amount</th>
						</tr>
						<tr>
							<td>1</td>
							<td>Yes Bank</td>
							<td>10.75% - 16.99%</td>
							<td>₹1 lakh - ₹25 lakhs</td>
						</tr>
						<tr>
							<td>2</td>
							<td>ICICI Bank</td>
							<td>11.50% - 16.75%</td>
							<td>₹50k - ₹25 lakhs</td>
						</tr>
						<tr>
							<td>3</td>
							<td>HDFC Bank</td>
							<td>10.99% - 17.00%</td>
							<td>₹50k - ₹40 lakhs</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Kotak Bank</td>
							<td>10.75% - 18.00%</td>
							<td>₹1 lakh - ₹30 lakhs</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Tata Capital</td>
							<td>12.5%-19.00%</td>
							<td>₹75k - ₹20 lakhs</td>
						</tr>
						<tr>
							<td>6</td>
							<td>IndusInd Bank</td>
							<td>11.49% - 20.00%</td>
							<td>₹1 lakh - ₹20 lakhs</td>
						</tr>
						<tr>
							<td>7</td>
							<td>IDFC First Bank</td>
							<td>11.69% - 15.00%</td>
							<td>₹1 lakh - ₹20 lakhs</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Bajaj Finserv</td>
							<td>12.00% - 16.00%</td>
							<td>₹1 lakh - ₹20 lakhs</td>
						</tr>
						<tr>
							<td>9</td>
							<td>IIFL</td>
							<td>12.99% - 20.00%</td>
							<td>₹1 lakh - ₹20 lakhs</td>
						</tr>
					</table>
				</div>
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading" id="documentID">Personal Loan - Documents Required</h2>	
				<p>The lenders seek the following documents from the personal loan applicants. These documents can be submitted either as hard copy by physically visiting the bank or by uploading a scanned copy on the digital platform/website of the lender.</p>
				
				<p><b>Employees need the following standard documents and it may change as per the lender.</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Valid Identity Proof e.g. Voter ID Card, PAN Card</li>
						<li class="tick">Address Verification Proof e.g. Aadhar, Passport, DL and Utility Bills</li>
						<li class="tick">Previous 3 Months Bank Statements</li>
						<li class="tick">Latest Salary Slips</li>
					</ul>
				</div>
				
				<p><b>Self-Employed Professional often need following documents for a personal loan</b></p>
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
				
				<h2 class="middleHeading" id="eligibilityID">Eligibility of a Personal Loan</h2>	
				<p>There are some different eligibility options for several loans from various banks. The eligibility criteria for the salaried and even the self-employed are different.</p>
				
				<div class="contentTable">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td>Age</td>
							<td>23 years - 65 years</td>
						</tr>
						<tr>
							<td>Profession Type</td>
							<td>1. Employee </td>
						</tr>
						<tr>
							<td>Credit score</td>
							<td>Above 650</td>
						</tr>
						<tr>
							<td>Minimum Monthly Income</td>
							<td>1. Metros - ₹25,000<br>2. Non-Metros - ₹20,000</td>
						</tr>
						<tr>
							<td>Loan Eligibility</td>
							<td>Upto ₹50 Lacs <br>As Per Applicant’s Credit Profile</td>
						</tr>
						<tr>
							<td>Work Profile</td>
							<td>Continuation of 6 Months</td>
						</tr>
					</table>
				</div>
				
				<p>Different lenders have different eligibility criteria but more or less the same in the above-stated aspects.</p>
				<p>Here are a few Dos and DONTs to improve your personal loan eligibility.</p>
				
				<div class="contentDosDonts">
					<table cellpadding="0" cellspacing="0">
						<tr>
							<th>Do's</th>
							<th>Dont's</th>
						</tr>
						<tr>
							<td>Before applying for a personal loan, check the eligibility.</td>
							<td>Avoid taking multiple loans simultaneously.</td>
						</tr>
						<tr>
							<td>Apply for the amount for which you are eligible for on account of your financial stats.</td>
							<td>Don’t forget to make the loan repayments on time.</td>
						</tr>
						<tr>
							<td>Pay the EMIs on time. This is essential for maintaining a good credit score.</td>
							<td>Avoid having a high credit utilisation ratio.</td>
						</tr>
						<tr>
							<td>Keep your credit utilisation ratio under 30% to enhance your credibility.</td>
							<td>Don’t apply for a loan with different lenders frequently.</td>
						</tr>
					</table>
				</div>
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading">Types of Personal Loans</h2>	
				<div class="typesOfLoan">
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-3 col-12 typesOfLoanImg">
								<img src="@/assets/images/types/marriage-loan.jpg" alt="" title="">
							</div>
							<div class="col-lg-9 col-md-9 col-sm-9 col-12 typesOfLoanContnt">
								<p><b>Marriage Loan</b></p>
								<p>A personal loan may be used to overcome are the marriage related expenses and make your big event a memorable one with the marriage loan.</p>
								<a href="" class="btn btn-primary">Check Eligibility</a>
							</div>
						</div>	<!-- row -->
						
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-3 col-12 typesOfLoanImg">
								<img src="@/assets/images/types/medical-loan.jpg" alt="" title="">
							</div>
							<div class="col-lg-9 col-md-9 col-sm-9 col-12 typesOfLoanContnt">
								<p><b>Medical Emergency Loan</b></p>
								<p>We may never know when we need some additional funds for medical emergencies, a personal loan will help us to sail through such emergencies using a medical loan.</p>
								<a href="" class="btn btn-primary">Check Eligibility</a>
							</div>
						</div>	<!-- row -->
						
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-3 col-12 typesOfLoanImg">
								<img src="@/assets/images/types/education-loan.jpg" alt="" title="">
							</div>
							<div class="col-lg-9 col-md-9 col-sm-9 col-12 typesOfLoanContnt">
								<p><b>Education Loan</b></p>
								<p>Personal Loan can be used to sponsor education for self or someone in the family using the education loan.</p>
								<a href="" class="btn btn-primary">Check Eligibility</a>
							</div>
						</div>	<!-- row -->
						
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-3 col-12 typesOfLoanImg">
								<img src="@/assets/images/types/travel-loan.jpg" alt="" title="">
							</div>
							<div class="col-lg-9 col-md-9 col-sm-9 col-12 typesOfLoanContnt">
								<p><b>Vacation Loan</b></p>
								<p>While it becomes difficult to save for a vacation, a personal loan becomes handy as one can avail a vacation loan and repay later.</p>
								<a href="" class="btn btn-primary">Check Eligibility</a>
							</div>
						</div>	<!-- row -->
						
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-3 col-12 typesOfLoanImg">
								<img src="@/assets/images/types/car-loan.jpg" alt="" title="">
							</div>
							<div class="col-lg-9 col-md-9 col-sm-9 col-12 typesOfLoanContnt">
								<p><b>Car Loan</b></p>
								<p>One can buy a car using a Car Loan, which is a form of personal loan and plan their lives better both in form of mobility and financially.</p>
								<a href="" class="btn btn-primary">Check Eligibility</a>
							</div>
						</div>	<!-- row -->
						
						<div class="row">
							<div class="col-lg-3 col-md-3 col-sm-3 col-12 typesOfLoanImg">
								<img src="@/assets/images/types/home-decor.jpg" alt="" title="">
							</div>
							<div class="col-lg-9 col-md-9 col-sm-9 col-12 typesOfLoanContnt">
								<p><b>Home Improvement Loan</b></p>
								<p>While one can get a Home Loan to buy the house of their dreams, it may become a distant dream to renovate the home, for which one may go for a Home Improvement Loan in form of a Personal Loan and fulfil their home improvement requirements.</p>
								<a href="" class="btn btn-primary">Check Eligibility</a>
							</div>
						</div>	<!-- row -->
						
					</div>
				</div>
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading">Personal Loan Specific FAQs</h2>	
				
				<div class="faqsDiv" id="faqID">
					<div class="container">
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11  col-10">
								<p><b>How can I use a Personal loan?</b><br>Yes, lenders do not place a boundation on specific usage of personal loans. However, it should not be for unlawful purposes.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>How to avail a Personal Loan?</b><br>Visit LoansJagat.com enter personal details and requirements, choose the best lender and fill a simple form to apply.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>Can I know my loan eligibility?</b><br>Loan eligibility depends upon the individual’s credit profile, which includes credit rating, work type, location and several other parameters.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>What is an average repayment tenure?</b><br>It could be between 1 year to 5 years as per the terms for the loan.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>Can I know the amount?</b><br>The amount is directly proportional to the credit profile and one’s ability to repay that includes income and existing debts.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>What is the time take for the application?</b><br>While the traditional lenders take weeks or even months to process, one can get a personal loan in just a few days with the fintech enablers like LoansJagat.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>How to compare lenders?</b><br>LoansJagat provides a unique platform where one can compare the top Banks and NBFCs and choose the lender that offers the best terms as per your requirement.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>How to Repay?</b><br>While the most common method is the EMIs where one can pay in instalments every month, some lenders also have flexible repayments and payments are generally made through ECS or auto-debit to the bank accounts.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>Why LoansJagat?</b><br>LoansJagat offers free facilities for loan seekers to check loan eligibility, find the best lender and apply at their convenience. LoansJagat also offers dedicated relationship managers to assist throughout the entire process of a Loan. With multiple awards, top partnerships and proven customer service, the advantages are manifolds.</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-10">
								<p><b>Is a guarantor necessary?</b><br>No, the personal loans offered by LoansJagat are collateral-free and do not require any guarantor.</p>
							</div>
						</div>
					</div>
				</div>
				<div style="clear:both;"></div>
				
				<h2 class="middleHeading">Personal Loan By Banks</h2>	
				<div class="plbanks" id="">
					<div class="container">
						<div class="plbanks_inner row">
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank1.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank2.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank3.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank4.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank5.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank6.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank7.jpg" alt="" title="" /></div>
							<div class="col-lg-3 col-md-4 col-sm-4 col-4"><img src="@/assets/images/bank/bank8.jpg" alt="" title="" /></div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
            <app-footer></app-footer>
    </div>
</template>
<script src = "./PersonalLoan.js"></script> 
