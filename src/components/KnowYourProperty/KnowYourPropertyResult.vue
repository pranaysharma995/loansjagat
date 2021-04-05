<template>
    <div>
        <app-header></app-header>
		<div style="clear:both;"></div>
	
	<div class="kyourresultMainPage">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="#">Home</a></li>
					<li>&gt;&gt;</li>
					<li>Know Your Property</li></ul>
			</div>
			<div style="clear:both;"></div>
			
			<div class="kypropResultBox">
				<div class="kypropResultHead">
					<h2>Result</h2>
				</div>
				<div class="kypropResultMain">
					<div class="kypropResultInner">
						<div class="kypropResultLeft">Colony Name</div>
						<div class="kypropResultRight" v-html="colony_name">A - 2 Block, Najafgarh</div>
					</div>
					<div class="kypropResultInner">
						<div class="kypropResultLeft">Property Type</div>
						<div class="kypropResultRight" v-html="property_type">Regularised</div>
					</div>
					<div class="kypropResultInner">
						<div class="kypropResultLeft">Is Property Eligible for Loan?</div>
						<div class="kypropResultRight" v-html="eligible"> Eligible</div>
					</div>
					<div class="kypropResultInner">
						<div class="kypropResultLeft">Property Loan Eligibility</div>
						<div class="kypropResultRight" v-html="loan_eligibilty"> <i class="fa fa-rupee"></i> 1875000 </div>
					</div>
					<div class="kypropResultInner">
						<div class="kypropResultLeft">EMI for Eligible loan</div>
						<div class="kypropResultRight" v-html="emi_eligible"> <i class="fa fa-rupee"></i> 19863 </div>
					</div>
					<div class="kypropApply" v-show="btn_show">
						<a class="link_page" href="">Apply Now</a>
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
<script src = "./KnowYourPropertyResult.js"></script> 
