<template>
    <div>
          <app-header></app-header>
        <div class="plresultBreadcrum">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="#">Home</a></li>
					<li>>></li>
					<li>Credit Card</li>
				</ul>
			</div>
			<div class="plresultHeadings">
				<h1>Congratulations! You Are Eligible for Credit Card Loan Offers</h1>
				<p>Adjust the Loan amount and Tenure slider to suit the EMI paying capacity.</p>
			</div>
		</div>
	</div>
    <div style="clear:both;"></div>
	
	<div class="mblFilterBox">
		<div class="mblFilterLoanAmt">Loan Amount (<i class="fa fa-inr"></i>)
		<span id="loan_demo">400000</span></div>
		<div class="mblFilterTenure">Tenure <span id="range_demo">3 Years</span> </div>
		<div class="mblFilterButton"><a id="mblFilterButtonIcon" href="#">Modify <i class="fa fa-filter"></i></a></div>
	</div>
	<div class="resultPageMain">
		<div class="container">
			<div class="filterResultBox" id="resultFilterBox2">
				<div class="resultFilterBoxTxt">
					<h3>Filter By:</h3>
				</div>
				<div class="filterResultPrice">
					<p>Loan Amount : <span class="rupeeIcon"></span> <span v-html="prce"> Lacs </span> + <span v-html="topup"> Lacs </span>  (Top Up) <!--<span v-html="prce"> 10000</span>--> </p>
					<vue-range-slider ref="slider" :step="10000" :min="min" :max="max" @slide-end="startDrag()" @drag-end="filterSliderBankData()" v-model="value"></vue-range-slider>
                    	
				</div>
				<div class="filterResultTenure">
					Tenure : <span v-html="tenurehtml">4</span> Years
					<vue-range-slider ref="slider" :fixed="true"  @slide-end="tenureDrag()" :min="1" :max="tennure_max" @drag-end="filterSliderBankData()" v-model="tenure"></vue-range-slider>
					<!--<input type="range" min="1" max="5" value="2" class="slider" id="tennure"> -->
				</div>
				<div class="filterResultTotalBank">
					<span class="blinking maxLoanAmt">Max. Loan Amount - Rs <span v-html="maxLoanAmt"></span> Lacs</span>
					<h4><span>We have</span>Bank Results</h4>
				</div>
			</div>	<!-- resultFilterBox -->

			<div class="rsltTableHeadPL">
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
					No Data Found !
				</div>
                
				<div v-show="bankListInner" class="bankListInner" v-for="item in banks" v-bind:key="item.id">
					<div class="rsltTblListPLbank">
						<img :src="'/img/bank/' + item.bank_logo" v-bind:alt=" item.bank_name" >
					</div>
					<!-- <div class="rsltTblListPLloanAmt"> <i class="fa fa-rupee"></i> {{item.minloan}} </div> -->
					<div class="rsltTblListPLloanAmt"> <i class="fa fa-rupee"></i> {{formatNumber(item.loan_amt)}} </div>
					
                    <div class="rsltTblListPLIntRate">
						{{item.roi}} %
						<span class="cutroi"><span class="cutline"></span>36%</span> 
					</div>
					<div class="rsltTblListPLProFee"> 
						<i class="fa fa-rupee"></i> {{formatNumber(item.pf)}}
					</div>
				
					<div class="rsltTblListPLEMI"> 
						<i class="fa fa-rupee"></i> {{item.emi}}
						<!-- <span class="cutemi"><span class="cutline"></span><i class="fa fa-rupee"></i> {{item.current_monthly_emi}}</span>
						<span class="emiTopup">
							<i class="fa fa-level-up"></i> Topup EMI : <i class="fa fa-rupee"></i> {{item.topupemi}}
						</span> -->
					</div>
					<div class="rsltTblListPLtenure" style="color: #20b126;font-size: 14px;font-weight: 600;">
						<i class="fa fa-rupee"></i> {{formatNumber(item.totalsaving)}}
						<span class="savingOr" style="font-weight: 400;">OR</span>
						<span class="emiTopup"><i class="fa fa-envira"></i> 18 EMI Reductions</span>
					</div>
					<div class="rsltTblListPLaction">
						<a class="applyLink" href="#">Apply&nbsp;&nbsp;<i class="fa fa-bolt"></i></a>
					</div>
				</div>
			</div>
		</div>
        <app-footer></app-footer>
	</div>
    </div>
</template>
<script src = "./CreditCardTransferResult.js"></script> 
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
