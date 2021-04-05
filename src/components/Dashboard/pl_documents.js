import axios from '../../axios-auth'
//import $ from 'jquery'

export default {
    data(){
		return{
            users : [],
            apply_loan :[],
            photo : "",
            addhar_card:"", 
            pan_card : "",
            residence_proof:"",
            passport_size_photo:"",
            resident_prf_file:"",
            salary_one_slip_file:"",
            salary_two_slip_file:"",
            salary_three_slip_file:"",
            bank_statement_one_file:"",
            bank_statement_two_file:"",
            bank_statement_three_file:"",
            uploadPercentage: 0,
            image:'',
            adhar:'',
            pan_card_htm:'',
            resident_prf:'',
            salary_one_slip:'',
            salary_two_slip:'',
            salary_three_slip:'',
            bank_statement_name:'',
            bank_statement_two:'',
            bank_statement_three:'',
            pass_photo:'',
            loader:false,
            document_upload:true,
            salaryslipdoc:true,
            bank_stat:true,
            loader_2:false,
            loader_3:false,
            addtional_doc_file : '',
            addl_name:'',
            is_tab_active:'',
            addnl_doc:true
        }
    },
    mounted() {
       // alert(localStorage.getItem('token'))
        if(!localStorage.getItem('token')) {
            this.$router.push({ name: 'login'})
        }
    },
    created(){
     
    },
    methods: {
        selectFile(event,type) {
            this.photo = event.target.files[0];
           // alert()
            if(type == 'aadhar_card'){
                this.adhar = event.target.files[0]['name']
               // $('#file-1').val(event.target.files[0]['name'])
                this.addhar_card = this.photo
            }
            if( type == 'pan_card'){
                this.pan_card_htm = event.target.files[0]['name']
                this.pan_card = this.photo
            }
            if( type == 'passport_size_photo'){
                this.pass_photo = event.target.files[0]['name']
                this.passport_size_photo = this.photo
            }
            // if(type=='residence_proof'){
            //     data.append('Aadhar_Card', this.photo);
            // }
            if( type == 'Salary_Slip_one'){
                this.salary_one_slip = event.target.files[0]['name']
                this.salary_one_slip_file = this.photo
            }
            if( type == 'Salary_Slip_two'){
                this.salary_two_slip = event.target.files[0]['name']
                this.salary_two_slip_file = this.photo
            }
            if( type == 'Salary_Slip_three'){
                this.salary_three_slip = event.target.files[0]['name']
                this.salary_three_slip_file = this.photo
            }
            if( type == 'Bank_statement'){
                this.bank_statement_name = event.target.files[0]['name']
                this.bank_statement_one_file = this.photo
            }
            if( type == 'Bank_statement_2'){
                this.bank_statement_two = event.target.files[0]['name']
                this.bank_statement_two_file = this.photo
            }
            if( type == 'Bank_statement_3'){
                this.bank_statement_three = event.target.files[0]['name']
                this.bank_statement_three_file = this.photo
            }
            if( type == 'addnl_doc'){
                this.addl_name = event.target.files[0]['name']
                this.addtional_doc_file = this.photo
            }
        },
        createImage(file) {
            //var image = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = (e) => {
              vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
          },
          removeImage: function () {
            this.image = '';
          },
        uploadImage(type){
            if(type==1){
            this.document_upload = false
            this.loader = true
            }
            if(type==2){
                this.salaryslipdoc = false
                this.loader_2 = true
            }
             if(type==3){
                this.bank_stat = false
                this.loader_3 = true
            }
            if(type==4){
                this.addnl_doc = false
                this.loader_4 = true
            }
            const data = new FormData();
            data.append('Aadhar_Card', this.addhar_card);
            data.append('Passport_Size_Photo', this.passport_size_photo);
            data.append('PAN_Card', this.pan_card);
            data.append('Salary_Slip_one', this.salary_one_slip_file);
            data.append('Salary_Slip_two', this.salary_two_slip_file);
            data.append('Salary_Slip_three', this.salary_three_slip_file);
            data.append('Bank_Statement_one', this.bank_statement_one_file);
            data.append('Bank_Statement_two', this.bank_statement_two_file);
            data.append('Bank_Statement_three', this.bank_statement_three_file);
           // data.append('')
            axios.post("user-dashboard/pl-upload-documents", data,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                },
                onUploadProgress : function(progressEvent){
                    console.log(progressEvent.loaded)
                    if(type==1){
                        this.loader = false
                        this.document_upload = true
                    }
                    if(type==2){
                        this.loader_2 = false
                        this.salaryslipdoc = true
                    }
                    if(type==3){
                        this.loader_3 = false
                        this.bank_stat = true
                    }
                    //this.uploadPercentage = parseInt( Math.round(progressEvent.loaded / progressEvent.total) * 100 )
                }.bind(this)
            });

        }
    },

}