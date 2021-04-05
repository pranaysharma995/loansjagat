import axios from '../../axios-auth'
export default {
    data(){
		return{
            users : [],
            apply_loan :[],
            photo : "",
            addhar_card:"", 
            pan_card : "",
            residence_proof_file:"",
            salary_one_slip_file:"",
            salary_two_slip_file:"",
            salary_three_slip_file:"",
            form_16_file:'',
            qtr_1_bank_statment_file:'',
            passport_size_photo : '',
            qtr_2_bank_statment_file:'',
            qtr_3_bank_statment_file:'',
            qtr_4_bank_statment_file:'',
            semi_annual_1_bank_file:'',
            semi_annual_2_bank_file:'',
            bank_statement_file:'',
            sale_deed_file:'',
            conveyance_deed_file:'',
            allotment_deed_file:'',
            property_map_file:'',
            complete_back_chain_of_property_file :'',
            any_other_property_document_file:'',
            additional_document_file:'',
            aadhar_card_f:'',
            pan_card_f:'',
            pass_photo:'',
            residance_p:'',
            salary_slip_one:'',
            salary_slip_two:'',
            salary_slip_three:'',
            form_16:'',
            qtr_1:'',
            qtr_2:'',
            qtr_3:'',
            qtr_4:'',
            semi_anuual_1:'',
            semi_annual_2:'',
            bank_statment:'',
            self_deed:'',
            conveyance_deed:'',
            allotment:'',
            property_map:'',
            complete_back_chain:'',
            any_other_prop_doc:'',
            basic_document:true,
            loader:false,
            salary_document:true,
            loader_1:false,
            quarterly_statement_docs:true,
            loader_2:false,
            property_documents:true,
            loader_3:false,
            additional_documents:true,
            loader_4:false,
            uploadPercentage: 0

        }
    },
    created(){
     
    },
    methods: {
        selectFile(event,type) {

            // `files` is always an array because the file input may be in multiple mode
            this.photo = event.target.files[0];
            if(type=='Aadhar_Card'){
                this.aadhar_card_f = event.target.files[0]['name']
                this.addhar_card = this.photo
            }
            if(type=='PAN_Card'){
                this.pan_card_f = event.target.files[0]['name']
                this.pan_card = this.photo
            }
            if(type=='Passport_Size_Photo'){
                this.pass_photo = event.target.files[0]['name']
                this.passport_size_photo = this.photo
            }
            if(type=='Residence_Proof'){
                this.residance_p = event.target.files[0]['name']
                this.residence_proof_file = this.photo
            }
            if(type=='Salary_Slip_1'){
                this.salary_slip_one = event.target.files[0]['name']
                this.salary_one_slip_file = this.photo
            }
            if(type=='Salary_Slip_2'){
                this.salary_slip_two = event.target.files[0]['name']
                this.salary_two_slip_file = this.photo
            }
            if(type=='Salary_Slip_3'){
                this.salary_slip_three = event.target.files[0]['name']
                this.salary_three_slip_file = this.photo
            }
            if(type=='Form_16'){
                this.form_16 = event.target.files[0]['name']
                this.form_16_file = this.photo
            }
            if(type=='Qtr1'){
                this.qtr_1 = event.target.files[0]['name']
                this.qtr_1_bank_statment_file = this.photo
            }
            if(type=='Qtr2'){
                this.qtr_2 = event.target.files[0]['name']
                this.qtr_2_bank_statment_file = this.photo
            }
            if(type=='Qtr3'){
                this.qtr_3 = event.target.files[0]['name']
                this.qtr_3_bank_statment_file = this.photo
            }
            if(type=='Qtr4'){
                this.qtr_4 = event.target.files[0]['name']
                this.qtr_4_bank_statment_file = this.photo
            }
            if(type=='Anually1'){
                this.semi_anuual_1 = event.target.files[0]['name']
                this.semi_annual_1_bank_file = this.photo
            }
            if(type=='Anually2'){
                this.semi_annual_2 = event.target.files[0]['name']
                this.semi_annual_2_bank_file = this.photo
            }
            if(type=='Bank_Statement'){
                this.bank_statment = event.target.files[0]['name']
                this.bank_statement_file = this.photo
            }
            if(type=='Sale_Deed'){
                this.self_deed = event.target.files[0]['name']
                this.sale_deed_file = this.photo
            }
            if(type=='Conveyance_Deed'){
                this.conveyance_deed = event.target.files[0]['name']
                this.conveyance_deed_file = this.photo
            }
            if(type=='Allotment'){
                this.allotment = event.target.files[0]['name']
                this.allotment_deed_file = this.photo
            }
            if(type=='Property_Map'){
                this.property_map = event.target.files[0]['name']
                this.property_map_file = this.photo
            }
            if(type=='Back_Chain'){
                this.complete_back_chain = event.target.files[0]['name']
                this.complete_back_chain_of_property_file = this.photo
            }
            if(type=='Any_other_Property_Document'){
                this.any_other_prop_doc = event.target.files[0]['name']
                this.any_other_property_document_file = this.photo
            }
            if(type=='Additional_Document'){
                this.additional_documents = event.target.files[0]['name']
                this.additional_document_file = this.photo
            }


        },
        uploadImage(type){
            if(type==1){
                this.basic_document = false
                this.loader = true
            }
            if(type==2){
                this.salary_document = false
                this.loader_1 = true
            }
            if(type==3){
                this.quarterly_statement_docs = false
                this.loader_2 = true
            }
            if(type==4){
                this.property_documents = false
                this.loader_3 = true
            }
            if(type==5){
                this.additional_documents = false
                this.loader_4 = true
            }
            const data = new FormData();
            data.append('Aadhar_Card', this.addhar_card);
            data.append('Passport_Size_Photo', this.passport_size_photo);
            data.append('PAN_Card', this.pan_card);
            data.append('Salary_Slip_one', this.salary_one_slip_file);
            data.append('Salary_Slip_two', this.salary_two_slip_file);
            data.append('Salary_Slip_three', this.salary_three_slip_file);
            data.append('Bank_Statement', this.bank_statement_file);
            data.append('Bank_Statement_one', this.semi_annual_1_bank_file);
            data.append('Bank_Statement_two', this.semi_annual_2_bank_file);
            data.append('Sale_Deed', this.sale_deed_file);
            data.append('Conveyance_Deed', this.conveyance_deed_file);
            data.append('Complete_Back_chain_of_property', this.complete_back_chain_of_property_file);
            data.append('Property_Map', this.property_map_file);
            data.append('Any_other_Property_Document', this.any_other_property_document_file);
            data.append('Additional_Document', this.additional_document_file);
            data.append('Form_16', this.form_16_file);

            axios.post("user-dashboard/pl-upload-documents", data,{
                headers : {
                    'Content-Type' : 'multipart/form-data'
                },
                onUploadProgress : function(progressEvent){
                    console.log(progressEvent.loaded)
                    if(type==1){
                        this.basic_document = true
                        this.loader = false
                    }
                    if(type==2){
                        this.salary_document = true
                        this.loader_1 = false
                    }
                    if(type==3){
                        this.quarterly_statement_docs = true
                        this.loader_2 = false
                    }
                    if(type==4){
                        this.property_documents = true
                        this.loader_3 = false
                    }
                    if(type==5){
                        this.additional_documents = true
                        this.loader_4 = false
                    }
                    //this.uploadPercentage = parseInt( Math.round(progressEvent.loaded / progressEvent.total) * 100 )
                }.bind(this)
            });

        }
    },

}