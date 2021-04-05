import axios from '../axios-auth'
import Header from './Navigation/Header.vue'
import Footer from './Navigation/Footer.vue'
import $ from 'jquery'

export default {
  components: {
		appFooter: Footer,
		appHeader: Header
	},
	data(){
		return{
			name:'',
			work_profile:'',
			loan_amt_require:'',
			mobile:'',
			email:'',
			success_msg:false,
			subscribe_email : '',
			subscribe_succs:false,
			error:false,
			error_msg:''
		}
	},
	methods: {
		toggleBorder: function(event) {
			this.inputError = true
			event.target.classList.remove('quick_apply_input_error')
		  },
		  createSubscribe(){
			  var is_error = 0
			if(this.subscribe_email==""){
				this.error = true
				this.error_msg = 'Please enter email id!'
				is_error = 1;
			}
			if(!this.validEmail(this.subscribe_email)){
				this.error = true
				this.error_msg = 'Please enter valid email id!'
				is_error = 1;
			}
			if(is_error==1){
				return false
			}
			const addData = {
				email:this.subscribe_email,
			}
			axios.post('/subscriber', addData)
				.then((response) => {
					this.error = false
					this.subscribe_succs = true
				})

		  },
		validEmail: function (email) {
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		  },
		create(e){
			var is_error = 0
			if(this.name==""){
				$('#name').addClass('quick_apply_input_error')
				is_error = 1;
			}
			if(!this.validEmail(this.email)){
				$('#email').addClass('quick_apply_input_error')
				is_error = 1;
			}
			if(this.email==""){
				$('#email').addClass('quick_apply_input_error')
				is_error = 1;
			}
			if(this.mobile==""){
				$('#mobile').addClass('quick_apply_input_error')
				is_error = 1;
			}
			if(this.work_profile==""){
				$('#work_profile').addClass('quick_apply_input_error')
				is_error = 1;
			}
			if(this.loan_amt_require==""){
				$('#loan_amt_require').addClass('quick_apply_input_error')
				is_error = 1;
			}
			if(is_error==1){
				return false
			}
			const addData = {
				name:this.name,
				email:this.email,
				mobile: this.mobile,
				loan_amount_req: this.loan_amt_require,
				work_profile: this.work_profile
			}
			axios.post('/quick-apply-loan', addData)
				.then((response) => {
					this.success_msg = true
					this.name = ''
					this.email = ''
					this.work_profile = ''
					this.loan_amt_require = ''
				})
		}
	},
}
