<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8">
      <h3 class="color-white roboto-bold mgb-30">
        Personal Detail Salaried
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
                type="email"
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
                v-model="dateOfBirth"
                v-model.trim="$v.dateOfBirth.$model"
                :class="{'is-invalid': validationStatus($v.dateOfBirth)}"
              />

              <div v-if="!$v.dateOfBirth.required" class="invalid-feedback">Date of birth is required.</div>
            </div>
            <div class="col-5 form-group">
                 <label for="pan" maxlength="10" class="color-white">PAN Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="PAN Number"
                name="pan"
                v-model="pan"
                v-model.trim="$v.pan.$model"
                :class="{'is-invalid': validationStatus($v.pan)}"
              />
              <div v-if="!$v.pan.required" class="invalid-feedback">PAN is required.</div>
            </div>
            <div class="col-2"></div>

            <div class="col-5 form-group">
                 <label for="company-name" class="color-white">Company Name*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Name"
                name="companyName"
                v-model="companyName"
                v-model.trim="$v.companyName.$model"
                :class="{'is-invalid': validationStatus($v.companyName)}"
              />
              <div v-if="!$v.companyName.required" class="invalid-feedback">Company name is required.</div>
            </div>

            <div class="col-5 form-group">
                 <label for="work-experience" class="color-white">Total Work Experience*</label>
              <select name="workExperince" v-model="workExperience" id="work-experience" class="form-control">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
              </select>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/self-employed/basic-detail">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button type="submit" v-on:click="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Countinue</button>
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
  name: "PersonalDetailSalaried",
  data:function()
  {
      return{
          fullName:null,
          workExperience:0,
          companyName:null,
          pan:null,
          email:null,
          dateOfBirth:null
      }
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
          validations: {
        fullName: {required},
        companyName: {required},
        dateOfBirth:{required},
        pan: {required, minLength: minLength(10)},
        email:{required}
    },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.$router.push('/salaried/transaction-detail'); 
            alert('Data Submit');
        }},
};
</script>