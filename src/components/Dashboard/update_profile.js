import axios from '../../axios-auth'
export default {
    data(){
		return{
            users : [],
            apply_loan :[],
            full_name:'',
            mobile_num:'',
            dob:'',
            email:'',
            pan_no:'',
            monthly_income:'',
            gender:'',
            marital_status:'',
            residence_add:'',
            city:'',
            state:'',
            pin_code:'',
            success_msg:false

        }
    },
    created(){
        this.getUserData();
        this.getUsersAppliedLoans();
    },
    methods: {
        getUserData(){
            axios.get('show_user_profile/5627')
            .then((response)=>{
                this.users = response.data
                this.full_name = response.data.name
                this.mobile_num = response.data.mobile_number
                this.dob =   response.data.dob
                this.pan_no = response.data.panno
                this.monthly_income = response.data.net_monthly_salary
                this.gender = response.data.gender
                this.email = response.data.email
               // this.marital_status = response.data.gender
               // this.city = response.data.gender
               // this.state = 
                this.residence_add = response.data.residence_address
               // this.pin_code = 
            });
        },
        getUsersAppliedLoans(){
            const postData = {
                mobile_number:9999999999
            }
            axios.post('/dashboard', postData)
				.then((response) => {
					this.apply_loan = response.data.detail
					//this.$router.push('/inward')
					//console.log(response)
				}).catch((err) => {
					console.log(err)
				});
        },
        setVal(v){
            this.gender = v
        },
        updateProfile(){
            
            const updateProfile = {
                name : this.full_name,
                email : this.email,
                mobile_number : this.mobile_num,
                gender : this.gender,
                dob : this.dob,
                panno : this.pan_no,
                residence_address : this.residence_add, 
                net_monthly_salary : this.net_monthly_salary

            }
        axios.put('/user_profile_update/5627', updateProfile)
            .then((response) => {
              //  this.apply_loan = response.data.detail
                //this.$router.push('/inward')
                console.log(response)
                this.success_msg = true

                setTimeout(function(scope) {
                    scope.success_msg = false;
               }, 2000, this);
               this.getUserData()
               window.scrollTo(0,0);

            }).catch((err) => {
                console.log(err)
            });
        }
    },

}