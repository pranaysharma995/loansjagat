import axios from '../../axios-auth'
import Header from '../Navigation/Header.vue'
import Footer from '../Navigation/Footer.vue'
import typeahead from 'vue-bootstrap-typeahead';
import 'vue-range-component/dist/vue-range-slider.css'
 import VueRangeSlider from 'vue-range-component'
//var converter = require('number-to-words');

export default {	
  components: { 
		appFooter: Footer,
		appHeader: Header,
		 VueRangeSlider,
		typeahead
	},
	data(){
		return{
			request_id:'',
			menu:true,
			nodata:false,
			banks:[],
			sliderValue: 50,
			loader:true,
			bankListInner:false,
			value: 10,
			tenure:4,
			min:0,
			tenurehtml:'',
			max:100,
			loan_amt:'',
			prce:'',
			maix_data : 0,
			maxLoanAmt:'',
			step_val:0,
		}
	},
	computed: {
		sliderStep() { return (this.max - this.min) / 1000; }
	  },
	created(){
		this.prce = this.$router.history.current.params.loan_amount_required;
		this.request_id = this.$router.history.current.params.id;
		this.fetchBanksData();
		this.step_val = 10000
		//this.value = 150000

	},
	// filters:{
	// 	toWords:function (value) {
	// 		if(!value) return ''
	// 		return converter.toWords(value);
	// 	}
	// },
	methods: {
		applyLoan(index){
			const addData = {
				request_id : this.request_id,
				roi:this.banks[index].roi,
				pf:this.banks[index].pf,
				emi:this.banks[index].emi,
				bank_id:this.banks[index].bank_id,
				bank_name:this.banks[index].bank_name,
				loan_amount:this.banks[index].loan_amt
			}
			axios.post('applied-personal-loan',addData)
				.then((response)=>{
					window.location.href = "apply_consent_thank/"+this.request_id
					//router.push({ path: 'apply_consent_thank/'+this.request_id })
					// this.$router.push({ name: 'apply-result', 
					// 				params: { 
					// 							applocation_no: response.data.application_no,
					// 							type:'Salaried Personal Loan'
					// 						}})
				})
		},
		formatNumber(num) {
			var n1, n2;
			num = num + '' || '';
			// works for integer and floating as well
			n1 = num.split('.');
			n2 = n1[1] || null;
			n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
			num = n2 ? n1 + '.' + n2 : n1;
			return num;
		},
		startDrag(){
			this.prce = this.value
		},
		tenureDrag(){
			this.tenurehtml = this.tenure
		},
		findWinConfirmed(topConfirmed) {		
			let findTop = [];
			topConfirmed.data.forEach(obj => findTop.push(obj.minloan));
			return Math.max(...findTop);
		},
		showSlider(){

		},
		filterSliderBankData(){
			this.bankListInner = false
			this.loader = true
			this.nodata = false
			this.menu = true
			
			const addData = {
				net_salary_all_deductions:this.$router.history.current.params.net_salary_all_deductions,
				loan_amount_required:this.value,
				mode_of_salary: this.$router.history.current.params.mode_of_salary,
				total_work_experience: this.$router.history.current.params.total_work_experience,
				civil_score: this.$router.history.current.params.civil_score,
				company_id:this.$router.history.current.params.current_company_name,
				any_loans_running_emi_monthly:this.$router.history.current.params.any_emi,
				tenure:this.tenure,
				company_type:this.$router.history.current.params.company_type
			}
			axios.post('personal-loan-result',addData)
				.then((response)=>{
					
				this.loader = false
				this.nodata = false

				this.banks = response.data
				if(response.data.length == 0){
					this.nodata = true
					this.menu = false
				}
				this.min = 100000					
				
				this.maix_data = this.findWinConfirmed(response)	
				if(response.data[0].loan_amt > this.maix_data){
					response.data[0].loan_amt = this.maix_data
				}
				this.max = this.maix_data
				var mx_amt = this.maix_data / 100000
				this.maxLoanAmt = mx_amt.toFixed(2)
				this.loan_amt = this.maix_data;
				this.bankListInner = true
				
				console.log(response)
			}).catch((err)=>{
				console.log(err)
			});
		},
		fetchBanksData(){
			//alert(this.$router.history.current.params.loan_amount_required);
			//this is get data
			//
			const addData = {
				net_salary_all_deductions:this.$router.history.current.params.net_salary_all_deductions,
				loan_amount_required:this.$router.history.current.params.loan_amount_required,
				mode_of_salary: this.$router.history.current.params.mode_of_salary,
				total_work_experience: this.$router.history.current.params.total_work_experience,
				civil_score: this.$router.history.current.params.civil_score,
				company_id:this.$router.history.current.params.current_company_name,
				any_loans_running_emi_monthly:this.$router.history.current.params.any_emi,
				tenure:this.tenure,
				company_type:this.$router.history.current.params.company_type
			}
			axios.post('personal-loan-result',addData)
				.then((response)=>{
				
				this.min = 100000	
				if(response.data==0){
					this.nodata = true
					this.loader = false
					this.menu = false
					this.bankListInner = false
				}
				this.value = response.data[0].loan_amt;
				this.banks = response.data
				this.maix_data = this.findWinConfirmed(response)	
				this.loan_amt = this.maix_data;
				this.max = this.maix_data;
				var mx_amt = this.maix_data / 100000
				this.maxLoanAmt = mx_amt.toFixed(2)
				this.bankListInner = true 
				this.loader = false
				console.log(response)
			}).catch((err)=>{
				this.nodata = true
				this.loader = false
				this.menu = false
				this.bankListInner = false
				console.log(err)
			});
		},
	},
}