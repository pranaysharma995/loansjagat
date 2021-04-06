<template>
  <div class="container-fluid">
      <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30 heading">
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
              <select name="salary-type" v-model="mode_of_salary" class="form-control" id="salary-type"
              v-model.trim="$v.mode_of_salary.$model"
              :class="{'is-invalid': validationStatus($v.mode_of_salary)}"
              >
                <option value=null>Select An Option</option>
              <option value="Cash">Cash</option>
              <option value="Check">Check</option>
              <option value="Direct Bank">Direct Bank</option>
              </select>
              <div v-if="!$v.mode_of_salary.required" class="invalid-feedback">Salary Type is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                <label for="any_loans_running_emi_monthly" class="color-white">Current EMI*</label>
              <input
                type="text"
                class="form-control"
                id="any_loans_running_emi_monthly"
                placeholder="EMI"
                name="any_loans_running_emi_monthly"
                v-model="any_loans_running_emi_monthly"
                v-model.trim="$v.any_loans_running_emi_monthly.$model"
                :class="{'is-invalid': validationStatus($v.any_loans_running_emi_monthly)}"
              />
              <div v-if="!$v.any_loans_running_emi_monthly.required" class="invalid-feedback">EMI is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="credit-score" class="color-white">Credit Score*</label>
              <select name="civil_score" v-model="civil_score" id="credit-score" class="form-control"
              v-model.trim="$v.civil_score.$model"
              :class="{'is-invalid': validationStatus($v.civil_score)}"
              >
                <option value=null>Select An Option</option>
              <option value="Below 650">Below 650</option>
              <option value="Above 650">Above 650</option>
              <option value="Don't know">Don't Know</option>
              </select>
                <div v-if="!$v.civil_score.required" class="invalid-feedback">Credit Score is required.</div>
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
import { required } from 'vuelidate/lib/validators'
import ApplyProgress from '../sub-components/ApplyProgress';
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';
export default {
  name: "TransactionDetailSalaried",
  data:function()
  {
      return{
          civil_score:'Below 650',
          any_loans_running_emi_monthly:null,
          mode_of_salary:"Cash",
          ownership:null,
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
    this.civil_score=localStorage.getItem("civil_score") ? localStorage.getItem("civil_score") : null;
    this.any_loans_running_emi_monthly=localStorage.getItem("any_loans_running_emi_monthly") ? localStorage.getItem("any_loans_running_emi_monthly") : null;
    this.mode_of_salary=localStorage.getItem("mode_of_salary") ? localStorage.getItem("mode_of_salary") : null;
    this.ownership=localStorage.getItem("ownership") ? localStorage.getItem("ownership") : null;
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
        civil_score: {required},
        any_loans_running_emi_monthly: {required},
        mode_of_salary: {required},
        ownership:{required},

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
            localStorage.setItem("any_loans_running_emi_monthly",this.any_loans_running_emi_monthly)
            localStorage.setItem("mode_of_salary",this.mode_of_salary);
            localStorage.setItem("civil_score",this.civil_score)
        }},
};
</script>
