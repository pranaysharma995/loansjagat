<template>
<div class="container-fluid">
    <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30">
        Personal Detail Salaried
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="full-name" class="color-white">Full Name*</label>
              <input
                type="text"
                class="form-control"
                id="full-name"
                placeholder="Full Name"
                name="name"
                v-model.trim="$v.name.$model"
                :class="{'is-invalid': validationStatus($v.name)}"
              />
              <div v-if="!$v.name.required" class="invalid-feedback">Full name is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="email" class="color-white">Email*</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email ID"
                name="email"
                id="email"
                v-model.trim="$v.email.$model"
                :class="{'is-invalid': validationStatus($v.email)}"
              />
              <div v-if="!$v.email.required" class="invalid-feedback">Email is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                <label for="date-of-birth" class="color-white">Date of Birth*</label>
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

              <div v-if="!$v.date_of_birth.required" class="invalid-feedback">Date of birth is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="pan" maxlength="10" class="color-white">PAN Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="PAN Number"
                name="pan"
                v-model="panno"
                v-model.trim="$v.panno.$model"
                :class="{'is-invalid': validationStatus($v.panno)}"
              />
              <div v-if="!$v.panno.required" class="invalid-feedback">PAN is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12"></div>

            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="company-name" class="color-white">Company Name*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Name"
                name="current_company_name"
                v-model="current_company_name"
                v-model.trim="$v.current_company_name.$model"
                :class="{'is-invalid': validationStatus($v.current_company_name)}"
              />
              <div v-if="!$v.current_company_name.required" class="invalid-feedback">Company name is required.</div>
            </div>

            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="work-experience" class="color-white">Total Work Experience*</label>
              <select name="workExperince" v-model="total_work_experience" id="work-experience" class="form-control">
              <option value="0 - 1">0 - 1 Year</option>
              <option value="1 - 3">1 - 3 Years</option>
              <option value="3 year above">Above 3 Years</option>
              </select>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="joining_date_in_current_company" class="color-white">Joining In Current Company*</label>
              <select name="joining_date_in_current_company" v-model="joining_date_in_current_company" id="joining_date_in_current_company" class="form-control">
                <option value="0 - 2 months">0 - 2 Months</option>
                <option value="2- 6 months">2 - 6 Months</option>
                <option value="6 months above">Greater than 6 Months</option>
              </select>
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
     <ApplyFeature />
    </div>
  </div>
  <OtherPages/>
  <Footer/>
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
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
export default {
  name: "PersonalDetailSalaried",
  data:function()
  {
      return{
          name:null,
          total_work_experience:'0 - 1',
          current_company_name:null,
          panno:null,
          email:null,
          date_of_birth:null,
          joining_date_in_current_company:"0 - 2 months",
      }
  },
  mounted ()
  {
    this.name=localStorage.getItem("name") ? localStorage.getItem("name") : null ;
    this.total_work_experience=localStorage.getItem("total_work_experience") ? localStorage.getItem("total_work_experience") : '0 - 1';
    this.panno=localStorage.getItem("panno") ? localStorage.getItem("panno") : null;
    this.email=localStorage.getItem("email") ? localStorage.getItem("email") : null;
    this.date_of_birth=localStorage.getItem("date_of_birth") ? localStorage.getItem("date_of_birth") : null;
    this.current_company_name=localStorage.getItem("current_company_name") ? localStorage.getItem("current_company_name") : null;
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview,
    Header,
    Footer,
    OtherPages,
  },
          validations: {
        name: {required},
        current_company_name: {required},
        date_of_birth:{required},
        panno: {required, minLength: minLength(10)},
        email:{required}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
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
        }},
};
</script>
