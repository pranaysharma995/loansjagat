<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8">
      <h3 class="color-white roboto-bold mgb-30">
        Transaction Detail Salaried
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-5 form-group">
              <label for="residential-ownership" class="color-white">Residential Ownership*</label>
              <input
                type="text"
                class="form-control"
                id="residential-ownership"
                placeholder="Residential Ownership"
                name="residentialOwnership"
                v-model="residentialOwnership"
                v-model.trim="$v.residentialOwnership.$model"
                :class="{'is-invalid': validationStatus($v.residentialOwnership)}"
              />
              <div v-if="!$v.residentialOwnership.required" class="invalid-feedback">Residential ownership is required.</div>
            </div>
            <div class="col-5 form-group">
              <label for="salary-type" class="color-white">Salary Type*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Salary Type"
                name="salary-type"
                id="salaryType"
                v-model="salaryType"
                v-model.trim="$v.salaryType.$model"
                :class="{'is-invalid': validationStatus($v.salaryType)}"
              />
              <div v-if="!$v.salaryType.required" class="invalid-feedback">Salary type is required.</div>
            </div>
            <div class="col-2 form-group"></div>
            <div class="col-5 form-group">
                <label for="emi" class="color-white">Current EMI*</label>
              <input
                type="text"
                class="form-control"
                id="emi"
                placeholder="EMI"
                name="emi"
                v-model="emi"
                v-model.trim="$v.emi.$model"
                :class="{'is-invalid': validationStatus($v.emi)}"
              />
              <div v-if="!$v.emi.required" class="invalid-feedback">EMI is required.</div>
            </div>
            <div class="col-5 form-group">
                 <label for="credit-score" class="color-white">Credit Score*</label>
              <select name="creditScore" v-model="creditScore" id="credit-score" class="form-control">
              <option value="below-650">Below 650</option>
              <option value="above-650">Above 650</option>
              <option value="don't know">Don't Know</option>
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
    <div class="col-md-4">
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
          creditScore:'below-650',
          emi:null,
          salaryType:null,
          residentialOwnership:null
      }

  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
              validations: {
        creditScore: {required},
        emi: {required},
        salaryType: {required},
        residentialOwnership:{required}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/salaried/offer-detail'); 
            alert('Data Submit');
        }},
};
</script>