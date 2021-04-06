<template>
  <div class="container-fluid">
      <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30 heading">
        Transaction Detail Self Employed
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
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
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="gst" class="color-white">GST Registration*</label>

              <select name="gst" v-model="gst" id="gst" class="form-control">
                <option value="Yes">Yes</option>
                <option value="No">No</option>

            </select>
              <!-- <div v-if="!$v.gst.required" class="invalid-feedback">GST is required.</div> -->
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
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
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="credit-score" class="color-white">Credit Score*</label>
                <select name="creditScore" v-model="creditScore" id="credit-score" class="form-control">
              <option value="below-650">Below 650</option>
              <option value="above-650">Above 650</option>
              <option value="don't know">Don't Know</option>
              </select>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="business_type" class="color-white">Business Type*</label>
                <select name="business_type" v-model="business_type"
                  id="business_type"
                  class="form-control"
                  v-model-trim="business_type"
                  :class="{'is-invalid': validationStatus($v.business_type)}"
                  >
                  <option value="Trader">Trader</option>
                  <option value="Manufacturer">Manufacturer</option>
                  <option value="Service Provider">Service Provider</option>
                  <option value="Retailer">Retailer</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Others">Others</option>
              </select>


            <div v-if="!$v.business_type.required" class="invalid-feedback">Business Type required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="industries_name" class="color-white">Industries Name*</label>
                <select name="industries_name"
                v-model="industries_name"
                id="industries_name"
                 class="form-control"
                 @change="filterLists($event, $event.target.selectedIndex)"
                 v-model-trim="industries_name"
                 :class="{'is-invalid': validationStatus($v.industries_name)}"
                 >
              <option value="">Select Industry</option>
              <option v-for="indus in industries" :value="indus.id" :key="indus.id">{{indus.industry}}</option>
              </select>
              <div v-if="!$v.industries_name.required" class="invalid-feedback">Industries Name required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="industries_item" class="color-white">Industries Item*</label>
                <select name="industries_item" v-model="industries_item" id="industries_item" class="form-control"
                v-model-trim="industries_item"
                :class="{'is-invalid': validationStatus($v.industries_item)}">
              <option value="">Select Industry</option>
              <option v-for="item in items" :value="item.id" :key="item.id">{{item.Item}}</option>
              </select>
              <div v-if="!$v.industries_item.required" class="invalid-feedback">Industries Item required.</div>
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
    <div class="col-md-4 col-sm-12 col-xs-12">
     <ApplyFeature />
    </div>
  </div>
  <OtherPages/>
  <Footer/>
</div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import ApplyProgress from '../sub-components/ApplyProgress';
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
// import {self_employed_form} from '../globalVariableSalaried.js'
import axios from 'axios';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';

export default {
  name: "TransactionDetailSelfEmployed",
  data:function()
  {
      return{
       grossAnnualIncome:null,
       creditScore:'below-650',
       emi:null,
       gst:"No",
       industries:[],
       items:[],
       industries_name:'',
       business_type:"Trader",
       industries_item:'',
       self_employed_form:{},
      }
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
        grossAnnualIncome: {required},
        creditScore: {required},
        emi: {required},
        gst:{required},
        business_type:{required},
        industries_name:{required},
        industries_item:{required},

    },
    mounted (){
      this.getIndustries();
      this.self_employed_form=localStorage.getItem("self_employed_form") ? JSON.parse(localStorage.getItem("self_employed_form")) : {};
      this.grossAnnualIncome=this.self_employed_form.gross_annual_income ? this.self_employed_form.gross_annual_income : null;
      this.creditScore=this.self_employed_form.civil_score ? this.self_employed_form.civil_score : null;
      this.emi=this.self_employed_form.any_loans_running_emi_monthly ? this.self_employed_form.any_loans_running_emi_monthly : null;
      this.gst=this.self_employed_form.gst ? this.self_employed_form.gst : 'No';
      this.business_type=this.self_employed_form.business_type ? this.self_employed_form.business_type : "Trader";
      this.business_type=this.self_employed_form.type_of_business_industry ? this.self_employed_form.type_of_business_industry : "Trader";
      this.industries_name=this.self_employed_form.industry_type ? this.self_employed_form.industry_type : null;
      this.industries_item=this.self_employed_form.industry_item ? this.self_employed_form.industry_item : null;
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
            this.self_employed_form.gross_annual_income=this.grossAnnualIncome
            this.self_employed_form.civil_score=this.creditScore
            this.self_employed_form.any_loans_running_emi_monthly=this.emi
            this.self_employed_form.gst=this.gst
            this.self_employed_form.business_type=this.business_type
            this.self_employed_form.type_of_business_industry=this.business_type
            this.self_employed_form.industry_type=this.industries_name
            this.self_employed_form.industry_item=this.industries_item
            localStorage.setItem("self_employed_form",JSON.stringify(this.self_employed_form));
            // console.log(self_employed_form);
            // alert('Data Submit');
        },
        getIndustries: function(){
          console.log(process.env.VUE_APP_LIVE_HOST+'/bl-margin-list');
        axios.get(process.env.VUE_APP_LIVE_HOST+'/bl-margin-list')
        .then((response)=>{
        this.industries = response.data
        console.log(response)
        }).catch((err)=>{
        console.log(err)
        });
        },//
        filterLists:function(event,selectedIndex){
        this.items = this.industries[selectedIndex-1].blmarginlist_item
        //	this.lists  = this.industries[0].filter(c => c.industry_id.indexOf(val) > -1);
        //console.log(this.industries[indval].blmarginlist_item);
        },
      },//methods

};
</script>
