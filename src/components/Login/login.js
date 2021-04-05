import axios from '../../axios-auth'

export default {
    data: () => ({
      clientId: '1034249125448-hr0gh7a35q9986bb7dgpvrk1v06bkb44.apps.googleusercontent.com',
      mobile:'',
      otp_frm:false,
      login_frm:true,
      authenticated:localStorage.getItem('token'),
      otp:''
    }),
    mounted() {
      //alert(localStorage.getItem('token'))
      if(this.authenticated) {
          this.$router.push({ name: 'dashboard'})
      }
  },
    methods: {
      verifyOTP(){
        var generate_otp = this.otp
        const addData2 = {
          otp:generate_otp,
          mobile_number:this.mobile
        }
        axios.post('/check/user/otp', addData2)
        .then((response) => {
        if(response.data==0){
          alert("Invalid")
        }else{
          window.localStorage.setItem('token', response.data.token);
          window.localStorage.setItem('mkns', response.data.mobile);
          this.$router.push({ name: 'dashboard'})
        }
        //this.$router.push('/inward')
        //console.log(response)
        }).catch((err) => {
        console.log(err)
        });
      },
      getLogin(){
      const addData2 = {
				mobile_number:this.mobile
			}
			axios.post('/login/otp', addData2)
			.then((response) => {
			if(response.data=='User does not exits'){
				alert("Invalid")
			}else{
        this.login_frm = false
        this.otp_frm = true
				// this.otp = false
			}
			//this.$router.push('/inward')
			//console.log(response)
			}).catch((err) => {
			console.log(err)
			});
        
      },
      OnGoogleAuthSuccess (idToken) {
        console.log(idToken)
        // Receive the idToken and make your magic with the backend
      },
      OnGoogleAuthFail (error) {
        console.log(error)
      }
    }
  }