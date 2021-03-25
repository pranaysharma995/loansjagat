<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30">
        Transaction Detail Salaried
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="residential-ownership" class="color-white">Residential Ownership*</label>
              <input
                type="text"
                class="form-control"
                id="residential-ownership"
                placeholder="Residential Ownership"
                name="ownership"
                v-model="ownership"
                v-model.trim="$v.ownership.$model"
                :class="{'is-invalid': validationStatus($v.ownership)}"
              />
              <div v-if="!$v.ownership.required" class="invalid-feedback">Residential ownership is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="salary-type" class="color-white">Salary Type*</label>
              <select name="salary-type" v-model="salary_pay_type" class="form-control" id="salary-type">
              <option value="Cash">Cash</option>
              <option value="Check">Check</option>
              <option value="Direct Bank">Direct Bank</option>
              </select>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                <label for="any_emi" class="color-white">Current any_emi*</label>
              <input
                type="text"
                class="form-control"
                id="any_emi"
                placeholder="EMI"
                name="any_emi"
                v-model="any_emi"
                v-model.trim="$v.any_emi.$model"
                :class="{'is-invalid': validationStatus($v.any_emi)}"
              />
              <div v-if="!$v.any_emi.required" class="invalid-feedback">any_emi is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="credit-score" class="color-white">Credit Score*</label>
              <select name="credit_score" v-model="credit_score" id="credit-score" class="form-control">
              <option value="Below 650">Below 650</option>
              <option value="Above 650">Above 650</option>
              <option value="Don't know">Don't Know</option>
              </select>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/salaried/personal-detail">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button v-on:click="submit" type="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Countinue</button>
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
import { required } from 'vuelidate/lib/validators'
import ApplyProgress from './ApplyProgress';
import ApplyFeature from './ApplyFeature';
import ApplyReview from './ApplyReview';
export default {
  name: "TransactionDetailSalaried",
  data:function()
  {
      return{
          credit_score:'Below 650',
          any_emi:null,
          salary_pay_type:"Cash",
          ownership:null
      }

  },
  mounted ()
  {
    this.credit_score=localStorage.getItem("credit_score") ? localStorage.getItem("credit_score") : 'Below 650';
    this.any_emi=localStorage.getItem("any_emi") ? localStorage.getItem("any_emi") : null;
    this.salary_pay_type=localStorage.getItem("salary_pay_type") ? localStorage.getItem("salary_pay_type") : 'Cash';
    this.ownership=localStorage.getItem("salariedObj.ownership") ? localStorage.getItem("salariedObj.ownership") : null;
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
              validations: {
        credit_score: {required},
        any_emi: {required},
        salary_pay_type: {required},
        ownership:{required}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/salaried/offer-detail'); 
            localStorage.setItem("ownership",this.ownership);
            localStorage.setItem("any_emai",this.any_emi)
            localStorage.setItem("salary_pay_type",this.salary_pay_type);
            localStorage.setItem("credit_score",this.credit_score)
        }},
};
</script>