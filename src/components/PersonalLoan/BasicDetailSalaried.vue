<template>
<div class="container-fluid">
    <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30">
        Basic Detail Salaried
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="loan-amount" class="color-white">Loan Amount Required*</label>
              <input
                type="text"
                class="form-control"
                id="loan-amount"
                placeholder="Loan Amount"
                name="loan_amount_required"
                v-model.trim="$v.loan_amount_required.$model"
                :class="{'is-invalid': validationStatus($v.loan_amount_required)}"
              />
              <div v-if="!$v.loan_amount_required.required" class="invalid-feedback">Loan amount is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="monthly-salary" class="color-white">Net Monthly Salary*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Net Monthly Salary"
                name="net_salary_all_deductions"
                id="monthly-alary"
                v-model.trim="$v.net_salary_all_deductions.$model"
                :class="{'is-invalid': validationStatus($v.net_salary_all_deductions)}"
              />
              <div v-if="!$v.net_salary_all_deductions.required" class="invalid-feedback">Monthly salary is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
                <label for="current_city_other" class="color-white">City*</label>
              <input
                type="text"
                class="form-control"
                id="current_city_other"
                placeholder="Your current_city_other"
                name="current_city_other"
                v-model.trim="$v.current_city_other.$model"
                :class="{'is-invalid': validationStatus($v.current_city_other)}"
              />
              <div v-if="!$v.current_city_other.required" class="invalid-feedback">current_city_other is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
                 <label for="mobile_number-number" class="color-white">Mobile Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Mobile Number"
                name="mobile_number"
                v-model.trim="$v.mobile_number.$model"
                :class="{'is-invalid': validationStatus($v.mobile_number)}"
              />
              <div v-if="!$v.mobile_number.required" class="invalid-feedback">Mpbile number is required.</div>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/">
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
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';
export default {
  name: "BasicDetailSalaried",
  data:function()
  {
      return{
        loan_amount_required:null,
        mobile_number:null,
        current_city_other:null,
        net_salary_all_deductions:null
      }
  },
  mounted ()
  {
    this.loan_amount_required=localStorage.getItem("loan_amount_required") ? localStorage.getItem("loan_amount_required") : null;
    this.mobile_number=localStorage.getItem("mobile_number") ? localStorage.getItem("mobile_number") : null;
    this.current_city_other=localStorage.getItem("current_city_other") ? localStorage.getItem("current_city_other") :null ;
    this.net_salary_all_deductions=localStorage.getItem("net_salary_all_deductions") ? localStorage.getItem("net_salary_all_deductions") : null;
  },
      validations: {
        loan_amount_required: {required},
        net_salary_all_deductions: {required},
        current_city_other: {required},
        mobile_number: {required, minLength: minLength(10)}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/salaried/personal-detail');
            localStorage.setItem("loan_amount_required",this.loan_amount_required);
            localStorage.setItem("net_salary_all_deductions",this.net_salary_all_deductions);
            localStorage.setItem("current_city_other",this.current_city_other);
            localStorage.setItem("mobile_number",this.mobile_number);
        }},
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview,
    Header,
    Footer,
    OtherPages,
  },
};
</script>
