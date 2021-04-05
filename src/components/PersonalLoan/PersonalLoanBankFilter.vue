<template>
    <div>
          <app-header></app-header>
        <div class="plresultBreadcrum">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="#">Home</a></li>
					<li>>></li>
					<li>Personal Loan</li>
				</ul>
			</div>
			<div class="plresultHeadings" v-show="menu">
				<h1>Congratulations! You Are Eligible for Personal Loan Offers</h1>
				<p>Adjust the Loan amount and Tenure slider to suit the EMI paying capacity.</p>
			</div>
		</div>
	</div>
    <div style="clear:both;"></div>
	
	<div class="mblFilterBox">
		<div class="mblFilterLoanAmt">Loan Amount (<i class="fa fa-inr"></i>)
		<span id="loan_demo">400000</span></div>
		<div class="mblFilterTenure">Tenure <span id="range_demo" >3 Years</span> </div>
		<div class="mblFilterButton">
			<a id="mblFilterButtonIcon" href="javascript:void(0)" @click="showSlider">Modify <i class="fa fa-filter"></i></a>
		</div>
		<!-- <div class="pt-5">
			<vue-range-slider ref="slider" :clickable="false"  :min="min" :max="max" @slide-end="startDrag()" @drag-end="filterSliderBankData()" v-model="value"></vue-range-slider>
			
		</div>
		<div class="pt-5">
			<vue-range-slider ref="slider" :clickable="false" :fixed="true"  @slide-end="tenureDrag()" :min="1" :max="5" @drag-end="filterSliderBankData()" v-model="tenure"></vue-range-slider>
		</div> -->
	</div>
	<div class="resultPageMain">
		<div class="container">
			<div class="filterResultBox" id="resultFilterBox2">
				<div class="resultFilterBoxTxt">
					<h3>Filter By:</h3>
				</div>
				<div class="filterResultPrice">
					<p>Loan Amount : <span class="rupeeIcon"></span> <span v-html="prce"> 10000</span> </p>
					<vue-range-slider :fixed="true" :clickable="false" :step="10000"  :min="min" v-model="value" :max="max" @slide-end="startDrag()" @drag-end="filterSliderBankData()" :value="value"></vue-range-slider>
				</div>
				<div class="filterResultTenure">
					Tenure : <span v-html="tenurehtml">4</span> Years
					<vue-range-slider  :fixed="true" :clickable="false"   @slide-end="tenureDrag()" :min="1" :max="5" @drag-end="filterSliderBankData()" v-model="tenure"></vue-range-slider>
				</div>
				<div class="filterResultTotalBank">

					<span class="blinking maxLoanAmt">Max. Loan Amount - Rs <span v-html="maxLoanAmt"></span> Lacs</span>
					<h4><span>We have</span>{{banks.length}} Bank Results</h4>
				</div>
			</div>	<!-- resultFilterBox -->

			<div class="rsltTableHeadPL" v-show="menu">
				<div class="rsltTableHeadPLbank">Bank</div>
				<!-- <div class="rsltTableHeadPLloanAmt">Max Loan</div> -->
				<div class="rsltTableHeadPLloanAmt">Loan Amount</div>
				<div class="rsltTableHeadPLIntRate">Interest Rate</div>
				<div class="rsltTableHeadPLProFee">Processing Fees
					<a href="#" class="field-tip">
						<i class="fa fa-question-circle-o"></i>
						<div class="tip-content">This is a one time fee charged by Bank &amp; is deducted directly from your loan amount on disbursement.</div>
					</a>
				</div>
				<div class="rsltTableHeadPLEMI">Monthly EMI</div>
				<div class="rsltTableHeadPLtenure">Tenure
					<a href="#" class="field-tip">
						<i class="fa fa-question-circle-o"></i>
						<div class="tip-content">Tenure is on yearly basis.</div>
					</a>
				</div>
				<div class="rsltTableHeadPLaction">Action</div>
			</div>
			
			<div class="bankListMain">
				<div class="outerLoader" v-show="loader">
				<div class="loader"></div>
				</div>
				<div class="outerLoader" v-show="nodata">
					<div class="alert alert-primary" role="alert">
						<h2><span>No Result Found</span> </h2>
					<p>We searched hard! But couldn’t find any results</p>	
					</div>
					
					<img src='/img/no-result.jpg'>
				</div>
				<div v-show="bankListInner" class="bankListInner" v-for="(item,index) in banks" v-bind:key="item.id">
					<div class="rsltTblListPLbank">
						<img :src="'/img/bank/' + item.bank_logo" v-bind:alt=" item.bank_name" >
					</div>
					<!-- <div class="rsltTblListPLloanAmt"> <i class="fa fa-rupee"></i> {{item.minloan}} </div> -->
					<div class="rsltTblListPLloanAmt"> <i class="fa fa-rupee"></i> {{formatNumber(item.loan_amt)}} </div>
					<div class="rsltTblListPLIntRate" v-if="item.special_roi!=null">
						<del>{{item.roi}} </del><br>
						{{item.special_roi}}
						<span>% Rate</span>
					</div>
					<div class="rsltTblListPLIntRate" v-else>
						{{item.roi}}% 
						<span>% Rate</span>
					</div>
					<div class="rsltTblListPLProFee" v-if="item.special_process_fees!=0"> 
						<del><i class="fa fa-rupee"></i> {{formatNumber(item.process_fees)}}</del><br> <i class="fa fa-rupee"></i>{{item.special_process_fees}} <span>Processing Fees</span>
					</div>
					<div class="rsltTblListPLProFee" v-else> 
						<i class="fa fa-rupee"></i> {{item.process_fees}} <span>Processing Fees</span>
					</div>
					<div class="rsltTblListPLEMI" v-if="item.special_emi!=0"> 
						<i class="fa fa-rupee"></i> <del> {{formatNumber(item.special_emi)}}</del><br><i class="fa fa-rupee"></i> {{formatNumber(item.emi)}}<span>Monthly EMI</span> 
					</div>
					<div class="rsltTblListPLEMI" v-else> 
						<i class="fa fa-rupee"></i> {{formatNumber(item.emi)}}<span>Monthly EMI</span> 
					</div>
					<div class="rsltTblListPLtenure">{{item.tenure}}</div>
					<div class="rsltTblListPLaction">
						<a class="applyLink" href="javascript:void(0)" @click="applyLoan(index)">Apply&nbsp;&nbsp;<i class="fa fa-bolt"></i></a>
					</div>
				</div>
			</div>
		</div>
        <app-footer></app-footer>
	</div>
    </div>
</template>
<script src = "./PersonalLoanBankFilter.js"></script> 
<style>
.outerLoader{width: 100%; float:left; text-align: center; padding: 90px 0;}
.loader {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite; display: inline-block;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
del {
 color:red !important;
}

</style> 
