(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30826f02"],{"83c9":function(a,t,e){"use strict";var s=e("c9ac"),r=e.n(s);r.a},"91a7":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("app-header"),e("div",{staticClass:"plresultBreadcrum"},[e("div",{staticClass:"container"},[a._m(0),e("div",{directives:[{name:"show",rawName:"v-show",value:a.menu,expression:"menu"}],staticClass:"plresultHeadings"},[e("h1",[a._v("Congratulations! You Are Eligible for Personal Loan Offers")]),e("p",[a._v("Adjust the Loan amount and Tenure slider to suit the EMI paying capacity.")])])])]),e("div",{staticStyle:{clear:"both"}}),e("div",{staticClass:"mblFilterBox"},[a._m(1),a._m(2),e("div",{staticClass:"mblFilterButton"},[e("a",{attrs:{id:"mblFilterButtonIcon",href:"javascript:void(0)"},on:{click:a.showSlider}},[a._v("Modify "),e("i",{staticClass:"fa fa-filter"})])])]),e("div",{staticClass:"resultPageMain"},[e("div",{staticClass:"container"},[e("div",{staticClass:"filterResultBox",attrs:{id:"resultFilterBox2"}},[a._m(3),e("div",{staticClass:"filterResultPrice"},[e("p",[a._v("Loan Amount : "),e("span",{staticClass:"rupeeIcon"}),a._v(" "),e("span",{domProps:{innerHTML:a._s(a.prce)}},[a._v(" 10000")])]),e("vue-range-slider",{attrs:{fixed:!0,clickable:!1,step:1e4,min:a.min,max:a.max,value:a.value},on:{"slide-end":function(t){return a.startDrag()},"drag-end":function(t){return a.filterSliderBankData()}},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}})],1),e("div",{staticClass:"filterResultTenure"},[a._v(" Tenure : "),e("span",{domProps:{innerHTML:a._s(a.tenurehtml)}},[a._v("4")]),a._v(" Years "),e("vue-range-slider",{attrs:{fixed:!0,clickable:!1,min:1,max:5},on:{"slide-end":function(t){return a.tenureDrag()},"drag-end":function(t){return a.filterSliderBankData()}},model:{value:a.tenure,callback:function(t){a.tenure=t},expression:"tenure"}})],1),e("div",{staticClass:"filterResultTotalBank"},[e("span",{staticClass:"blinking maxLoanAmt"},[a._v("Max. Loan Amount - Rs "),e("span",{domProps:{innerHTML:a._s(a.maxLoanAmt)}}),a._v(" Lacs")]),e("h4",[e("span",[a._v("We have")]),a._v(a._s(a.banks.length)+" Bank Results")])])]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.menu,expression:"menu"}],staticClass:"rsltTableHeadPL"},[e("div",{staticClass:"rsltTableHeadPLbank"},[a._v("Bank")]),e("div",{staticClass:"rsltTableHeadPLloanAmt"},[a._v("Loan Amount")]),e("div",{staticClass:"rsltTableHeadPLIntRate"},[a._v("Interest Rate")]),a._m(4),e("div",{staticClass:"rsltTableHeadPLEMI"},[a._v("Monthly EMI")]),a._m(5),e("div",{staticClass:"rsltTableHeadPLaction"},[a._v("Action")])]),e("div",{staticClass:"bankListMain"},[e("div",{directives:[{name:"show",rawName:"v-show",value:a.loader,expression:"loader"}],staticClass:"outerLoader"},[e("div",{staticClass:"loader"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:a.nodata,expression:"nodata"}],staticClass:"outerLoader"},[a._m(6),e("img",{attrs:{src:"/img/no-result.jpg"}})]),a._l(a.banks,(function(t,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:a.bankListInner,expression:"bankListInner"}],key:t.id,staticClass:"bankListInner"},[e("div",{staticClass:"rsltTblListPLbank"},[e("img",{attrs:{src:"/img/bank/"+t.bank_logo,alt:t.bank_name}})]),e("div",{staticClass:"rsltTblListPLloanAmt"},[e("i",{staticClass:"fa fa-rupee"}),a._v(" "+a._s(a.formatNumber(t.loan_amt))+" ")]),null!=t.special_roi?e("div",{staticClass:"rsltTblListPLIntRate"},[e("del",[a._v(a._s(t.roi)+" ")]),e("br"),a._v(" "+a._s(t.special_roi)+" "),e("span",[a._v("% Rate")])]):e("div",{staticClass:"rsltTblListPLIntRate"},[a._v(" "+a._s(t.roi)+"% "),e("span",[a._v("% Rate")])]),0!=t.special_process_fees?e("div",{staticClass:"rsltTblListPLProFee"},[e("del",[e("i",{staticClass:"fa fa-rupee"}),a._v(" "+a._s(a.formatNumber(t.process_fees)))]),e("br"),a._v(" "),e("i",{staticClass:"fa fa-rupee"}),a._v(a._s(t.special_process_fees)+" "),e("span",[a._v("Processing Fees")])]):e("div",{staticClass:"rsltTblListPLProFee"},[e("i",{staticClass:"fa fa-rupee"}),a._v(" "+a._s(t.process_fees)+" "),e("span",[a._v("Processing Fees")])]),0!=t.special_emi?e("div",{staticClass:"rsltTblListPLEMI"},[e("i",{staticClass:"fa fa-rupee"}),a._v(" "),e("del",[a._v(" "+a._s(a.formatNumber(t.special_emi)))]),e("br"),e("i",{staticClass:"fa fa-rupee"}),a._v(" "+a._s(a.formatNumber(t.emi))),e("span",[a._v("Monthly EMI")])]):e("div",{staticClass:"rsltTblListPLEMI"},[e("i",{staticClass:"fa fa-rupee"}),a._v(" "+a._s(a.formatNumber(t.emi))),e("span",[a._v("Monthly EMI")])]),e("div",{staticClass:"rsltTblListPLtenure"},[a._v(a._s(t.tenure))]),e("div",{staticClass:"rsltTblListPLaction"},[e("a",{staticClass:"applyLink",attrs:{href:"javascript:void(0)"},on:{click:function(t){return a.applyLoan(s)}}},[a._v("Apply "),e("i",{staticClass:"fa fa-bolt"})])])])}))],2)]),e("app-footer")],1)],1)},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"formBreadcrum"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[a._v("Home")])]),e("li",[a._v(">>")]),e("li",[a._v("Personal Loan")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"mblFilterLoanAmt"},[a._v("Loan Amount ("),e("i",{staticClass:"fa fa-inr"}),a._v(") "),e("span",{attrs:{id:"loan_demo"}},[a._v("400000")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"mblFilterTenure"},[a._v("Tenure "),e("span",{attrs:{id:"range_demo"}},[a._v("3 Years")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"resultFilterBoxTxt"},[e("h3",[a._v("Filter By:")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"rsltTableHeadPLProFee"},[a._v("Processing Fees "),e("a",{staticClass:"field-tip",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-question-circle-o"}),e("div",{staticClass:"tip-content"},[a._v("This is a one time fee charged by Bank & is deducted directly from your loan amount on disbursement.")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"rsltTableHeadPLtenure"},[a._v("Tenure "),e("a",{staticClass:"field-tip",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-question-circle-o"}),e("div",{staticClass:"tip-content"},[a._v("Tenure is on yearly basis.")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e("h2",[e("span",[a._v("No Result Found")])]),e("p",[a._v("We searched hard! But couldn’t find any results")])])}],i=(e("4160"),e("b680"),e("ac1f"),e("5319"),e("1276"),e("159b"),e("eacc")),n=e("2441"),l=e("0c9c"),o=e("d45f"),c=(e("e1b1"),e("b8c8")),u={components:{appFooter:l["a"],appHeader:n["a"],VueRangeSlider:c["a"],typeahead:o["a"]},data:function(){return{request_id:"",menu:!0,nodata:!1,banks:[],sliderValue:50,loader:!0,bankListInner:!1,value:10,tenure:4,min:0,tenurehtml:"",max:100,loan_amt:"",prce:"",maix_data:0,maxLoanAmt:"",step_val:0}},computed:{sliderStep:function(){return(this.max-this.min)/1e3}},created:function(){this.prce=this.$router.history.current.params.loan_amount_required,this.request_id=this.$router.history.current.params.id,this.fetchBanksData(),this.step_val=1e4},methods:{applyLoan:function(a){var t=this,e={request_id:this.request_id,roi:this.banks[a].roi,pf:this.banks[a].pf,emi:this.banks[a].emi,bank_id:this.banks[a].bank_id,bank_name:this.banks[a].bank_name,loan_amount:this.banks[a].loan_amt};i["a"].post("applied-personal-loan",e).then((function(a){window.location.href="apply_consent_thank/"+t.request_id}))},formatNumber:function(a){var t,e;return a=a+""||"",t=a.split("."),e=t[1]||null,t=t[0].replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),a=e?t+"."+e:t,a},startDrag:function(){this.prce=this.value},tenureDrag:function(){this.tenurehtml=this.tenure},findWinConfirmed:function(a){var t=[];return a.data.forEach((function(a){return t.push(a.minloan)})),Math.max.apply(Math,t)},showSlider:function(){},filterSliderBankData:function(){var a=this;this.bankListInner=!1,this.loader=!0,this.nodata=!1,this.menu=!0;var t={net_salary_all_deductions:this.$router.history.current.params.net_salary_all_deductions,loan_amount_required:this.value,mode_of_salary:this.$router.history.current.params.mode_of_salary,total_work_experience:this.$router.history.current.params.total_work_experience,civil_score:this.$router.history.current.params.civil_score,company_id:this.$router.history.current.params.current_company_name,any_loans_running_emi_monthly:this.$router.history.current.params.any_emi,tenure:this.tenure,company_type:this.$router.history.current.params.company_type};i["a"].post("personal-loan-result",t).then((function(t){a.loader=!1,a.nodata=!1,a.banks=t.data,0==t.data.length&&(a.nodata=!0,a.menu=!1),a.min=1e5,a.maix_data=a.findWinConfirmed(t),t.data[0].loan_amt>a.maix_data&&(t.data[0].loan_amt=a.maix_data),a.max=a.maix_data;var e=a.maix_data/1e5;a.maxLoanAmt=e.toFixed(2),a.loan_amt=a.maix_data,a.bankListInner=!0,console.log(t)})).catch((function(a){console.log(a)}))},fetchBanksData:function(){var a=this,t={net_salary_all_deductions:this.$router.history.current.params.net_salary_all_deductions,loan_amount_required:this.$router.history.current.params.loan_amount_required,mode_of_salary:this.$router.history.current.params.mode_of_salary,total_work_experience:this.$router.history.current.params.total_work_experience,civil_score:this.$router.history.current.params.civil_score,company_id:this.$router.history.current.params.current_company_name,any_loans_running_emi_monthly:this.$router.history.current.params.any_emi,tenure:this.tenure,company_type:this.$router.history.current.params.company_type};i["a"].post("personal-loan-result",t).then((function(t){a.min=1e5,0==t.data&&(a.nodata=!0,a.loader=!1,a.menu=!1,a.bankListInner=!1),a.value=t.data[0].loan_amt,a.banks=t.data,a.maix_data=a.findWinConfirmed(t),a.loan_amt=a.maix_data,a.max=a.maix_data;var e=a.maix_data/1e5;a.maxLoanAmt=e.toFixed(2),a.bankListInner=!0,a.loader=!1,console.log(t)})).catch((function(t){a.nodata=!0,a.loader=!1,a.menu=!1,a.bankListInner=!1,console.log(t)}))}}},d=u,_=(e("83c9"),e("2877")),m=Object(_["a"])(d,s,r,!1,null,null,null);t["default"]=m.exports},c9ac:function(a,t,e){}}]);
//# sourceMappingURL=chunk-30826f02.4b8fe258.js.map