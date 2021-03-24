<template>
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
                name="loanAmount"
                v-model.trim="$v.loanAmount.$model"
                :class="{'is-invalid': validationStatus($v.loanAmount)}"
              />
              <div v-if="!$v.loanAmount.required" class="invalid-feedback">Loan amount is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="monthly-salary" class="color-white">Net Monthly Salary*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Net Monthly Salary"
                name="monthlySalary"
                id="monthly-alary"
                v-model.trim="$v.monthlySalary.$model"
                :class="{'is-invalid': validationStatus($v.monthlySalary)}"
              />
              <div v-if="!$v.monthlySalary.required" class="invalid-feedback">Monthly salary is required.</div>
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
                v-model.trim="$v.mobileNumber.$model"
                :class="{'is-invalid': validationStatus($v.mobileNumber)}"
              />
              <div v-if="!$v.mobileNumber.required" class="invalid-feedback">Mpbile number is required.</div>
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
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import ApplyProgress from './ApplyProgress';
import ApplyFeature from './ApplyFeature';
import ApplyReview from './ApplyReview';
export default {
  name: "BasicDetailSalaried",
  data:function()
  {
      return{
        loanAmount:null,
        mobileNumber:null,
        city:null,
        monthlySalary:null
      }
  },
      validations: {
        loanAmount: {required},
        monthlySalary: {required},
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
            this.$router.push('/salaried/personal-detail'); 
            alert('Data Submit');
        }},
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
};
</script>