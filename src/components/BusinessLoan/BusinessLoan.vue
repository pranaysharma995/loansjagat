<template>
    <div>
		<app-header></app-header>

		<div class="formMainDiv">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="/">Home</a></li>
					<li>>></li>
					<li>Business Loan</li>
				</ul>
			</div>

			<div class="row formInnerDiv">
				<div class="col-lg-4 col-md-4 col-sm-4 col-12 formInnerLeft">
					<ul>
						<li class="bluebg1 active" @click="showStep(1)" id="bl1">
							<div class="numbers">1</div>
							<div class="stepDetails"><p>Loan Amt Req,Net Salary, Mobile, City or Pin code</p></div>
						</li>
						<li class="bluebg3"  id="shl2">
								<div class="numbers">2</div>
								<div class="stepDetails"><p><span>Mobile Verification</span></p></div>
							</li>
						<li class="bluebg2" @click="showStep(2)" id="bl2">
							<div class="numbers">2</div>
							<div class="stepDetails"><p>Name, Email Address, Date Of Birth, Pan Number</p></div>
						</li>
						<li class="bluebg3" @click="showStep(3)" id="bl3">
							<div class="numbers">3</div>
							<div class="stepDetails"><p>Registration Date, Business Industry, Residence Ownership, Office Ownership</p></div>
						</li>
						<li class="bluebg4" @click="showStep(4)" id="bl4">
							<div class="numbers">4</div>
							<div class="stepDetails"><p>Net Profit, Any Current EMI, Cibil Score, GST Registration, Current Account</p></div>
						</li>
						<li class="bluebg5" id="">
							<div class="numbers">5</div>
							<div class="stepDetails"><p>Get list of banks with best offers</p></div>
						</li>
					</ul>
				</div>
				<div class="col-lg-8 col-md-8 col-sm-8 col-12 formInnerRight">
					<div class="formInnerRightHead busiLoanHead">
						<h2>Compare &amp; Apply for Business Loan</h2>
					</div>
					<form action="" method="">
						<div class="formInnerRightFields">
							<div class="busiSalSelfemp_step1" style="display:none;">
								<h2>Are You Self Employed Professional</h2>
								<div class="occupationBoxMain">
									<div class="salMiniIntroPic"></div>
								</div>
								<div class="occupationOptionBox">
									<div class="inputRadioGroup">
										<input id="inlineRadio1" name="" value="Yes" type="radio">
										<label for="inlineRadio1">Yes</label>
									</div>
									<div class="inputRadioGroup" style="float:right;">
										<input id="inlineRadio2" name="" value="No" type="radio">
										<label for="inlineRadio2">No</label>
									</div>
								</div>
								<div style="clear:both;"></div>
								<a href="#" data-toggle="modal" data-target="#professYes" >Yes</a>
							</div>

							<div class="row" id="newpl_step1" v-show="bl_step_1">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Your Loan Amount</label>
										<input onKeyPress="if(this.value.length==7) return false;" id="loan_amount" @focus="toggleBorder" class="form-control" type="number" v-model="loan_amount" onkeydown="javascript: return event.keyCode === 8 ||
event.keyCode === 46 ? true : !isNaN(Number(event.key))" @keyup="convertNumberToWords(loan_amount,1)" placeholder="XXXXXXXXX">
										<div class="numToWords" v-html="no_to_words">adas</div>
									</div>	<!-- formInputFields -->

									<div class="formInputFields busiLoanInputFields">
										<label>City</label>
										<typeahead :data = "cities"
										:serializer="name => name.name"
										:minMatchingChars = "1"
										v-model="city"
										ref="city"
										>
										</typeahead>
									</div>	<!-- formInputFields -->

								</div>

								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Mobile</label>
										<input onKeyPress="if(this.value.length==10) return false;" @focus="toggleBorder" id="mobile" class="form-control" type="number" onkeydown="javascript: return event.keyCode === 8 ||
