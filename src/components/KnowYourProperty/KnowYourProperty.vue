<template>
    <div>
        <app-header></app-header>
      	<div class="new_kyp_main">
			<div class="container">
				<div class="formBreadcrum">
					<ul>
					<li><a href="/">Home</a></li>
					<li>&gt;&gt;</li>
					<li>Know Your Property</li></ul>
				</div>
				<div class="row new_kyp_inner">
					<div class="col-lg-4 col-md-4 col-sm-4 col-12 new_kyp_innerLeft">
						<h2>Know About Your <span>Property And Loan Eligibility</span> in 1 Minute</h2>
						<p>Whether you want to earn rewards or save more with discounts and deals, you will never fall short of Credit Card options. This is the right place to find the card that best fits your needs.</p>
						<img class="img-fluid d-lg-block d-none center" src="@/assets/images/kyproperty.png">
					</div>
					<div class="col-lg-8 col-md-8 col-sm-8 col-12 new_kyp_innerRight">
						<!-- <div class="newkyp_heading">
							<h2>This information will let us know more about you.</h2>
						</div> -->
						<div class="mainProgressbar">
							<ul id="progressbar">
								<li id="step_1" class="active">Step</li>
								<li id="step_2" class="">Step</li>
								<li id="step_3" class="">Step</li>
							</ul>
						</div>
						<div class="newkyp_content">
							<div class="row" id="kypStep1" v-show="step1">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields mrgnBtm25">
										<label>Property Area <span class="dangerStar">*</span></label>
										<select class="form-control" name="" v-model="Property_Area">
											<option value="">Select </option>
											<option value="East Delhi">East Delhi</option>
											<option value="West Delhi">West Delhi</option>
											<option value="South Delhi">South Delhi</option>
											<option value="North Delhi">North Delhi</option>
										</select>
									</div>
									<div class="formInputFields mrgnBtm25">
										<label>Market Value of Property (In Rs) <span class="dangerStar">*</span></label>
										<input class="form-control" type="tel" v-model="mkt_value" placeholder="">
									</div>
									<div class="formInputFields">
										<label>Mobile <span class="dangerStar">*</span></label>
										<input class="form-control" type="tel" placeholder="" v-model="mobile">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields mrgnBtm25">
										<label>Colony Name <span class="dangerStar">*</span></label>
										<typeahead :data = "colonies" 
										:serializer="Colony_Name => Colony_Name.Colony_Name" 
										:minMatchingChars = "1"
										v-model="colony_name"
										ref="spllier"
										@hit = "setLedgerID_1($event.id,$event.name)"
										>
										</typeahead>
									</div>
									<div class="formInputFields mrgnBtm25">
										<label>Property Hold</label>
										<select class="form-control" name="" v-model="property_hold">
											<option value="">Please Select</option>
											<option value="Free Hold">Free Hold</option>
											<option value="Lease Hold">Lease Hold</option>
											<option value="Dont Know">Don't Know</option>
										</select>
									</div>
								</div>
									
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="showStep(2)" class="btn btn-primary next-btn">Next</a>
								</div>
							</div> <!-- kypStep1 -->
							
							<div class="row" id="kypStep2"  v-show="step2">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields mrgnBtm25">
										<label>Purpose of Checking Property <span class="dangerStar">*</span></label>
										<select class="form-control" name="" v-model="Purpose_checking_property" @change="chngeField(Purpose_checking_property)">
											<option value="">Select Loan Type</option>
											<option value="Home Loan">Home Loan </option>
											<option value="Loan Against Property">Loan Against Property</option>
											<option value="Over Draft">Over Draft</option>
											<option value="General Enquiry">General Enquiry</option>
										</select>
									</div>
									<div class="formInputFields mrgnBtm25">
										<label>Property Type <span class="dangerStar">*</span></label>
										<select class="form-control" name="" v-model="Property_Typ">
											<option value="">Please Select</option>
											<option value="Residential">Residential </option>
											<option value="Commercial"> Commercial </option>
											<option value="Industrial"> Industrial </option>
											<option value="Agricultural"> Agricultural </option>
											<option value="mixland"> Mix Land (Residential+Commercial) </option>
										</select>
									</div>
									<div class="formInputFields mrgnBtm25">
										<label>Current Property Deed In Your Name <span class="dangerStar">*</span></label>
										<select class="form-control" name="" v-model="Property_Deed_name">
											<option value="">Please Select</option>
											<option value="Sale Deed">Sale Deed</option>
											<option value="Conveyance Deed">Conveyance Deed</option>
											<option value="Gift Deed">Gift Deed</option>
											<option value="General Power of Attorney(GPA)">General Power of Attorney(GPA)</option>
											<option value="Special Power of Attorney(SPA)">Special Power of Attorney (SPA)</option>
											<option value="Allotment Letter">Allotment Letter</option>
											<option value="Builder Buyer Agreement">Builder Buyer Agreement</option>
											<option value="Khasra Khatauni">Khasra Khatauni</option>
											<option value="Don't Know">Don't Know</option>
										</select>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields mrgnBtm25" v-show="reg_amt_filed">
										<label>New Home Registry Amount (In Rs)</label>
										<input class="form-control" type="tel" v-model="Registry_Amount" placeholder="">
									</div>
									<div class="formInputFields mrgnBtm25">
										<label>Property Occupied Status <span class="dangerStar">*</span></label>
										<select class="form-control" name="" v-model="Property_Ocuupied_Status">
											<option value="">Please Select</option>
											<option value="self_occupied">Self Occupied</option>
											<option value="rented">Rented to Others</option>
											<option value="Vacant">Vacant</option>
											<option value="plot">Plot</option>
										</select>
									</div>
									<div class="formInputFields mrgnBtm25">
										<label>Email <span class="dangerStar">*</span></label>
										<input class="form-control" type="email" v-model="email" placeholder="">
									</div>
								</div>
									
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)"  @click="showStep(3)" class="btn btn-primary next-btn">Next</a>
								</div>
							</div> <!-- kypStep2 -->
							
							<div class="row" id="kypStep3"  v-show="step3"> 
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Property Measurement (Build Up Area) <span class="dangerStar">*</span></label>
										<input class="form-control" type="tel" v-model="property_mes" placeholder="" style="width:70%;display:inline-block;">
										<select class="form-control" name="" v-model="Property_Mesurment" style="width:30%;display:inline-block;">
											<option value="">sq ft </option>
											<option value="">sq mt</option>
											<option value="">sq yard</option>
										</select>
									</div>
									<div class="formInputFields">
										<label>Society Name</label>
										<input class="form-control" type="text" v-model="societyname" placeholder="" style="padding-left:10px;">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="formInputFields">
										<label>Property Map Available </label>
										<select class="form-control" name="" v-model="map_available">
											<option value="">Please Select</option>
											<option value="Yes">Yes</option>
											<option value="No">No</option>
										</select>
									</div>
									<div class="formInputFields">
										<label>Age of Construction (Years)</label>
										<input class="form-control" type="text" v-model="construtionage" placeholder="" style="padding-left:10px;">
									</div>
								</div>
								
									
								 
								<div class="col-lg-12 formInnerRightProceed">
									<a href="javascript:void(0)" @click="createKnowProperty" class="btn btn-primary next-btn">Submit</a>
								</div>
							</div> <!-- kypStep3 -->
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="clear:both;"></div>
	  	<div class="knowyourproperty_content padding50">
			<div class="container">
				<h2 class="pageHeading">Know Your Property</h2>
				<div class="row">
					<div class="col-md-8">
						<p>The unique online platform by LoansJagat helps customers to know details of the property which they are either unaware of or are uncertain about, LoansJagat can help them get property loans at a lesser interest rate than other traditional loans.</p>
						<p>Our system allows borrowers to find answers for availing the amount of loan related to any type of property including a residential, commercial, Industrial, agricultural and even mix use land. Property loans can be availed by the owner of property either occupied by self, rented to others, vacant or be just a plot.</p>
						<p>The platform also helps understand the authority status of property post getting clarity on the deed type - sale deed, conveyance deed or a gift deed.</p>
					</div>
					<div class="col-md-4">
						<img src="@/assets/images/kyp1.jpg" style="width:100%;">
					</div>
				</div>
				<br>
				<h4>How to Know your property?</h4>
				<p>LoansJagat makes it easy. Answer a few simple questions about your property and our advanced machine learning algorithm shows you information to make a well-informed decision.</p>
				<br>
				
				<div class="row">
					<div class="col-md-12">
						<h4>What do we need?</h4>
						<ul>
							<li>Property Type</li>
							<li>Colony or Area</li>
							<li>The market value of Property</li>
							<li>Property occupancy status</li>
							<li>If the current deed is in your favor</li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h4>What does LoansJagat do?</h4>
						<p>We provide the following:</p>
						<ul>
							<li>Property Status including Authorized, Unauthorized, Regularized and, Lal Dora</li>
							<li>Property Prices and Eligible loan amount on the property</li>
							<li>EMI for the eligible loan&nbsp;</li>
						</ul>
					</div>
				</div>
				<h4>Why one should do a Valuation of Assets?</h4>
				<p>Financial institutes generally offer property loans less than the value of pledged assets. Banks might recognize only 50%-70% of their investment for a loan. This is the methodology followed by banks to increase the chances of getting their loan amount back. Once the borrower knows the worth of property it places them in a better position to take a final decision.</p>
				<br>
				<h4>The fine prints for Property Loans</h4>
				<p>&nbsp;As a borrower one should think of a few questions:</p>
				<ul>
					<li>How will I repay the property loans?</li>
					<li>Do I have a good credit history?</li>
					<li>Do I have enough clarity about the objective for which loan is to be borrowed?</li>
				</ul>
				<p>Banks/NBFCs will clearly ask for the action plan for which property loans are being borrowed. They would need complete clarity including the repayments if the objective for which loan is being taken does not give the desired results. Proper documents of residents or business property have to be in place which is reviewed in detail by financial institutes before taking any decision on the loan. Property prices fluctuate in the market, banks also consider this aspect while considering final loan value.</p>
				<p>In case the borrower is a businessman, financers check how much of an experience you have and how well you been doing over the years. While, if the borrower is a salaried individual, than financiers check for your income capacity from your salary and any other recurring income sources such as Rental income, etc.</p>
				<p>Banks/NBFCs review the plan for which loan is being taken in the case property is being pledged as this gives them a fair idea as to how funds shall be utilized and how clear the borrower is about the purpose of taking a loan.</p>
				<br>
				<h5>Conclusion</h5>
				<p>As with anything, preparation is key and know your property tool helps you plan efficiently.&nbsp; Further, objectively evaluate your property loan application, or take someone&rsquo;s help in understanding. Always have the following answers handy:</p>
				<ul>
					<li>Have you adequately prepared a business plan for the property loan?</li>
					<li>Where are the weaknesses and strength in your application?</li>
					<li>Have you addressed those weaknesses (if any, with appropriate reasons)?</li>
				</ul>
				<p>In simple words, this tool acts as a helping hand especially to those who are new to taking property loans and are worried about mortgaging property which they must have created over a long period of time.</p>
				<p>Rohit stays in Delhi with 5 years of work experience and plans to expand his own business. However, to take a loan he needs to be clear what he can offer as security for example a house or any other investment that can be accessed by the banks. By using LoansJagat&rsquo;s know your property tool, he will end up getting complete information about his property prices, assets valuation in the market and will also be able to make an informed discussion for the property loans.</p>
				<p><i><strong>Disclaimer:</strong> The eligible loan amount is derived based on the market value provided by you, however, the actual loan amount is subject to the valuation of the property by the banks and NBFCs at the time of applying for property loans and your income justifications.</i></p>
			</div>
		</div>
		<app-footer></app-footer>
    </div>
</template>
<script src = "./KnowYourProperty.js"></script>