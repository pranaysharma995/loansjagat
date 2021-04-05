<template>
<div class="container-fluid">
    <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30 heading">
        Personal Detail Self Employed
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
                name="fullName"
                v-model.trim="$v.fullName.$model"
                :class="{'is-invalid': validationStatus($v.fullName)}"
              />
              <div v-if="!$v.fullName.required" class="invalid-feedback">Full name is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
              <label for="email" class="color-white">Email*</label>
              <input
                type="text"
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
                name="dateOfBirth"
                v-model.trim="$v.dateOfBirth.$model"
                :class="{'is-invalid': validationStatus($v.dateOfBirth)}"
              />
              <div v-if="!$v.dateOfBirth.required" class="invalid-feedback">Date of birth is required.</div>
            </div>
            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="pan" class="color-white">PAN Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="PAN Number"
                name="pan"
                v-model.trim="$v.pan.$model"
                :class="{'is-invalid': validationStatus($v.pan)}"
              />
              <div v-if="!$v.pan.required" class="invalid-feedback">PAN is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12"></div>

            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="ownership" class="color-white">Ownership Status*</label>
              <select name="ownership" v-model="ownership" id="ownership" class="form-control"
              v-model.trim="$v.ownership.$model"
              :class="{'is-invalid': validationStatus($v.ownership)}" >
                <option value="">Select An Option</option>
                <option value="Owned">Owned</option>
                <option value="Rented">Rented</option>

            </select>
              <div v-if="!$v.ownership.required" class="invalid-feedback">Ownership status is required.</div>
            </div>

            <div class="col-md-5 col-sm-6 col-xs-12 form-group">
                 <label for="business-life" class="color-white">How Old is Business*</label>
                <select name="businessLife" v-model="businessLife" id="business-life" class="form-control"
                v-model.trim="$v.businessLife.$model"
                :class="{'is-invalid': validationStatus($v.businessLife)}">
                  <option value="">Select An Option</option>
                  <option value="1">Less than 1 year</option>
                  <option value="2">1 Yr - 3 Yr</option>
                  <option value="3">3 Yr - 5 Yr</option>
                  <option value="10">More than 5 Yr</option>

              </select>
              <div v-if="!$v.businessLife.required" class="invalid-feedback">How Old is Business is required.</div>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/self-employed/basic-detail">
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
import { required, minLength } from 'vuelidate/lib/validators'
import ApplyProgress from '../sub-components/ApplyProgress';
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';

// import {self_employed_form} from '../globalVariableSalaried.js'
export default {
  name: "PersonalDetailSelfEmployed",
  data:function()
  {
   return{
         businessLife:0,
       ownership:null,
       pan:null,
       dateOfBirth:null,
       email:null,
       fullName:null,

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
        ownership: {required},
        dateOfBirth: {required},
        pan: {required, minLength: minLength(10)},
        email:{required},
        fullName:{required},
        businessLife:{required},
    },
    mounted (){
this.businessLife=localStorage.getItem("business_registration_years") ? localStorage.getItem("business_registration_years") : null;
this.ownership=localStorage.getItem("office_ownership") ? localStorage.getItem("office_ownership") : null;
this.pan=localStorage.getItem("panno") ? localStorage.getItem("panno") : null;
this.dateOfBirth=localStorage.getItem("date_of_birth") ? localStorage.getItem("date_of_birth") : null;
this.email=localStorage.getItem("email") ? localStorage.getItem("email") : null;
this.fullName=localStorage.getItem("name") ? localStorage.getItem("name") : null;
},
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            localStorage.setItem("business_registration_years",this.businessLife);
            localStorage.setItem("office_ownership",this.ownership);
            localStorage.setItem("panno",this.pan);
            localStorage.setItem("date_of_birth",this.dateOfBirth);
            localStorage.setItem("email",this.email);
            localStorage.setItem("name",this.fullName);

            this.$router.push('/self-employed/transaction-detail');
            // alert('Data Submit');
        }},
};
</script>
