<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8">
      <h3 class="color-white roboto-bold mgb-30">
        Compare and Apply For Personal Loans in 2 minutes
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
                name="loan-amount"
              />
            </div>
            <div class="col-5 form-group">
              <label for="monthly-salary" class="color-white">Net Montly Salary*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Net Montly Salary"
                name="pswd"
                id="monthly-salary"
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
              />
            </div>
            <div class="col-5 form-group">
                 <label for="mobile-number" class="color-white">Mobile Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Mobile Number"
                name="mobile-number"
              />
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/">
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
  name: "ApplyPersonalLoan",
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview
  },
};
</script>