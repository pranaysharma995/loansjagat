import axios from '../../axios-auth'
import Header from '../Navigation/Header.vue'
import Footer from '../Navigation/Footer.vue'

export default {
  components: {
		appFooter: Footer,
		appHeader: Header
	},
	name: 'apply-result',
	data(){
		return{
			value : '',
			test:'',
			type:'',
			title:'',
			first_name:'',
			middle_name:'',
			last_name:'',
			gender:'',
			marital_status:'',
			accomodation_type:'',
			residence_address:'',
			landmark:'',
			resident_pincode:'',
			permanent_is_current:'',
			permanent_landmark:'',
			permanent_address1:'',
			permanent_address2:'',
			permanent_address3:'',
			office_address:'',
			office_landmark:'',
			office_pincode:'',
			company_type:''
		}
	},
	created(){

		this.getApplyData(this.$router.history.current.params.id)
		// this.value = this.$router.history.current.params.applocation_no;
		// this.type = this.$router.history.current.params.type;
	},
	methods: {
		permanentAdd(val){
			if(val=='Yes'){
				this.permanent_landmark = this.landmark
				this.permanent_address1 = this.residence_address
			}
		},
		getApplyData(id){
			axios.get('get/applied/data/'+id)
			.then((response) => {
				this.value =  response.data.application_no;
				var res = response.data.name.split(" ");
				if(res.length > 2){
					this.first_name = res[0]
					this.middle_name = res[1]
					this.last_name = res[2]
				}else{
					this.first_name = res[0]
					this.last_name = res[1]
				}

				console.log(response);
			}).catch((err) => {
				console.log(err)
			});
		},
		saveData(e){
			e.preventDefault()
			const addData = {
				title : this.title,
				first_name:this.first_name,
				middle_name:this.middle_name,
				last_name:this.last_name,
				gender:this.gender,
				marital_status:this.marital_status,
				accomodation_type:this.accomodation_type,
				residence_address:this.residence_address,
				landmark:this.landmark,
				resident_pincode:this.resident_pincode,
				permanent_is_current:this.permanent_is_current,
				permanent_landmark:this.permanent_landmark,
				permanent_address1:this.permanent_address1,
				permanent_address2:this.permanent_address2,
				permanent_address3:this.permanent_address3,
				office_address:this.office_address,
				office_landmark:this.office_landmark,
				office_pincode:this.office_pincode,
				company_type:this.company_type,
				application_no:this.value
			}

			axios.post('/update-applied-aditional', addData)
			.then((response) => {
				console.log(response);

			}).catch((err) => {
				console.log(err)
			});

		}


	},
}
