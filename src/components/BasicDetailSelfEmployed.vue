<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30">
        Basic Detail Self Employed
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="loan-amount" class="color-white">Loan Amount*</label>
              <input
                type="text"
                class="form-control"
                id="loan-amount"
                placeholder="Loan Amount"
                name="loanAmount"
                v-model.trim="$v.loanAmount.$model"
                :class="{'is-invalid': validationStatus($v.loanAmount)}"
              />
              <div v-if="!$v.loanAmount.required" class="invalid-feedback">Loan amount is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="annual-sales" class="color-white">Annual Sales*</label>

              <select name="annualSales" v-model="annualSales" id="annual-sales" class="form-control">
                <option value="5000000">Less than 50 Lacs</option>
                <option value="7500000">50 Lacs - 1 Cr</option>
                <option value="15000000">1 Cr - 2 Cr</option>
                <option value="25000000">2 Cr - 3 Cr</option>
                <option value="35000000">3 Cr - 4 Cr</option>
                <option value="45000000">4 Cr - 5 Cr</option>
                <option value="75000000">5 Cr - 10 Cr</option>
                <option value="150000000">10 Cr - 20 Cr</option>
                <option value="350000000">20 Cr - 50 Cr</option>
                <option value="750000000">50 Cr - 100 Cr</option>
                <option value="1000000000">More than 100 Cr</option>

            </select>
              <div v-if="!$v.annualSales.required" class="invalid-feedback">Annual sales is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
                <label for="city" class="color-white">City*</label>
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="Your City"
                name="city"
                v-model.trim="$v.city.$model"
                :class="{'is-invalid': validationStatus($v.city)}"
              />
              <div v-if="!$v.city.required" class="invalid-feedback">City is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
                 <label for="mobile-number" class="color-white">Mobile Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Mobile Number"
                name="mobileNumber"
                v-model="mobileNumber"
                v-model.trim="$v.mobileNumber.$model"
                :class="{'is-invalid': validationStatus($v.mobileNumber)}"
              />
              <div v-if="!$v.mobileNumber.required" class="invalid-feedback">Mobile number is required.</div>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button type="button" v-on:click="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Countinue</button>
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
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import ApplyProgress from './ApplyProgress';
import ApplyFeature from './ApplyFeature';
import ApplyReview from './ApplyReview';
import {self_employed_form} from '../globalVariableSalaried.js'
export default {
  name: "BasicDetailSelfEmployment",
  data:function()
  {
   return{
       mobileNumber:null,
       loanAmount:null,
       city:null,
       annualSales:null
   }
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
        validations: {
        annualSales: {required},
        loanAmount: {required},
        city: {required},
        mobileNumber: {required, minLength: minLength(10)}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            self_employed_form.mobile_number=this.mobileNumber
            self_employed_form.loan_amount_required=this.loanAmount
            self_employed_form.city=this.city
            self_employed_form.turn_over=this.annualSales

            this.$router.push('/self-employed/personal-detail');
            alert('Data Submit');
        }},
};
</script>
