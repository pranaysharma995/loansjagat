import Header from '../Navigation/Header.vue'
import Footer from '../Navigation/Footer.vue'

export default {
  components: {
		appFooter: Footer,
		appHeader: Header
	},
	data(){
		return {
			colony_name:'',
			property_type:'',
			eligible:'',
			loan_eligibilty:'',
			emi_eligible:'',
			btn_show:true
		}
	},
	created(){
		this.colony_name = this.$router.history.current.params.colony_name;
		this.property_type = this.$router.history.current.params.property_type;
		this.eligible = this.$router.history.current.params.loan_eligible;
		this.loan_eligibilty = this.$router.history.current.params.is_eligible;
		this.emi_eligible = this.$router.history.current.params.emi_eligible;
		if(this.emi_eligible=='Not Applicable'){ 
			this.btn_show = false
		}
	},
	methods: {
		
	},

}