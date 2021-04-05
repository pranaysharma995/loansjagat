<template>
    <div>
        <app-header></app-header>
		
		<div class="applyLoanBreadcrum">
			<div class="container">
				<div class="alBreadcrum">
					<ul>
						<li><a href="#">Home</a></li>
						<li>>></li>
						<li><a href="#">Know Your Property</a></li>
						<li>>></li>
						<li>Apply Loan</li>
					</ul>
				</div>
				<div class="applyLresultHeadings">
					<h2>Apply for Know Your Property</h2>
					<p>Fill in the below details to start your loan application process</p>
				</div>
			</div>
		</div>
		<div style="clear:both;"></div>
		
		<div class="whiteBase">
			<div class="container">
				<h5 class="appliedLD"> Applied Loan Details</h5>
				<div class="whiteBaseBank">
					<img src="@/assets/images/bank/bank4.jpg">
				</div>
				<div class="whiteBaseLA">
					<h3><span>Loan Amount</span><i class="fa fa-inr"></i> 500000</h3>
				</div>
				<div class="whiteBaseTenure	">
					<h3><span>Tenure</span>4 Years</h3>
				</div>
				<div class="whiteBaseEMI">
					<h3><span>EMI</span><i class="fa fa-inr"></i> 13536</h3>
				</div>
				<div class="whiteBaseMonthlyInc">
					<h3><span>Monthly Income </span><i class="fa fa-inr"></i> 33000</h3>
				</div>
				<div class="whiteBaseAddress">
					<h3><span>Residence City </span>Delhi</h3>
				</div>
			</div>
		</div>
		
		<div class="applyPageMain">
			<div class="container">
				
				<div class="personalDetails">
					<p>Personal Details</p>
				</div>
				
				<div class="applyPLMain">
					<div class="applyPLInner applyPLInnerName">
						<label>Full Name</label>
						<input name="" required="" placeholder="Full Name as per PAN Card" type="text">
					</div>
					<div class="applyPLInner applyPLInnerMobile">
						<label>Mobile Number </label>
						<input name="" maxlength="10" pattern="[0-9]{10}" value="" placeholder="Mobile Number" type="tel">
					</div>
					<div class="applyPLInner">
						<label>Email </label>
						<input name="" required="" placeholder="Email" type="email">
					</div>
					<div class="applyPLInner">
						<label>PAN Number</label>
						<input name="" maxlength="10" placeholder="XXXXXXXXXX" type="text" value="">
					</div>
				</div>
				
				<div class="personalDetails">
					<p>Loan Details</p>
				</div>
				
				<div class="applyPLMain">
					<div class="applyPLInner applyPLInnerName">
						<label>Loan Type</label>
						<select name="">
							<option value="">Please Select</option>
							<option value="homeloan">Home Loan</option>
							<option value="loanagtproperty">Loan Against Property</option>
							<option value="OverDraft">OverDraft</option>
						</select>
					</div>
					
				</div>
				
				<div class="applyLoanSubmitBtn">
					<button type="submit" class="applyLoanSubmitFinal">Submit <i class="fa fa-arrow-right"></i></button>
				</div>
				
			</div>
		</div>

		<app-footer></app-footer>
    </div>
</template>
<script src = "./KnowYourPropertyApply.js"></script> 
