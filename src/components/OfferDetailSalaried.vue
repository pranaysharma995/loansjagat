<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8">
      <h3 class="color-white roboto-bold mgb-30">
        Offer Detail Salaried
      </h3>
      <div class="row mgb-60">
        <form>
          <div class="row">
            <div class="col-5 form-group">
              <label for="loan-amount" class="color-white">Loan Amount Required*</label>
              <input
                type="text"
                class="form-control"
                id="loan-amount"
                placeholder="Loan Amount"
                name="loanAmount"
                v-model="loanAmount"
              />
            </div>
            <div class="col-5 form-group">
              <label for="monthly-salary" class="color-white">Net Montly Salary*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Net Montly Salary"
                name="monthlySalary"
                id="monthly-salary"
                v-model="montlySalary"
              />
            </div>
            <div class="col-2 form-group"></div>
            <div class="col-5 form-group">
                <label for="city" class="color-white">City*</label>
              <input
                type="text"
                class="form-control"
                id="city"
                placeholder="Your City"
                name="city"
                v-model="city"
              />
            </div>
            <div class="col-5 form-group">
                 <label for="mobile-number" class="color-white">Mobile Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Mobile Number"
                name="mobileNumber"
                v-model="mobileNumber"
              />
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/salaried/transaction-detail">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button type="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Countinue</button>
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
import ApplyProgress from './ApplyProgress';
import ApplyFeature from './ApplyFeature';
import ApplyReview from './ApplyReview';
export default {
  name: "OfferDetailSalaried",
  data:function()
  {
      return{
          city:null,
          mobileNumber:null,
          montlySalary:null,
          loanAmount:null,
      }
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
};
</script>