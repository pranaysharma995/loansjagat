<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8">
      <h3 class="color-white roboto-bold mgb-30">
        Personal Detail Self Employed
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-5 form-group">
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
            <div class="col-5 form-group">
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
            <div class="col-2 form-group"></div>
            <div class="col-5 form-group">
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
            <div class="col-5 form-group">
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
            <div class="col-2"></div>

            <div class="col-5 form-group">
                 <label for="ownership" class="color-white">Ownership Status*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Ownership Status"
                name="ownership"
                v-model.trim="$v.ownership.$model"
                :class="{'is-invalid': validationStatus($v.ownership)}"
              />
              <div v-if="!$v.ownership.required" class="invalid-feedback">Ownership status is required.</div>
            </div>

            <div class="col-5 form-group">
                 <label for="business-life" class="color-white">How Old is Business*</label>
                <select name="businessLife" v-model="businessLife" id="business-life" class="form-control">
              <option value="0">0</option>
              <option value="1-3">1-3</option>
              <option value="3-5">3-5</option>
              <option value="5-7">5-7</option>
              <option value="7-9">7-9</option>
              <option value=">10">>10</option>
              </select>
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
    <div class="col-md-4">
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
  name: "PersonalDetailSelfEmployed",
  data:function()
  {
   return{
       businessLife:0,
       ownership:null,
       pan:null,
       dateOfBirth:null,
       email:null,
       fullName:null
   }
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
            validations: {
        ownership: {required},
        dateOfBirth: {required},
        pan: {required, minLength: minLength(10)},
        email:{required},
        fullName:{required}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/self-employed/transaction-detail'); 
            alert('Data Submit');
        }},
};
</script>