import axios from '../../axios-auth'
export default {
    data(){
		return{
            users : [],
            apply_loan :[],
            photo : "",
            addhar_card:"", 
            pan_card : "",
            uploadPercentage: 0
        }
    },
    mounted() {
        //alert(localStorage.getItem('token'))
        if(!this.authenticated) {
            this.$router.push({ name: 'login'})
        }
    },
    created(){
     
    },
    methods: {
        selectFile(event) {
            // `files` is always an array because the file input may be in multiple mode
            this.photo = event.target.files[0];
        },
        uploadImage(){
            const data = new FormData();
            data.append('pic', this.photo);
            axios.post("user-document-upload", data,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                },
                onUploadProgress : function(progressEvent){
                    this.uploadPercentage = parseInt( Math.round(progressEvent.loaded / progressEvent.total) * 100 )
                }.bind(this)
            });

            


        }
    },

}