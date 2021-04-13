<template>
<div class="container-fluid">
    <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30 heading">
        Personal Detail Salaried
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="full-name" class="color-white">Full Name <span class="color-red">*</span></label>
              <input
                type="text"
                class="form-control"
                id="full-name"
                placeholder="Name as per PAN Card"
                name="name"
                v-model.trim="$v.name.$model"
                :class="{'is-invalid': validationStatus($v.name)}"
              />
              <div v-if="!$v.name.required" class="error-message color-red sub-heading">Full name is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="email" class="color-white">Email <span class="color-red">*</span></label>
              <input
                type="email"
                class="form-control"
                placeholder="abc@gmail.com"
                name="email"
                id="email"
                v-model.trim="$v.email.$model"
                :class="{'is-invalid': validationStatus($v.email)}"
              />
              <i
                class="fa fa-info-circle input-tooltip color-blue"
                delay="0"
                data-toggle="tooltip"
                data-placement="top"
                title="Ensure valid Email ID to receive timely communication for your application."
              ></i>
              <div v-if="!$v.email.required" class="error-message color-red sub-heading">Email is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                <label for="date-of-birth" class="color-white">Date of Birth <span class="color-red">*</span></label>
              <input
                type="date"
                class="form-control"
                id="date-of-birth"
                placeholder="Date of Birth"
                name="date_of_birth"
                v-model="date_of_birth"
                v-model.trim="$v.date_of_birth.$model"
                :class="{'is-invalid': validationStatus($v.date_of_birth)}"
              />

              <div v-if="!$v.date_of_birth.required" class="error-message color-red sub-heading">Date of birth is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="pan" maxlength="10" class="color-white">PAN Number <span class="color-red">*</span></label>
              <input
                type="text"
                class="form-control"
                placeholder="ABCDE1321G"
                name="pan"
                v-model="panno"
                v-model.trim="$v.panno.$model"
                :class="{'is-invalid': validationStatus($v.panno)}"
              />
              <i
                class="fa fa-info-circle input-tooltip color-blue"
                delay="0"
                data-toggle="tooltip"
                data-placement="top"
                title="Permanent account number is requred"
              ></i>
              <div v-if="!$v.panno.required" class="error-message color-red sub-heading">PAN is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12"></div>

            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="company-name" class="color-white">Company Name <span class="color-red">*</span></label>
                 <typeahead
                 :data = "autocomplete"
                 :minMatchingChars = "1"
                 class=""
                 id="current_company_name"
                 :placeholder="current_company_name?current_company_name:'Company Name'"
                 name="current_company_name"
                 v-model.trim="$v.current_company_name.$model"
                 :class="{'is-invalids': validationStatus($v.current_company_name)}"
                 @input="autocomplete_method"
                 >
                 </typeahead>
                 


              <div v-if="!$v.current_company_name.required&&flg" class="error-message color-red sub-headings">Company name is required.</div>
            </div>

            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="work-experience" class="color-white">Total Work Experience <span class="color-red">*</span></label>

              <select name="workExperince" v-model="total_work_experience" id="work-experience"
              class="form-control"
              v-model.trim="$v.total_work_experience.$model"
              :class="{'is-invalid': validationStatus($v.total_work_experience)}"
              >
                <option value=null>Select An Option</option>
              <option value="0 - 1">0 - 1 Year</option>
              <option value="1 - 3">1 - 3 Years</option>
              <option value="3 year above">Above 3 Years</option>
              </select>
              <div v-if="!$v.total_work_experience.required" class="error-message color-red sub-heading">Total Work Experience is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="joining_date_in_current_company" class="color-white">Joining In Current Company <span class="color-red">*</span></label>
              <select name="joining_date_in_current_company" v-model="joining_date_in_current_company" id="joining_date_in_current_company" class="form-control"
              v-model.trim="$v.joining_date_in_current_company.$model"
              :class="{'is-invalid': validationStatus($v.joining_date_in_current_company)}"
              >
              <option value=null>Select An Option</option>
                <option value="0 - 2 months">0 - 2 Months</option>
                <option value="2- 6 months">2 - 6 Months</option>
                <option value="6 months above">Greater than 6 Months</option>
              </select>
              <div v-if="!$v.joining_date_in_current_company.required" class="error-message color-red sub-heading">Joining In Current Company is required.</div>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/salaried/basic-detail">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button type="submit" v-on:click="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Countinue</button>
            </div>
          </div>
        </form>
      </div>
       <ApplyReview />
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
     <ApplyFeature v-bind:list="list" />
    </div>
  </div>
  <OtherPages page="personal-loan"/>
  <Footer
  content="For instance, if Megha applies for a Personal loan of INR 3 Lacs and get the loan sanctioned at the rate of 11.99% with a tenure range of 5 years, in such a case her EMI would be INR 6,672 and complete repayment amount till the end of 5 years tenure would be INR 4,00,309 (i.e 6,672 EMI * 60 months), wherein the total interest amount is INR 1,00,309 along with principal repayment of INR 3,00,000. Few additional charges like those of minimal one-time processing fee ranging from 0.5% to 3% of loan amount, pre-payment penalty on an earlier foreclosure of loan ranging from 1% to 5% may also apply. T& C apply."
  />
