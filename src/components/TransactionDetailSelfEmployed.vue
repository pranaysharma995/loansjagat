<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8">
      <h3 class="color-white roboto-bold mgb-30">
        Transaction Detail Self Employed
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-5 form-group">
              <label for="gross-annual-income" class="color-white">Gross Annual Income*</label>
              <input
                type="text"
                class="form-control"
                id="gross-annual-income"
                placeholder="Gross Annual Income"
                name="gross-annual-income"
                v-model="grossAnnualIncome"
                v-model.trim="$v.grossAnnualIncome.$model"
                :class="{'is-invalid': validationStatus($v.grossAnnualIncome)}"
              />

              <div v-if="!$v.grossAnnualIncome.required" class="invalid-feedback">Gross annual income is required.</div>
            </div>
            <div class="col-5 form-group">
              <label for="gst" class="color-white">GST Registration*</label>
              <input
                type="text"
                class="form-control"
                placeholder="GST"
                name="gst"
                id="gst"
                v-model="gst"
                v-model.trim="$v.gst.$model"
                :class="{'is-invalid': validationStatus($v.gst)}"
              />
              <div v-if="!$v.gst.required" class="invalid-feedback">GST is required.</div>
            </div>
            <div class="col-2 form-group"></div>
            <div class="col-5 form-group">
                <label for="current-emi" class="color-white">Current EMI*</label>
              <input
                type="text"
                class="form-control"
                id="current-emi"
                placeholder="EMI"
                name="emi"
                v-model="emi"
                v-model.trim="$v.emi.$model"
                :class="{'is-invalid': validationStatus($v.emi)}"
              />
              <div v-if="!$v.emi.required" class="invalid-feedback">Current EMI is required.</div>
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
              <router-link to="/self-employed/personal-detail">
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
  name: "TransactionDetailSelfEmployed",
  data:function()
  {
      return{
       grossAnnualIncome:null,
       creditScore:'below-650',
       emi:null,
       gst:null
      }
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
                validations: {
        grossAnnualIncome: {required},
        creditScore: {required},
        emi: {required},
        gst:{required}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/self-employed/offer-detail'); 
            alert('Data Submit');
        }},
};
</script>