<template>
  <div class="container-fluid">
    <Header />
    <div class="row bg-blue px-10">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-8 col-8 d-flex justify-content-start align-items-center">
            <h3 class="heading color-white roboto-bold banner-heading">
              Eligibility of a Personal Loan
            </h3>
          </div>
          <div class="col-md-4 col-sm-4 col-4 banner-image-section d-flex justify-content-end">
            <img src="../../assets/img/eligibility-banner.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <h3 class="heading mgt-30">
          There are some different eligibility options for several loans from
          various banks. These eligibility creteria for the salaried and even
          the self employedare different.
        </h3>
        <div class="row mgt-30 mgb-30">
          <table class="table table-bordered">
            <thead>
              <tr class="bg-blue color-white">
                <th>Categories</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Age</td>
                <td>23 to 58 years</td>
              </tr>
              <tr>
                <td>Employment</td>
                <td>
                  Salaried, Employed with an MNCs, public or private company
                </td>
              </tr>
              <tr>
                <td>APR Ranges</td>
                <td>from 10.40% to 19% p.a</td>
              </tr>
              <tr>
                <td>Minimum Salary</td>
                <td>RS 30000 per month</td>
              </tr>
              <tr>
                <td>Repayment Tenure ranges</td>
                <td>from 2 yrs to 7yrs</td>
              </tr>
              <tr>
                <td>Credit Score</td>
                <td>Above 650</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalEligibility",
  components: {
    Header,
    Footer,
  },
};
import Header from "../sub-components/Header";
import Footer from "../Navigation/Footer";
</script>
<style scoped>
p {
  line-height: 25px;
}
</style>
