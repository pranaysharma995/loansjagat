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
			menu:true,
			banks:[],
			sliderValue: 50,
			loader:true,
			bankListInner:false,
			value: 10,
			tenure:30,
			min:0,
			tenurehtml:'',
			max:100,
			loan_amt:'',
			prce:'',
			maix_data : 0,
            maxLoanAmt:'',
			id:'' ,
			nodata:false,
		}
	}, 
	created(){

        this.prce = this.$router.history.current.params.loan_amount_required;
		this.id =  this.$router.history.current.params.id;
		this.value = this.$router.history.current.params.loan_amount_required;
		this.fetchBanksData();
	},
	// filters:{
	// 	toWords:function (value) {
	// 		if(!value) return ''
	// 		return converter.toWords(value);
	// 	}
	// },
	methods: {
		applyLoan(){
			const addData = {
				request_id : this.id
			}
			axios.post('applied-self-employed-home-loans',addData)
				.then((response)=>{
					this.$router.push({ name: 'apply-result', 
									params: { 
												applocation_no: response.data.application_no,
												type:'Employed Home Loan'
											}})
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
		filterSliderBankData(){
			this.bankListInner = false
			this.loader = true
			this.nodata = false
			this.menu = true
			// const addData = {
			// 	net_salary_all_deductions:this.$router.history.current.params.net_salary_all_deductions,
			// 	loan_amount_required:this.value,
			// 	mode_of_salary: this.$router.history.current.params.mode_of_salary,
			// 	total_work_experience: this.$router.history.current.params.total_work_experience,
			// 	civil_score: this.$router.history.current.params.civil_score,
			// 	company_id:this.$router.history.current.params.current_company_name,
			// 	any_loans_running_emi_monthly:this.$router.history.current.params.any_emi,
			// 	tenure:this.tenure
			// }
 			axios.get('employed-home-loan-filter/'+this.id+'/'+this.prce+'/'+this.tenure)
				.then((response)=>{
				this.loader = false
				this.nodata = false
				this.banks = response.data
				
				if(response.data.length==0)	{
					this.nodata = true
					this.menu = false
				} 	

				this.min = 1000000					
				this.maix_data = this.findWinConfirmed(response)	
				if(response.data[0].loan_amt > this.maix_data){
					response.data[0].loan_amt = this.maix_data
				}
				
				if(parseInt(this.$router.history.current.params.loan_amount_required) > parseInt(this.maix_data)){
					this.max = parseInt(this.$router.history.current.params.loan_amount_required)		
					this.maix_data = parseInt(this.$router.history.current.params.loan_amount_required);
				}else{
					this.max = this.maix_data
				}
				
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
			
			//
			// const addData = {
			// 	net_salary_all_deductions:this.$router.history.current.params.net_salary_all_deductions,
			// 	loan_amount_required:this.$router.history.current.params.loan_amount_required,
			// 	mode_of_salary: this.$router.history.current.params.mode_of_salary,
			// 	total_work_experience: this.$router.history.current.params.total_work_experience,
			// 	civil_score: this.$router.history.current.params.civil_score,
			// 	company_id:this.$router.history.current.params.current_company_name,
			// 	any_loans_running_emi_monthly:this.$router.history.current.params.any_emi,
			// 	tenure:this.tenure
			// }
			axios.get('employed-home-loan-filter/'+this.id+'/'+this.prce+'/0')
				.then((response)=>{
				
				this.min = 1000000					
				if(response.data.length==0){
					this.value = this.prce
					this.max = this.prce
					this.loader = false
					var mx_amt1 = this.prce / 100000
					this.maxLoanAmt = mx_amt1.toFixed(2)
					this.nodata = true

					return false;	
				}
				this.value = response.data[0].loan_amt;
				this.tenure = response.data[0].tennure
                this.banks = response.data
               
                this.maix_data = this.findWinConfirmed(response)	
				this.loan_amt = this.maix_data;
				//alert(this.maix_data);
                this.max = this.maix_data;
                
               
				var mx_amt = this.maix_data / 100000
				this.maxLoanAmt = mx_amt.toFixed(2)
				this.bankListInner = true
				this.loader = false
				console.log(response)
			}).catch((err)=>{
				console.log(err)
			});
		},
	},
}