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
              <label for="residential-ownership" class="color-white">Residential Ownership<span class="color-red">*</span></label>
              <select name="ownership" v-model="ownership"
              class="form-control"
              id="residential-ownership"
              v-model.trim="$v.ownership.$model"
              :class="{'is-invalid': validationStatus($v.ownership)}"
              >
                <option value="">Select An Option</option>
                  <option value="Owned">Owned</option>
                  <option value="Rented">Rented</option>
                </select>
              <div v-if="!$v.ownership.required&&flg" class="error-message color-red sub-heading">Residential ownership is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="salary-type" class="color-white">Salary Type<span class="color-red">*</span></label>
              <select name="salary-type" v-model="mode_of_salary" class="form-control" id="salary-type"
              v-model.trim="$v.mode_of_salary.$model"
              :class="{'is-invalid': validationStatus($v.mode_of_salary)}"
              @change='reset_salary_account_name'
              >
                <option value="">Select An Option</option>
              <option value="Cash">Cash</option>
              <option value="Check">Check</option>
              <option value="Direct Bank">Direct Bank</option>
              </select>
              <div v-if="!$v.mode_of_salary.required&&flg" class="error-message color-red sub-heading">Salary Type is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                <label for="any_loans_running_emi_monthly" class="color-white">Current EMI<span class="color-red">*</span></label>
              <input
                type="text"
                class="form-control"
                id="any_loans_running_emi_monthly"
                placeholder="EMI"
                name="any_loans_running_emi_monthly"
                v-model="any_loans_running_emi_monthly"
                v-model.trim="$v.any_loans_running_emi_monthly.$model"
                :class="{'is-invalid': validationStatus($v.any_loans_running_emi_monthly)}"
                v-on:input="words"
              />
              <i
                class="fa fa-info-circle input-tooltip color-blue"
                delay="0"
                data-toggle="tooltip"
                data-placement="top"
                title="It Helps Calculate The Correct Eligible Loan Amount."
              ></i>
              <div v-if="any_loans_running_emi_monthly!=''" class="color-white number2words">{{words_str}}</div>
              <div v-if="!$v.any_loans_running_emi_monthly.required&&flg" class="error-message color-red sub-heading">EMI is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="credit-score" class="color-white">Credit Score<span class="color-red">*</span></label>
              <select name="civil_score" v-model="civil_score" id="credit-score" class="form-control"
              v-model.trim="$v.civil_score.$model"
              :class="{'is-invalid': validationStatus($v.civil_score)}"
              >
                <option value="">Select An Option</option>
              <option value="Below 650">Below 650</option>
              <option value="Above 650">Above 650</option>
              <option value="Don't know">Don't Know</option>
              </select>
                <div v-if="!$v.civil_score.required&&flg" class="error-message color-red sub-heading">Credit Score is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>

            <div v-if="mode_of_salary=='Direct Bank'"class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="salary_account_name" class="color-white">Salary Bank<span class="color-red">*</span></label>
                <select  class="form-control" id="salary_account_name" v-model="salary_account_name"
                v-model.trim="$v.salary_account_name.$model"
                :class="{'is-invalid': validationStatus($v.salary_account_name)}"

                >
                  <option value="">Select Bank</option>
                  <option v-for="bank in banks" :key="bank.id" :value="bank.id">{{bank.bank_name}}</option>
                </select>
              <div v-if="!$v.salary_account_name.required&&flg" class="error-message color-red sub-heading">Salary Bank is required</div>
            </div>

            <div class="col-12 form-group mgt-15">
              <router-link to="/salaried/personal-detail">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button v-on:click="submit" type="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Get Offers</button>
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
import { required,numeric } from 'vuelidate/lib/validators'
import ApplyProgress from '../sub-components/ApplyProgress';
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';
import axios from 'axios';
import { ToWords } from 'to-words';
const toWords = new ToWords({
  localeCode: 'en-IN',
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
  }
});
export default {
  name: "TransactionDetailSalaried",
  data:function()
  {
      return{
        words_str:'',
        flg:false,
        banks:[],
        salary_account_name:"",
          civil_score:'Below 650',
          any_loans_running_emi_monthly:"",
          mode_of_salary:"Cash",
          ownership:"",
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
    this.civil_score=localStorage.getItem("civil_score") ? localStorage.getItem("civil_score") : "";
    this.any_loans_running_emi_monthly=localStorage.getItem("any_loans_running_emi_monthly") ? localStorage.getItem("any_loans_running_emi_monthly") : "";
    this.mode_of_salary=localStorage.getItem("mode_of_salary") ? localStorage.getItem("mode_of_salary") : "";
    this.ownership=localStorage.getItem("ownership") ? localStorage.getItem("ownership") : "";
    this.salary_account_name=localStorage.getItem("salary_account_name") ? localStorage.getItem("salary_account_name") : "";
    this.fetchBankData();
    this.words();
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
        any_loans_running_emi_monthly: {required,numeric},
        mode_of_salary: {required},
        ownership:{required},
        salary_account_name:{required},

    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
          this.flg=true;
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/salaried/offer-detail');
            localStorage.setItem("ownership",this.ownership);
            localStorage.setItem("any_loans_running_emi_monthly",this.any_loans_running_emi_monthly)
            localStorage.setItem("mode_of_salary",this.mode_of_salary);
            localStorage.setItem("civil_score",this.civil_score);
            localStorage.setItem("salary_account_name",this.salary_account_name==''?'':this.salary_account_name*1);
        },
        fetchBankData:function(){
    			axios.get(process.env.VUE_APP_LIVE_HOST+'/salaried-bank-account').then((response)=>{
    				this.banks = response.data
    				// console.log(response)
    			}).catch((err)=>{
    				console.log(err)
    			});
    		},
        reset_salary_account_name:function(){
          console.log('reset');
          if (this.mode_of_salary!='Direct Bank'){
            this.salary_account_name='';
          }
        },
        words:function(){

          if (this.any_loans_running_emi_monthly.match("[0-9]+")==this.any_loans_running_emi_monthly){

          this.words_str=toWords.convert(this.any_loans_running_emi_monthly)}
          if(this.any_loans_running_emi_monthly=='' || this.any_loans_running_emi_monthly==null){
            console.log(this.any_loans_running_emi_monthly);
            this.words_str=''
          }
        },

      },//methods
};
</script>
