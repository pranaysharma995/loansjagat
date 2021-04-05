import axios from '../../axios-auth'
import Header from '../Navigation/Header.vue'
import Footer from '../Navigation/Footer.vue'
import $ from 'jquery'
import typeahead from 'vue-bootstrap-typeahead';
export default {
  components: {
		appFooter: Footer,
		appHeader: Header,
		typeahead
	},
	data(){
		return{
			colonies : [],
			colony_name:'',
			colony_id:'',
			step1 : true,
			step2 : false,
			step3 : false,
			reg_amt_filed:true,
			Purpose_checking_property:'',
			mkt_value:'',
			property_hold:'',
			mobile:'',
			checking_property:'',
			Registry_Amount:'',
			Property_Typ:'',
			Property_Ocuupied_Status:'',
			Property_Deed_name:'',
			email:'',
			property_mes:'',
			map_available:'',
			societyname:'',
			construtionage:'',
			Property_Mesurment:''
		}
	},
	created(){
		this.Colonies();
	},
	methods: {
		chngeField(val){
			if(val==='Home Loan'){
				this.reg_amt_filed = true
			}else{
				this.reg_amt_filed = false
			}
		},
		showStep(id){
			if(id==1){
				$('#step_1').addClass('active');
				$('#step_2').removeClass('active');
				$('#step_3').removeClass('active');
				this.step_1 = true
				this.step1=true;
				this.step2=false;
				this.step3=false;
			}
			if(id==2){
				$('#step_2').addClass('active');
				$('#step_1').removeClass('active');
				$('#step_3').removeClass('active');
				this.step1=false;
				this.step2=true;
				this.step3=false;
			}
			if(id==3){
				$('#step_3').addClass('active');
				$('#step_1').removeClass('active');
				$('#step_2').removeClass('active');
				this.step1=false;
				this.step2=false;
				this.step3=true;
			}
		},
		Colonies(){
			axios.get('know-your-property').then((response)=>{
				this.colonies = response.data
			}).catch((err)=>{
				console.log(err)
			});
		},
		setLedgerID_1(id){
			this.colony_id = id;
		},
		createKnowProperty(){

			const addData = {
				Purpose_checking_property:this.Purpose_checking_property,
				Property_Area:this.Property_Area,
				Colony_Name: this.colony_id,
				property_mes: this.property_mes,
				mkt_value: this.mkt_value,
				Registry_Amount: this.Registry_Amount,
				Property_Typ: this.Property_Typ,
				Property_Ocuupied_Status: this.Property_Ocuupied_Status,
				Property_Nature: this.Property_Nature,
				map_available: this.map_available,
				property_hold: this.property_hold,
				construtionage: this.construtionage,
				Property_Deed_name: this.Property_Deed_name,
				societyname: this.societyname,
				Property_Mesurment:this.Property_Mesurment,
				name: this.name,
				email: this.email,
				mobile: this.mobile,
			}
			axios.post('/know-property-status/', addData)
				.then((response) => {
					this.$router.push({ name: 'know_result', 
									params: { 
												colony_name: response.data[0].Colony_Name, 
												property_type:response.data[0].Property_Type,
												is_eligible:response.data[0].elgible,
												loan_eligible:response.data[0].show,
												emi_eligible:response.data[0].monthly_emi,
												
											}})
					//this.$router.push('/inward')
					console.log(response)
				}).catch((err) => {
					console.log(err)
				});

		}
	}

}