event.keyCode === 46 ? true : !isNaN(Number(event.key))" v-model="mobile" placeholder="">
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Turn Over</label>
										<select @focus="toggleBorder" id="turn_over" class="form-control" v-model="turn_over">
											<option value="">Select An Option</option>
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
								</div>

								<!-- <div class="formInputFields busiLoanInputFields">
									<div class="formInputFieldLabel">
										<p>Pin Code</p>
									</div>
									<div class="formInputFieldInput">
										<input type="tel" v-model="pin_code" placeholder="XXXXXX">
									</div>
								</div>	formInputFields -->


								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="create" class="btn btn-primary next-btn">Proceed</a>
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
							<div class="row" id="newpl_step2" v-show="bl_step_2">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Name</label>
										<input @focus="toggleBorder" id="name" class="form-control" type="text" v-model="name" placeholder="Enter Full Name">
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Address</label>
										<input @focus="toggleBorder" id="address" class="form-control" type="text" v-model="address" placeholder="Enter Address">
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>PAN Number</label>
										<input @focus="toggleBorder" id="pan_number" class="form-control" type="text" v-model="pan_number" placeholder="XXXXXXXXXX">
									</div>	<!-- formInputFields -->
								</div>

								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Email ID</label>
										<input @focus="toggleBorder" id="email" class="form-control" type="email" v-model="email_id" placeholder="Enter Valid Email ID">
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Date of Birth</label>
										<datepicker @focus="toggleBorder" id="dob"
                    :open-date="new Date('1999-01-01')"
                    v-model="date_of_birth"
                    lang="en" type="month"
                    format="yyyy-MM-dd">
                  </datepicker>

									</div>	<!-- formInputFields -->

								</div>

								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(1)"  class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(3)" class="btn btn-primary next-btn">Proceed</a>
								</div>

							</div>	<!-- newpl_step2 -->

							<div class="row" id="newpl_step3" v-show="bl_step_3">
								<div class="col-lg-6 col-md-6 col-sm-6 c	ol-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Business Registration</label>
										<select @focus="toggleBorder" id="busi_regist" class="form-control" v-model="busi_regist">
											<option value="">Select An Option</option>
											<option value="1">Less than 1 year</option>
											<option value="2">1 Yr - 3 Yr</option>
											<option value="3">3 Yr - 5 Yr</option>
											<option value="10">More than 5 Yr</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Business Industry</label>
										<select @focus="toggleBorder" id="busi_indus" class="form-control" v-model="busi_indus" @change="filterLists($event, $event.target.selectedIndex)">
											<option value="">Select Industry</option>
											<option v-for="indus in industries" :value="indus.id" :key="indus.id">{{indus.industry}}</option>

										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Residence Ownership</label>
										<select @focus="toggleBorder" id="resid_own" class="form-control" v-model="resid_own">
											<option value="">Select An Option</option>
											<option value="Owned">Owned</option>
											<option value="Rented">Rented</option>
										</select>
									</div>	<!-- formInputFields -->

								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Type Of Business</label>
											<select @focus="toggleBorder" id="type_of_busi" class="form-control" v-model="type_of_busi"  name="type_of_business_industry">
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
									<div class="formInputFields busiLoanInputFields">
										<label>Business Industry Items</label>
										<select @focus="toggleBorder" id="busi_indus_item" class="form-control" v-model="busi_indus_item">
											<option>Select Industry Item</option>
											<option v-for="item in items" :value="item.id" :key="item.id">{{item.Item}}</option>

										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Office Ownership</label>
										<select @focus="toggleBorder" id="office_own" class="form-control" v-model="office_own">
											<option value="">Select An Option</option>
											<option value="Owned">Owned</option>
											<option value="Rented">Rented</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>

								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(2)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(4)" class="btn btn-primary next-btn">Proceed</a>
								</div>

							</div>	<!-- newpl_step3 -->

							<div class="row" id="newpl_step4" v-show="bl_step_4">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Gross Annual Income</label>
										<input @focus="toggleBorder" id="gross_annual_income" class="form-control" type="text" v-model="gross_annual_income"  placeholder="Gross Annual Income">
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Cibil Score</label>
										<select @focus="toggleBorder" id="cibil_score" class="form-control" v-model="cibil_score">
											<option value="">Select Cibil Score</option>
											<option value="Below 650">Below 650</option>
											<option value="Above 650">Above 650</option>
											<option value="Don't Know">Don't Know</option>
										</select>
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>Current Account</label>
										<select @focus="toggleBorder" id="curr_account" class="form-control" v-model="curr_account">
											<option value="">Select An Option</option>
											<option value="Yes">Yes</option>
											<option value="No">No</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields busiLoanInputFields">
										<label>Any Current EMI</label>
										<input @focus="toggleBorder" id="any_current_emi" class="form-control" type="text" v-model="any_current_emi" placeholder="XXXXX">
									</div>	<!-- formInputFields -->
									<div class="formInputFields busiLoanInputFields">
										<label>GST Registration</label>
										<select class="form-control" v-model="gst_regis">
											<option value="">Select An Option</option>
											<option value="">Yes</option>
											<option value="">No</option>
										</select>
									</div>	<!-- formInputFields -->
								</div>
								<div style="clear:both;"></div>
								<div class="col-lg-12 formInnerRightTerms busiLoanTerms">
									<label><input type="checkbox" id="term_condition">I have read and agree to the <a href="#" target="_blank">terms and conditions</a></label>
								</div>
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(3)" class="btn btn-primary prev-btn">Previous</a>
									<a href="javascript:void(0)" @click="Validate(0)" class="btn btn-primary next-btn">Submit</a>
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
			<h1>Instant Business Loan Online Apply</h1>
		</div>

		<div class="contentInnerDiv padding50">
			<div class="container">
				<p><b>What is a Business Loan? </b></p>
				<p>Business loan is a suitable option for all the growing entrepreneurs to meet specific requirements pertaining to their business needs. It can be as simple as the installation of new machinery to as big as expanding the business to newer areas or starting a new venture.</p>

				<p><b>Why should a business opt for business loan?  </b></p>
				<p>Convenience, less documentation, and quick processing help a businessman to easily explore new opportunities and set fund specifically for meeting business goals. The easy business loan offered by LoansJagat can help businesses to grow and manage their working capital requirements.</p>

				<p><b>What are the documents required for taking a Business Loan? </b></p>
				<p>Following are the commonly asked documents for business loans in India. </p>
				<p><b>Personal Documents</b></p>
				<div class="contentList">
					<ul>
						<li class="tick">Application form with Passport Size Photographs of all applicants and co-applicants.</li>
						<li class="tick">PAN Card of applicant and co-applicant.</li>
						<li class="tick">Identity Proof – Driving License / Passport / Aadhar Card.</li>
						<li class="tick">Address Proof – Driving License / Passport / Aadhar Card.</li>
						<li class="tick">Ownership proof of both residence and office either in the name of the applicant or jointly with family members.</li>
						<li class="tick">Business Continuity Proof – Any one document dated 3-5 years old like a Bank Statement, Sales Tax Challans, IT Returns, Shops & Est. Certificate, Certificate of Incorporation or a Partnership Deed.</li>
					</ul>
				</div>
				<p><b>Financial Documents</b></p>
				<div class="contentList">
					<p><b>Self-Employed Individuals / Sole Proprietorships</b></p>
					<ul>
						<li class="tick">Latest audited ITR and financials for the last 2 years including Balance Sheet, Profit & Loss A/c., Computation of Income along with all schedules.</li>
						<li class="tick">Past 12 months Bank statements from the borrower's main account/s and 3 months of all other bank accounts mentioned in the Balance Sheet.</li>
					</ul>
					<br>
					<p><b>Partnership Firms / Private Limited Companies</b></p>
					<ul>
						<li class="tick">Latest audited ITR and financials for the last 2 years including Balance Sheet, Profit & Loss A/c., Computation of Income along with all schedules.</li>
						<li class="tick">Past 12 months Bank statements from the borrower's main account/s and 3 months of all other bank accounts mentioned in the Balance Sheet.</li>
						<li class="tick">Partnership Deed and partnership authority letter for partnership firms.</li>
						<li class="tick">Memorandum and Articles of Association for private limited company.</li>
						<li class="tick">Certificate of Incorporation (COI) for the private limited company.</li>
						<li class="tick">Latest shareholding pattern.</li>
					</ul>
				</div>

				<p><b>What is the advantage of a Business loan? </b></p>
				<p>Unlike a personal loan, business loans could be availed for business needs and the amount is much bigger than the personal loans. Also, in case of companies, the liability belongs to the companies and not just to the individuals as is the case with the personal loans. Also, the online loan enablers like LoansJagat offer easy business loans without the requirement of any collaterals.</p>

				<p><b>How do I apply?</b></p>
				<p>LoansJagat has a tie-up with various banks and NBFCs who offer easy business loan options depending upon your requirement. An applicant answers 2 basic questions which are based on personal & financial numbers. Basis of the reply, the system automatically shows various business loan options available to the borrower from the top lenders to choose from. </p>
				<p>Once decided LoansJagat gives the business loan options for proceeding further either online or offline with the documentation process. During this journey, a loan expert from the company helps you out for expediting the process. The loan applicant can track the loan application easily using online tools.</p>

				<p><b>Why should I go with LoansJagat? </b></p>
				<p>LoansJagat is an online marketplace that offers the complete flexibility to apply for an easy business loan and get the flexibility to choose from over 40 lenders by comparing the business loan terms. LoansJagat offers easy online business loan in India and ensure complete satisfaction while providing a dedicated relationship manager and absolute data privacy.</p>

				<p><b>Planning to take a Business Loan, don’t make these common Mistakes </b></p>
				<p>We all know business loan provides a much-needed boost to accelerate growth and enable expansion plans. However, if loan planning is not done appropriately it would lead to issues later on and might cost higher than the loan amount itself.</p>
				<p>Suresh has been doing reasonably well in his business in Surat as a manufacturer of the clothing line. However, he wants to buy a shop for selling cloth materials directly in the market. For this purpose, he needs Rs. 50 Lakh business loan. </p>


				<p><b>Here are some checks that Suresh needs to ensure before availing the business loan?</b></p>
				<p>Clarity of Objective and Proper documents:</p>
				<p>Financial institutions will ask how much loan you want, the purpose of the loan and how would you repay back. The borrower should have clear answers against each along with income proofs like business balance sheets and ITR submitted.</p>
				<div class="contentList">
					<ul>
						<li class="tick"><b>Affordability - </b>The borrower should have a clear idea about their current business market value and how much they can take in order to repay easily.</li>
						<li class="tick"><b>Credit History - </b>Banks & NBFCs have a policy of checking past loan history and repayment history. Any default without proper reasoning can cost the borrower with the rejection of application.</li>
						<li class="tick"><b>Terms & Conditions of Loan -</b> One should be vigilant while signing a business loan agreement, one needs to read the document and understand the clauses like prepayment penalty and late EMI payment fees. LoansJagat provides easy business loans with transparent terms and conditions.  </li>
					</ul>
				</div>



				<h2 class="middleHeading">Business Loan Specific FAQs</h2>
				<div class="faqsDiv" id="faqID">
					<div class="container">
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Why to take a Business Loan ?</b><br>
								No business can run successfully in case of shortage of capital. You can get a business loan from Loansjagat for your short or long term financial needs. Whether your business is at an initial stage or in the growth phase, additional finance can help you to enhance the growth of your business.
								</p>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-1 col-md-1 col-sm-1 col-2 faqsIcon">
								<i class="fa fa-question-circle-o"></i>
							</div>
							<div class="col-lg-11 col-md-11 col-sm-11 col-10">
								<p><b>Who can take a Business Loan ?</b><br>
								Self-employed individuals/ professionals (like doctors, architects, chartered accountants, actuaries, business consultants, etc)
								</p>
								<div class="contentList">
									<ul>
										<li class="tick">Sole Proprietorship firms</li>
										<li class="tick">Partnership Firms</li>
										<li class="tick">Private Limited companies.</li>
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


	<div class="modal fade" id="professYes" role="dialog">
			<div class="modal-dialog">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Are You Self Employed Professional</h4>
					</div>
					<div style="clear:both;"></div>
					<div class="modal-body">
						<div class="wizard-card">
						<div class="salariedProfessionalPopupInner">
							<ul>
								<li>
									<div class="choice" data-toggle="wizard-radio">
										<input type="radio" name="profession" value="Doctor">
										<div class="icon">
											<div class="whatProfPicDoctor"></div>
										</div>
										<p>Doctor</p>
									</div>
								</li>
								<li>
									<div class="choice" data-toggle="wizard-radio">
										<input type="radio" name="profession" value="Chartered Accountant">
										<div class="icon">
											<div class="whatProfPicCA"></div>
										</div>
										<p>CA</p>
									</div>
								</li>
								<li>
									<div class="choice" data-toggle="wizard-radio">
										<input type="radio" name="profession" value="Architect">
										<div class="icon">
											<div class="whatProfPicArchitect"></div>
										</div>
										<p>Architect</p>
									</div>
								</li>
								<li>
									<div class="choice" data-toggle="wizard-radio">
										<input type="radio" name="profession" value="Actuary">
										<div class="icon">
											<div class="whatProfPicActuary"></div>
										</div>
										<p>Actuary</p>
									</div>
								</li>
								<li>
									<div class="choice" data-toggle="wizard-radio">
										<input type="radio" name="profession" value="Engineer">
										<div class="icon">
											<div class="whatProfPicEngineer"></div>
										</div>
										<p>Engineer</p>
									</div>
								</li>
								<li>
									<div class="choice" data-toggle="wizard-radio">
										<input type="radio" name="profession" value="Other">
										<div class="icon">
											<div class="whatProfPicOther"></div>
										</div>
										<p>Other</p>
									</div>
								</li>
							</ul>
							<div class="buttons">
								<button type="button" class="Continue">Continue</button>
							</div>
						</div>
						</div>

						<div style="clear:both;"></div>
					</div>
				</div>
			</div>
		</div>


		<app-footer></app-footer>




    </div>
</template>
<script src = "./BusinessLoan.js"></script>
