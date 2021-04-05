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
			tennure_max:'',
			profession:'',
			top_up_amt:'',
			banks:[],
			sliderValue: 50,
			loader:true,
			bankListInner:false,
			value: 10,
			tenure:5,
			min:0,
			tenurehtml:'',
			max:100,
			loan_amt:'',
			prce:'',
			topup:'',
			maix_data : 0,
            maxLoanAmt:'',
			id:'' ,
			nodata:false,
			type_of_loan:'',
			type_loan:'',
			title:''
		}
	}, 
	created(){
        this.prce = this.$router.history.current.params.loan_amount_required;
		this.id =  this.$router.history.current.params.dataid;
		this.type_of_loan = this.$router.history.current.params.type;
		this.profession = this.$router.history.current.params.profession
		this.type_loan = this.$router.history.current.params.type_loan
		this.fetchBanksData();
		this.title = this.$router.history.current.params.type
	},
	methods: {
		applyLoan(index){
			const addData = {
				request_id : this.id,
				roi:this.banks[index].roi,
				pf:this.banks[index].pf,
				emi:this.banks[index].emi,
				bank_id:this.banks[index].bank_id,
				bank_name:this.banks[index].bank_name,
				loan_amount:this.banks[index].loan_amt
			}
			axios.post('applied-balance-transfer',addData)
				.then((response)=>{
					this.$router.push({ name: 'apply-result', 
									params: { 
												applocation_no: response.data.application_no,
												type:'Salaried Personal Loan'
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
			this.top_up_amt = parseInt(this.value) - parseInt(this.prce);
			this.topup = this.top_up_amt
			//this.prce = this.value
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
			let url = '';

			if(this.type_of_loan=='Credit Cards'){
					url = 'credit/card/banks/';
					this.tennure_max = 5
			}
			if(this.type_of_loan=='Personal Loan'){
				if(this.type_loan=='Multiple Loan'){
					url = 'multiple/loan/personal/';
					this.tennure_max = 5
				}else{
					url = 'bt_banks/';
					this.tennure_max = 5
				}
			}
			if(this.type_of_loan=='Business Loan'){
				if(this.type_loan=='Multiple Loan'){
					url = 'multiple/loan/business/';
					this.tennure_max = 5
				}else{
					url = 'self/employedbusineesloan/';
					this.tennure_max = 5
				}
				
			}
			if(this.type_of_loan=='Home Loan'){
				
				if(this.profession=='Business Owner'){
					url = 'self/employedhomeloan/';
				}else{
					url = 'get/bthomeloan/';
				}
				this.tennure_max = 30
			}
			if(this.type_of_loan=='Loan Against Property'){
				url = 'get/laploan/';
				this.tennure_max = 30
			}
			axios.get(url+this.id+'/'+this.value+'/'+this.tenure)
				.then((response)=>{
                this.min = response.data.current_outstanding
				this.loader = false
				this.nodata = false
				this.banks = response.data.banks
				
				if( response.data.banks.length == 0 )	{
					this.nodata = true
					this.menu = false
				} 	

                this.prce = response.data.current_outstanding
									
				//this.value = response.data.start_amount

				this.banks = response.data.banks
				
				this.maix_data = response.data.max

				this.max = this.maix_data
				var mx_amt = this.maix_data / 100000
				this.maxLoanAmt = mx_amt.toFixed(2)
				this.loan_amt = this.maix_data;
				this.bankListInner = true
				
				console.log(response)
			}).catch((err)=>{
				this.nodata = true
				this.menu = false
				console.log(err)
			});
		},
		fetchBanksData(){
			let url = '';
			//alert(this.type_of_loan);
			if(this.type_of_loan=='Credit Cards'){
					url = 'credit/card/banks/';
					this.tennure_max = 5
			}
			if(this.type_of_loan=='Personal Loan'){
				if(this.type_loan=='Multiple Loan'){
					url = 'multiple/loan/personal/';
					this.tennure_max = 5
				}else{
					url = 'bt_banks/';
					this.tennure_max = 5
				}
			}
			if(this.type_of_loan=='Business Loan'){
				if(this.type_loan=='Multiple Loan'){
					url = 'multiple/loan/business/';
					this.tennure_max = 5
				}else{
					url = 'self/employedbusineesloan/';
					this.tennure_max = 5
				}
			}
			if(this.type_of_loan=='Home Loan'){
			   if(this.profession=='Business Owner'){
					url = 'self/employedhomeloan/';
				}else{
					url = 'get/bthomeloan/';
				}
				this.tennure_max = 30
			}
			if(this.type_of_loan=='Loan Against Property'){
				url = 'get/laploan/';
				this.tennure_max = 30
			}
			// if(this.type_of_loan=='Overdraft'){
				
			// } 

			axios.get(url+this.id+'/0/0')
				.then((response)=>{
				
				if(response.data.banks.length==0){
					this.loader = false
					this.nodata = true
					return false;	
				}
				
                this.prce = response.data.current_outstanding
				this.min = response.data.start_amount					
				this.value = response.data.start_amount
				this.tenure	 = response.data.tennure
				this.banks = response.data.banks
			     
				this.maix_data = response.data.max
				
				this.loan_amt = this.maix_data;
				
				this.max = this.maix_data;
				
				var mx_amt = this.maix_data / 100000
				this.maxLoanAmt = mx_amt.toFixed(2)
				this.bankListInner = true
				this.loader = false
				console.log(response)
			}).catch((err)=>{
				this.loader = false
				this.nodata = true
				return false;	
			});
		},
	},
}