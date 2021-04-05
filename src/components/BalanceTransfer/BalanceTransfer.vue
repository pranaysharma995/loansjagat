<template>
    <div>
        <app-header></app-header>
	<div class="new_BT">
		<div class="container">
			<div class="balTrans formBreadcrum">
				<ul>
					<li><a href="#">Home</a></li>
					<li>&gt;&gt;</li>
					<li>Balance Transfer</li>
				</ul>
			</div>
			<div class="new_BT_Box">
				<div id="slide1" v-show="step1">
					<div class="new_BT_heading">
						<h2>Type of Employment</h2>
					</div>
					<div class="new_BT_options">
						<div class="card wizard-card next">
							<div class="row">
								<div class="occupationBox">
									<div class="choice" data-toggle="wizard-radio" @click="setValue('Salaried')">
										<input type="radio" id="" name="" value="Salaried">
										<div class="icon">
											<div class="salMiniIntroPic salPLMiniIntro"></div>
										</div>
										<h6 class="salPLMiniIntrotxt">Salaried<span>Earn regular monthly income</span></h6>
									</div>
								</div>
								<div class="occupationBox">
									<div class="choice" data-toggle="wizard-radio" @click="setValue('Business Owner')">
										<input type="radio" id="" name="" value="Business Owner">
										<div class="icon">
											<div class="salProMiniIntroPic salPLMiniIntro"></div>
										</div>
										<h6 class="salPLMiniIntrotxt">Self-Employed<span>Run own business</span></h6>
									</div>
								</div>
							</div>
						</div> <!-- card wizard-card -->
					</div>
					<div class="arrowLR">
						<input type="button" @click="nextLoan()"  name="next" class="next action-button" value="">
					</div>
				</div>	<!-- slide1 -->
				<div id="slide2" v-show="step2">
					<div class="new_BT_heading">
						<h2>Which Loan to Balance Transfer?</h2>
					</div>
					<div class="new_BT_options">
						<div class="card wizard-card next">
							<div class="row">
								<div class="loanTypeDiv" v-show="pl_loan">
									<div class="choice" data-toggle="wizard-radio" @click="showValue('Personal Loan')">
										<input type="radio" name="" value="">
										<div class="icon">
											<div class="loanTypePL"></div>
										</div>
										<h6 class="loanTypeTXT">Personal Loan <span>Balance Transfer</span></h6>
									</div>
								</div>
								<div class="loanTypeDiv" v-show="bl">
									<div class="choice" data-toggle="wizard-radio" @click="showValue('Business Loan')">
										<input type="radio" name="" value="">
										<div class="icon">
											<div class="loanTypeBL"></div>
										</div>
										<h6 class="loanTypeTXT">Business Loan <span>Balance Transfer</span></h6>
									</div>
								</div>
								<div class="loanTypeDiv">
									<div class="choice" data-toggle="wizard-radio" @click="showValue('Home Loan')">
										<input type="radio" name="" value="">
										<div class="icon">
											<div class="loanTypeHL"></div>
										</div>
										<h6 class="loanTypeTXT">Home Loan <span>Balance Transfer</span></h6>
									</div>
								</div>
								<div class="loanTypeDiv">
									<div class="choice" data-toggle="wizard-radio" @click="showValue('Loan Against Property')">
										<input type="radio" name="" value="">
										<div class="icon">
											<div class="loanTypeLAP"></div>
										</div>
										<h6 class="loanTypeTXT">Loan Against Property <span>Balance Transfer</span></h6>
									</div>
								</div>
								<div class="loanTypeDiv"  v-show="over_draft">
									<div class="choice" data-toggle="wizard-radio" @click="showValue('Overdraft')">
										<input type="radio" name="" value="">
										<div class="icon">
											<div class="loanTypeOD"></div>
										</div>
										<h6 class="loanTypeTXT">Overdraft <span>Balance Transfer</span></h6>
									</div>
								</div>
								<div class="loanTypeDiv" v-show="cr_card">
									<div class="choice" data-toggle="wizard-radio" @click="showValue('Credit Cards')">
										<input type="radio" name="" value="">
										<div class="icon">
											<div class="loanTypeCC"></div>
										</div>
										<h6 class="loanTypeTXT">Credit Cards <span>Balance Transfer</span></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="arrowLR">
						<input type="button" @click="prevLoan()" name="previous" class="previous action-button" value="">
						<input type="button" name="next" class="next action-button" value="">
					</div>
				</div>	<!-- slide2 -->
				


				<div id="slide3" v-show="step3">
					<div class="new_BT_heading">
						<h2>Which Loan to Balance Transfer?</h2>
					</div>
					<div class="new_BT_options">
						<div class="card wizard-card next">
							<div class="row">
								<div class="occupationBox">
									<div class="choice" data-toggle="wizard-radio" @click="setTypeLoanValue('Single Loan')">
										<input type="radio" id="" name="" value="Salaried">
										<div class="icon">
											<div class="singleLoanBT"></div>
										</div>
										<h6 class="salPLMiniIntrotxt">Single Loan <span>Balance Transfer </span></h6>
									</div>
								</div>
								
								<div class="occupationBox">
									<div class="choice" data-toggle="wizard-radio" @click="setTypeLoanValue('Multiple Loan')">
										<input type="radio" id="" name="" value="Business Owner">
										<div class="icon">
											<div class="multipleLoanBT"></div>
										</div>
										<h6 class="salPLMiniIntrotxt">Multiple Loan <span>Balance Transfer</span></h6>
									</div>
								</div>
							
							</div>
						</div> <!-- card wizard-card -->
					</div>
					<div class="arrowLR">
						<input type="button" @click="singleloanPrev()" name="previous" class="previous action-button" value="">
						<input type="button" name="next" class="next action-button" value="">
					</div>
				</div>	<!-- slide3 -->
				
				<div class="row" id="singleForm1" v-show="step4">
					<div class="col-lg-3 col-md-3 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-none new_BT_inner_sideImg">
						<img src="@/assets/images/bt-man3.png">
					</div>
					<div class="col-lg-9 col-md-9 col-sm-12 col-12 new_BT_inner">
						<div class="balTans_Progressbar">
							<ul id="progressbar">
								<li class="active">Step</li>
								<li class="active">Step</li>
								<li class="">Step</li>
							</ul>
						</div>
						<div class="new_BT_inner_heading">
							<h2>Fill the Common Details of Loan</h2>
						</div>
						<div class="row new_BT_inner_content">
							<div class="col-md-6">
								<div class="form-group bt_input_effect">
									<label>Loan Amount</label>
									<input class="form-control" id="loan_amount" type="number" name="" @keyup="convertNumberToWords(loan_amount,1)" v-model="loan_amount" placeholder="Enter Loan Amount ">
									<div class="numToWords" v-html="no_to_words">adas</div>
								</div>
								<div class="bt_input_effect">
									<label>Total Tenure</label>
									<input class="form-control" id="total_tennure" type="number" name="" v-model="total_tennure" placeholder="Total Tenure">
								</div>
								<div class="bt_input_effect">
									<label>Existing Loan Bank</label>
									<select id="bank_name" v-model="bank_name" class="form-control">
										<option value="">Select Bank</option>
										<option v-for="bank in banks" :key="bank.id" :value="bank.id">{{bank.name}}</option>
									</select>

								</div>
							</div>
							
							<div class="col-md-6">
								<div class="bt_input_effect">
									<label>EMI on existing Loan</label>
									<input id="current_emi" @focus="toggleBorder" class="form-control" type="number" name="" @keyup="convertNumberToWords(current_emi,2)" v-model="current_emi" placeholder="Enter amount">
									<div class="numToWords" v-html="no_to_words_emi">adas</div>
								</div>
								<div class="bt_input_effect">
									<label>Loan Starting Date</label>
									<select @focus="toggleBorder"  id="loan_month" name="" class="form-control month" v-model="loan_month">
										<option value="">Month</option>
										<option value="01"> January</option>
										<option value="02"> February</option>
										<option value="03"> March</option>
										<option value="04"> April</option>
										<option value="05"> May</option>
										<option value="06"> June</option>
										<option value="07"> July</option>
										<option value="08"> August</option>
										<option value="09"> September</option>
										<option value="10"> October</option>
										<option value="11"> November</option>
										<option value="12"> December</option>
									</select>
									<select id="loan_year" name="" class="form-control year" v-model="loan_year">
										<option value=""> Year</option>
										<option v-for="year in years_arr" :value="year.id" :key="year.id">{{ year.name }}</option>

										<!-- <option value="2000"> 2000 </option>
										<option value="2001"> 2001 </option>
										<option value="2002"> 2002 </option>
										<option value="2003"> 2003 </option>
										<option value="2004"> 2004 </option>
										<option value="2005"> 2005 </option>
										<option value="2006"> 2006 </option>
										<option value="2007"> 2007 </option>
										<option value="2008"> 2008 </option>
										<option value="2009"> 2009 </option>
										<option value="2010"> 2010 </option>
										<option value="2011"> 2011 </option>
										<option value="2012"> 2012 </option>
										<option value="2013"> 2013 </option>
										<option value="2014"> 2014 </option>
										<option value="2015"> 2015 </option>
										<option value="2016"> 2016 </option>
										<option value="2017"> 2017 </option>
										<option value="2018"> 2018 </option>
										<option value="2019"> 2019 </option>
										<option value="2020"> 2020 </option> -->
									</select>
								</div>
								
								<div class="bt_input_effect">
									<label>Mobile number</label>
									<div class="posRelative">
										<input @focus="toggleBorder" class="form-control" id="mobile_number" type="number" name="" v-model="mobile_number" placeholder="Enter Mobile No." maxlength="10">
									</div>
								</div> 
							</div>
						</div>
						<div class="slideNxt">
							<div class="slideNxtDiv">
								<a class="slideNxtBtn" href="javascript:void(0)" @click="showFormAccordangly()">Continue</a>
							</div>
						</div>
					</div>
				</div>	<!-- singleForm1 -->
				
				<div class="row" id="plbt" v-show="personal_loan_form">	
					<div class="col-lg-3 col-md-3 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-none new_BT_inner_sideImg">
						<img src="@/assets/images/bt-man3.png">
					</div>
					<div class="col-lg-9 col-md-9 col-sm-12 col-12 new_BT_inner">
						<div class="balTans_Progressbar">
							<ul id="progressbar">
								<li class="active">Step</li>
								<li class="active">Step</li>
								<li class="active">Step</li>
							</ul>
						</div>
						<div class="new_BT_inner_heading">
							<h2>Fill Details of Personal Loan Balance Tranfer</h2>
						</div>
						<div class="row new_BT_inner_content">
							<div class="col-lg-6">
								<div class="bt_input_effect">
									<label>Company Name</label>
									<div>
									<typeahead :data = "companies" 
										:serializer="name => name.name" 
										:minMatchingChars = "1"
										v-model="company_name"
										ref="company"
										@input="enableType()"
											placeholder="Type Slowly and Try to Choose from Dropdown"
										@hit = "setLedgerID_1($event.id,$event.name)">
										</typeahead>
									</div>
								</div>
								<div class="bt_input_effect">
									<label>Resident City</label>
									<typeahead :data = "cities" 
										:serializer="name => name.name" 
										:minMatchingChars = "1"
										v-model="resident_city"
										id="resident_city"
										@focus="toggleBorder"
										ref="resident_city"
										placeholder="Type and Select City"
										>
										</typeahead>
									<!-- <input @focus="toggleBorder" class="form-control" id="resident_city" type="text" v-model="resident_city" name="" placeholder="Enter Residence City"> -->
								</div>
								<div class="bt_input_effect">
									<label>Net Monthly Salary</label>
									<input @focus="toggleBorder" @keyup="convertNumberToWords(net_monthly_salary,3)" class="form-control" id="net_monthly_salary" type="number" name="" v-model="net_monthly_salary" placeholder="Monthly Bank Credit After Deduction">
									<div class="numToWords" v-html="no_to_words_salary_net">adas</div>		
								</div>
							</div>
							<div class="col-lg-6">
								<div class="bt_input_effect" v-show="is_com_type">
									<label>Company Type</label>
									<select @focus="toggleBorder" id="company_type" class="form-control" name="" v-model="company_type">
										<option value="">Select Type of Company</option>
										<option value="Propriotorship ">Propriotorship </option>
										<option value="Partnership">Partnership</option>
										<option value="Private Ltd">Private Ltd</option>
										<option value="LLP">LLP</option>
										<option value="Others">Others</option>
									</select>
								</div>
								<div class="bt_input_effect">
									<label>Email ID</label>
									<input @focus="toggleBorder" id="email_id" class="form-control" type="email" v-model="email_id" name="" placeholder="Enter Email ID">
								</div>
							</div>
							
						</div>
						<div class="slideNxt">
							<div class="slideNxtDiv">
								<a class="slideNxtBtn" href="javascript:void(0)" @click="savePLLoanData()">Continue</a>
							</div>
						</div>
					</div>
				</div>	<!-- plbt -->
				
				<div class="row" id="blbt" v-show="business_loan_form">
					<div class="col-lg-3 col-md-3 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-none new_BT_inner_sideImg">
						<img src="@/assets/images/bt-man3.png">
					</div>
					<div class="col-lg-9 col-md-9 col-sm-12 col-12 new_BT_inner">
						<div class="balTans_Progressbar">
							<ul id="progressbar">
								<li class="active">Step</li>
								<li class="active">Step</li>
								<li class="active">Step</li>
							</ul>
						</div>
						<div class="new_BT_inner_heading">
							<h2>Fill Details of Business Loan Balance Tranfer</h2>
						</div>
						<div class="row new_BT_inner_content">
							<div class="col-lg-6">
								<div class="bt_input_effect">
									<label>Business Type</label>
									<select id="business_type" class="form-control" name="" v-model="business_type">
										<option value="">Select Type of Business</option>
										<option value="Trader">Trader </option>
										<option value="Manufacturer">Manufacturer</option>
										<option value="Service Provider">Service Provider</option>
										<option value="Others">Others</option>
									</select>
								</div>
								<div class="bt_input_effect">
									<label>Email ID</label>
									<input type="email" id="email" class="form-control" v-model="email" name="" placeholder="">
								</div>
								<div class="bt_input_effect">
									<label>Gross Annual Income</label>
									<input type="number" id="gross_annual_income" class="form-control" name="" v-model="gross_annual_income" placeholder="">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="bt_input_effect">
									<label>Turnover</label>
									<input id="turn_over" type="number" class="form-control" name=""  @keyup="convertNumberToWords(turn_over,2)"  v-model="turn_over" placeholder="" maxlength="7">
									<div class="numToWords" v-html="no_to_words_salary">adas</div>
								</div>
								<div class="bt_input_effect">
									<label>Resident City</label>
									<input id="bl_resident_city" type="text" class="form-control" v-model="bl_resident_city" name="" placeholder="">
								</div>
								
							</div>
							
						</div>
						<div class="slideNxt">
							<div class="slideNxtDiv">
								<a class="slideNxtBtn" href="javascript:void(0)" @click="saveBLLoanData()">Continue</a>
							</div>
						</div>
					</div>
				</div>	<!-- blbt -->
				
				<div class="row" id="hlLapOdbt" v-show="pl_basic">
					<div class="col-lg-3 col-md-3 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-none new_BT_inner_sideImg">
						<img src="@/assets/images/bt-man3.png">
					</div>
					<div class="col-lg-9 col-md-9 col-sm-12 col-12 new_BT_inner">
						<div class="balTans_Progressbar">
							<ul id="progressbar">
								<li class="active">Step</li>
								<li class="active">Step</li>
								<li class="active">Step</li>
							</ul>
						</div>
						<div class="new_BT_inner_heading">
							<h2>Fill Basic Details of Balance Tranfer</h2>
						</div>
						<div class="row new_BT_inner_content">
							<div class="col-lg-6">
								<div class="bt_input_effect">
									<label>Resident City</label>
									<input type="text" class="form-control" name="" id="pl_resident_city" v-model="pl_resident_city" placeholder="">
								</div>
								<div class="bt_input_effect">
									<label>Email ID</label>
									<input type="email" class="form-control" id="pl_email" v-model="pl_email" name="" placeholder="">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="bt_input_effect" v-show="msala">
									<label>Net Monthly Salary</label>
									<input type="number" id="pl_net_monthly_salary" class="form-control" name="" v-model="pl_net_monthly_salary" placeholder="" maxlength="7">
								</div>
								<div class="bt_input_effect" v-show="pbstype">
									<label>Gross Annual Income</label>
									<input type="number" id="pl_gross_annual_income" class="form-control" name="" v-model="pl_gross_annual_income" placeholder="" maxlength="7">
								</div>
							</div>
						</div>
						
						<div class="slideNxt">
							<div class="slideNxtDiv">
								<a class="slideNxtBtn" href="javascript:void(0)" @click="saveAllLoanData()">Continue</a>
							</div>
						</div>
					</div>
				</div>	<!-- hlLapOdbt -->
				<div class="row" id="ccbt" v-show="credit_card_form">
					<div class="col-lg-3 col-md-3 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-none new_BT_inner_sideImg">
						<img src="@/assets/images/bt-man3.png">
					</div>
					<div class="col-lg-9 col-md-9 col-sm-12 col-12 new_BT_inner">
						<div class="balTans_Progressbar">
							<ul id="progressbar">
								<li class="active">Step</li>
								<li class="active">Step</li>
								<li class="">Step</li>
							</ul>
						</div>
						<div class="new_BT_inner_heading">
							<h2>Fill Details of Credit Card Balance Tranfer</h2>
						</div>
						<div class="row new_BT_inner_content">
							<div class="col-lg-6">
								<div class="bt_input_effect">
									<label>Total Credit Card Outstanding Amount</label>
									<input type="number" id="current_out_standing" class="form-control" name="" v-model="current_out_standing" placeholder="" maxlength="7">
								</div>
								<div class="bt_input_effect">
									<label>Age of Oldest Card</label>
									<select id="age_of_card" class="form-control" name="" v-model="age_of_card">
										<option value="">Select Age of Card</option>
										<option value="1">1 Year </option>
										<option value="2">2 Year</option>
										<option value="3">3 Year</option>
										<option value="4">4 Year</option>
										<option value="5">5 Year</option>
									</select>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="bt_input_effect">
									<label>All Existing Credit Card Banks</label>
									<select id="credit_card_bank" v-model="credit_card_bank" class="form-control">
										<option value="">Select Bank</option>
										<option v-for="bank in banks" :key="bank.id" :value="bank.id">{{bank.name}}</option>
									</select>
								</div>
								
								<div class="bt_input_effect">
									<label>Mobile number</label>
									<input id="card_mobile_number" class="form-control" type="tel" name="" v-model="card_mobile_number" placeholder="" maxlength="10">
								</div>
							</div>
							
						</div>
						<div class="slideNxt">
							<div class="slideNxtDiv">
								<a class="slideNxtBtn" @click="saveCreditCard()" href="javascript:void(0)">Continue</a>
							</div>
						</div>
					</div>
				</div>	<!-- ccbt -->
				<div class="row" id="multipleForm1" v-show="multiple_form">
					<div class="col-lg-2 col-md-2 col-sm-12 col-12 d-none d-lg-block d-md-block d-sm-none new_BT_inner_sideImg">
						<img src="@/assets/images/bt-man4.png">
					</div>
					<div class="col-lg-10 col-md-10 col-sm-12 col-12 new_BT_inner">
						<div class="balTans_Progressbar">
							<ul id="progressbar">
								<li class="active">Step</li>
								<li class="active">Step</li>
								<li class="">Step</li>
							</ul>
						</div>
						<div class="new_BT_inner_heading">
							<h2>Fill Details of Multiple Balance Tranfer</h2>
						</div>
						<div class="blue_box_heading">
							<h4>Click Add option to fill multiple loan details</h4>
						</div>
						<vue-cloneya :minimum="1"
									:maximum="10"
                                 :multiple="true"
                                 v-model="exampleMultipleData"
                             >
						<div class="blue_box">
							<div id="dynamic-field-1" class="row form-group dynamic-field">
								<div class="col-lg-2 col-md-4 col-sm-4 col-12 input_effect">
									<label>Existing Loan Bank</label>
									<select class="form-control" v-cloneya-input="'m_bank_name'">
										<option value="">Select Bank</option>
										<option v-for="bank in banks" :key="bank.id" :value="bank.id">{{bank.name}}</option>
										<option value="Other">Other</option>
									</select>
								</div>
								<div class="col-lg-2 col-md-4 col-sm-4 col-12 input_effect">
									<label>Loan Amt Sanctioned</label>
									<input class="form-control" type="number" v-cloneya-input="'m_loan_amount'" placeholder="">
								</div>
								<div class="col-lg-2 col-md-4 col-sm-4 col-12 input_effect">
									<label>EMI on Existing Loan</label>
									<input class="form-control" type="number" placeholder="" v-cloneya-input="'m_existing_emi'">
								</div>
								<div class="col-lg-2 col-md-4 col-sm-4 col-12 input_effect">
									<label>Total Tenure</label>
									<select class="form-control" v-cloneya-input="'m_tennure'">
										<option value="">Select Tenure</option>
										<option value="1">1 Year</option>
										<option value="2">2 Years</option>
										<option value="3">3 Years</option>
										<option value="4">4 Years</option>
										<option value="5">5 Years</option>
										<option value="6">6 Years</option>
									</select>
								</div>
								<div class="col-lg-3 col-md-4 col-sm-4 col-12 input_effect">
									<label>Loan Starting Date</label>
									<select v-cloneya-input="'m_loan_month'" class="form-control month">
										<option value="">Month</option>
										<option value="01"> January</option>
										<option value="02"> February</option>
										<option value="03"> March</option>
										<option value="04"> April</option>
										<option value="05"> May</option>
										<option value="06"> June</option>
										<option value="07"> July</option>
										<option value="08"> August</option>
										<option value="09"> September</option>
										<option value="10"> October</option>
										<option value="11"> November</option>
										<option value="12"> December</option>
									</select>
									<select class="form-control year" v-cloneya-input="'m_loan_year'">
										<option value=""> Year</option>
										<option v-for="year in years_arr" :value="year.id" :key="year.id">{{ year.name }}</option>

										<!-- <option value="2000"> 2000 </option>
										<option value="2001"> 2001 </option>
										<option value="2002"> 2002 </option>
										<option value="2003"> 2003 </option>
										<option value="2004"> 2004 </option>
										<option value="2005"> 2005 </option>
										<option value="2006"> 2006 </option>
										<option value="2007"> 2007 </option>
										<option value="2008"> 2008 </option>
										<option value="2009"> 2009 </option>
										<option value="2010"> 2010 </option>
										<option value="2011"> 2011 </option>
										<option value="2012"> 2012 </option>
										<option value="2013"> 2013 </option>
										<option value="2014"> 2014 </option>
										<option value="2015"> 2015 </option>
										<option value="2016"> 2016 </option>
										<option value="2017"> 2017 </option>
										<option value="2018"> 2018 </option>
										<option value="2019"> 2019 </option>
										<option value="2020"> 2020 </option> -->
									</select>	
								</div>
								<div class="col-lg-1 col-md-4 col-sm-4 col-12 add_remove_div">
									<button type="button" id="add-button" v-cloneya-add class="btn btn-secondary float-left text-uppercase shadow-sm"><i class="fa fa-plus-circle"></i></button>
									<button type="button" id="remove-button" v-cloneya-remove class="btn btn-secondary float-right text-uppercase ml-1"><i class="fa fa-minus-circle"></i></button>
								</div>
								
							</div>
							
						</div>
						</vue-cloneya>
						<div class="row ">
							
							<div class="col-lg-5">
								<div class="bt_input_effect">
									<label>Mobile number</label>
									<input class="form-control" id="m_mobile_number" type="tel" name="" v-model="m_mobile_number" placeholder="" @keypress="isNumber($event)" maxlength="10">
								</div>
							</div>
							<div class="col-lg-7">
								&nbsp;
							</div>
						</div>
						<div class="row slideNxt">
							<div class="slideNxtDiv">
								<a class="slideNxtBtn" href="javascript:void(0)" @click="saveMultipleLoans()">Continue</a>
							</div>
						</div>
					</div>
				</div>	<!-- hlLapOdbt -->
			</div>
		</div>
	</div>
	
	<div style="clear:both;"></div>


	<div class="balance_transfer_content padding50">
		<div class="container">
			<h2>Balance Transfer Of Loan<span>How does Balance Transfer work? What is it precisely?</span></h2>
			<p>We all dread paying high-interest rates over loans taken from the banks and always looking for ways to increase savings.  Balance Transfer of loan or credit card outstanding or any other type of loan is the process that allows the borrower to benefit lower interest rates offered by other lenders.  Like if the borrower has an existing outstanding of home loan with one lender, they can make a home loan transfer which is to shift the remaining outstanding loan amount to a different lender who charges a lower rate of interest and hence lower EMI in future</p>
			<br>
			<div class="row">
				<div class="col-md-12">
					<h4>Some key features of Balance Transfer are:</h4>
				</div>
				<div class="col-md-8">
						<p><b><u>Reduction in Interest Rates</u> -</b> Benefits of balance transfer are manifold. One of the best features is the lower interest rate. A new bank will generally offer lower rates which help in reduction of EMI amount and the total interest liability</p>
						<p><b><u>Longer Tenure</u> -</b> Balance transfer helps us to renegotiate the loan terms with a new bank which may lead to an extension of loan tenure as well. This will further, reduce monthly EMI’s</p>
						<p><b><u>Credit Score</u> -</b> If the borrower has been paying EMI’s on time but realizes that in future repayment of loan might be a challenge due to financial constraints, balance transfer gives them the flexibility to increase credit repayment cycle which saves him from getting a bad credit score and hence lower EMI in future to release burden.</p>
						<p><b><u>Additional Loan Amount</u> -</b> While doing a balance transfer, the borrower has the advantage of taking an increased loan amount over and above their existing loan amount to fund their further financial obligations.</p>
						<p><b><u>Switching lender if unhappy with the services</u> -</b> The borrower gets the option to move to a new lender in case the current lender’s services are not as per their expectation</p>
					
				</div>
				<div class="col-md-4">
					<br>
					<img src="@/assets/images/balance-transfer1.jpg" style="width:100%;">
				</div>
			</div>
			
			<br>
			<br>
			<div class="row">
				
				<div class="col-md-4">
					<img src="@/assets/images/help2.jpg" style="width:100%;">
				</div>
				<div class="col-md-8">
					<h4>How will LoansJagat help you?</h4>
					
						<p>LoansJagat helps you know your exact outstanding amount of loan with the current Bank or NBFC along with the list of documents kept with them in case of Home loan and Loan against property.</p>
						<p>LoansJagat helps the borrower to look for a better-suited lender on the basis of their requirement, whether it is lowering of the interest rate and hence the monthly EMI or increasing the tenure of the loan or even getting an additional loan over and above the current amount in a hassle-free way through a dedicated professional assigned to you.</p>
						<p>As in the case of Balance transfer, banks usually demand a minimum 6-Month clear repayment track record of your monthly EMIs. LoansJagat guides the borrowers to get the right documents like the statement of accounts having a repayment track from the bank where the current loan is running</p>
					
				</div>
			</div>
			<br>
			
			<p>We take special care in giving support to the customers to make the best possible decision and safeguard their interests.</p>
			<p>Bank that does the balance transfer will carry out its own creditworthiness assessment, which will include going through the credit score and financial details of the borrower. In case of bad score showing irregular repayment trends chances of request cancellation for a balance transfer is high from new lender.</p>
			<br>
			<div class="row">
				<div class="col-md-12">	
					<h4>Things to take care while taking Balance Transfer:</h4>
				</div>
				<div class="col-md-8">	
					<p>Ravi who has a home loan for Rs 25 lakh from X bank wants to switch the bank due to bad service experience, as a borrower opting for balance transfer for the first time, he needs to be careful about the following:</p>
					 
						<p><b><u>Fees:</u></b> Balance transfer comes with a transfer fee which typically varies from loan to loan and bank to bank. It may vary from 0% to 4% of the outstanding loan amount. Thus, if you are transferring a large amount say, Rs 10,00,000, an uncapped fee of 3 percent can be a significant addition and a cut into the savings. To limit the fee you pay, try to find a balance transfer offer in which the fee is capped at a certain amount.</p>
						<p><b><u>Terms &amp; Conditions:</u></b> A balance transfer is a good debt-reduction strategy as long as one follows the rules. Ensure you have read the fine print in agreement so that you don't get burned and lose all the savings you hoped to get from the transfer.</p>
					 
				</div>
				<div class="col-md-4">
					<img src="@/assets/images/terms-conditions1.jpg" style="width:100%;">
				</div>
			</div>
			<p>The Essence of this product is to have a life where a loan does not make the borrower feel burdensome. This a lucrative option to be taken if income increases which mean the probability of paying back the loan is high or if income decreases which mean that you can extent your loan tenure again via balance transfer and hence reduce your EMI on the current outstanding loan amount.  You can opt for a balance transfer once every year. <i>For example, if the loan tenure of your home loan is 20 years, then you can opt for home loan balance transfer for 20 times or even more to reduce your EMI burden and hence interest rates. It has no limit.</i></p>
		</div>
	</div>
	
	<div style="clear:both;"></div>

        <app-footer></app-footer>
    </div>
</template>
<script src = "./BalanceTransfer.js"></script> 
