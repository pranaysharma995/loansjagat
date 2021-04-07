<template>
  <div class="container-fluid">
    <Header />
    <div class="row bg-blue px-10">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-8 col-8 d-flex justify-content-start align-items-center">
            <h3 class="heading color-white roboto-bold banner-heading">
              Document Requirement For Business Loan
            </h3>
          </div>
          <div class="col-md-4 col-sm-4 col-4 banner-image-section d-flex justify-content-end">
            <img src="../../assets/img/document-banner.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="row bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mgt-15">
            <h3 class="heading">Business Loan - Document Required</h3>
            <p class="sub-heading">
              The lender seek following documents from the business loan
              applicants. These documents can be submitted either as hard copy
              by phusically visiting the bank or by uploading a scanned copy on
              the digital platform/website on the lender.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mgt-60">
            <h3 class="heading">
              Emoloyee need the following standards documents and it may change
              as per the lender.
            </h3>
          </div>
          <div class="col-md-6 img-2">
            <img class="img-fluid" src="../../assets/img/benefits-page.png" />
          </div>
          <div
            class="col-md-6 list-container flex-column d-flex justify-content-center"
          >
            <ul class="list feature-list">
              <li class="list-heading">KYC Documents</li>
              <li class="list-heading">Business Existance Proof</li>
              <li class="list-heading">Current Address Proof</li>
              <li class="list-heading">Last Two Year ITRs</li>
              <li class="list-heading">Latest Bank Statements</li>
            </ul>
            <router-link to="/self-employed/basic-detail">
              <button type="button" class="btn button-blue form-button mgt-30">
                Apply
              </button>
            </router-link>
          </div>
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
  name: "BusinessDocumentRequired",
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