</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import ApplyProgress from '../sub-components/ApplyProgress';
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';
import typeahead from 'vue-bootstrap-typeahead';
import axios from 'axios';
export default {
  name: "PersonalDetailSalaried",
  data:function()
  {
      return{
        flg:false,
          name:null,
          total_work_experience:null,
          current_company_name:null,
          panno:null,
          email:null,
          date_of_birth:null,
          joining_date_in_current_company:null,
          autocomplete:[],
          list:[
          {
            "title":"Personal Loan Starting at 10.40%",
            "new":false
          },
          {
            "title":"Free and Quick Service",
            "new":false
          },
          {
            "title":"Cashback upto Rs 5,000",
            "new":true
          },
          {
            "title":"Instant Paperless Approvals",
            "new":true
          },
          {
            "title":"10.4% interest rate",
            "new":true
          },
          {
            "title":"Servicing Pan India Cities",
            "new":false
          },
          {
            "title":"Money in Account in 24 hrs ",
            "new":false
          },
          {
            "title":"Easy Debt Consolidation",
            "new":true
          },
        ]
      }
  },
  mounted ()
  {
    this.name=localStorage.getItem("name") ? localStorage.getItem("name") : null ;
    this.total_work_experience=localStorage.getItem("total_work_experience") ? localStorage.getItem("total_work_experience") : null;
    this.panno=localStorage.getItem("panno") ? localStorage.getItem("panno") : null;
    this.email=localStorage.getItem("email") ? localStorage.getItem("email") : null;
    this.date_of_birth=localStorage.getItem("date_of_birth") ? localStorage.getItem("date_of_birth") : null;
    this.current_company_name=localStorage.getItem("current_company_name") ? localStorage.getItem("current_company_name") : null;
    this.joining_date_in_current_company=localStorage.getItem("joining_date_in_current_company") ? localStorage.getItem("joining_date_in_current_company") : null;
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview,
    Header,
    Footer,
    OtherPages,
    typeahead,
  },
          validations: {
        name: {required},
        current_company_name: {required},
        date_of_birth:{required},
        panno: {required, minLength: minLength(10)},
        email:{required},
        joining_date_in_current_company:{required},
        total_work_experience:{required},
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
          this.flg=true;
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/salaried/transaction-detail');
            localStorage.setItem("panno",this.panno);
            localStorage.setItem("date_of_birth",this.date_of_birth);
            localStorage.setItem("current_company_name",this.current_company_name);
            localStorage.setItem("email",this.email);
            localStorage.setItem("name",this.name);
            localStorage.setItem("total_work_experience",this.total_work_experience);
            localStorage.setItem("joining_date_in_current_company",this.joining_date_in_current_company);
        },
      autocomplete_method:function() {
        console.log(this.current_company_name.length)
          if (this.current_company_name.length==3){
            axios.get(process.env.VUE_APP_LIVE_HOST+"/company-filter/"+this.current_company_name)
            .then((res) =>this.autocomplete=res.data)
            .catch((err)=>console.log(err))
          }

      },


      },

};
</script>
