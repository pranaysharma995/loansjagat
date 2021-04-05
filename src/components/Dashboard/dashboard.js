import axios from '../../axios-auth'
export default {
    data(){
		return{
            users : [],
            apply_loan :[],
            authenticated:localStorage.getItem('token'),
            mobile : localStorage.getItem('mkns')
        }
    },
    mounted() {
        //alert(localStorage.getItem('token'))
        if(!this.authenticated) {
            this.$router.push({ name: 'login'})
        }
    },
    created(){

        this.getUserData();
        this.getUsersAppliedLoans();
    },
    methods: {
        redirectPage(type){
            if(type==='Salaried Home Loan'){
                this.$router.push({ path: 'upload-hl-documents' })
            }
            if(type==='Know Your Property'){
                this.$router.push({ path: 'upload-hl-documents' })
            }
            if(type==='Salaried Personal Loan'){
                this.$router.push({ path: 'upload-pl-documents' })
            }
          
        },
        getUserData(){
            const data = {
                mobile : this.mobile
            }
            axios.post('show_user_profile',data)
            .then((response)=>{
                this.users = response.data[0]
            });
        },
        getUsersAppliedLoans(){
            const postData = {
                mobile_number:this.mobile
            }
            axios.post('/dashboard', postData)
				.then((response) => {

					this.apply_loan = response.data.detail
					//this.$router.push('/inward')
					//console.log(response)
				}).catch((err) => {
					console.log(err)
				});
        }
    },

}