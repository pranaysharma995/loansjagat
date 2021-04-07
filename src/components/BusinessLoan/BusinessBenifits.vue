<template>
  <div class="container-fluid">
    <Header />
    <div class="row bg-blue px-10">
      <div class="container">
          <div class="row">
        <div class="col-md-8 col-sm-8 col-8 d-flex justify-content-start align-items-center">
          <h3 class="heading color-white roboto-bold banner-heading">Some Key Benefits of Business Loans</h3>
        </div>
        <div class="col-md-4 col-sm-4 col-4 banner-image-section d-flex justify-content-end">
          <img class='img'src="../../assets/img/benefits-banner.png" />
        </div>
          </div>
      </div>
    </div>
    <div class="row bg-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mgt-15">
                <h3 class="heading">Get to Choose the Best Lender for Your Business Loan Needs</h3>
                <p class="sub-heading">
                  A business loan is one of the best remedies of modern life's financial concern.
                  Today almost everyone came across cash crunch situation and financial requirement that need fund at the moment,
                  while one can gradually pay them over the period of time, these requirement from
                  educationfor self or family. medical requirements, need to travel or fullfill a long wishlist of a gadget and several other requirements.
                </p>
                 <p class="sub-heading">
                  While there are several ways to get access to funds, asking friends and family may be a risky proportion.
                  Thus the best bet is to opt for business loan from financial institutions
                </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mgt-60">
                    <h3 class="heading">Features and Benefits</h3>
                </div>
                <div class="col-md-6 img-2">
                    <img class="img-fluid" src="../../assets/img/benefits-page.png" />
                </div>
                <div class="mgb-30 col-md-6 list-container flex-column d-flex justify-content-center">
                    <ul class="list feature-list">
                        <li class="list-heading">Loan Upto 50 Lacs
                        </li>
                     <li class="list-heading">Digital Documentation</li>
                     <li class="list-heading">Best Offer to Choose From 20+ Banks and NBFCs</li>
                     <li class="list-heading">Loans Jagat Service is Absolutely Free of Cost for their Customers</li>
                     <li class="list-heading">Best Deal Guranteed</li>
                     <li class="list-heading">No Collatoral or Gurantor Needed</li>
                     <li class="list-heading">Dedicated Loan Professional For Profile Based Accessment</li>
                     <li class="list-heading">Highest Apporval Ratio</li>
                     <li class="list-heading">Maximum Loan Eligibity Offers</li>
                     <li class="list-heading">Cashback upto RS 5000 On Disbursal of Your Loan</li>
                    </ul>
                    <router-link to="/self-employed/basic-detail">
                    <button type="button" class="btn button-blue form-button mgt-30">Apply</button>
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
  name: "BusinessBenefits",
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

@media screen and (max-width: 767px) {
  /* p {
    font-size:13px;
  }
 .heading{
font-size:15px;
 }
 .img{
   width:70px;
   height:auto!important;
 }
 */
 /* .img-fluid{
   width:122px;
 }
 .img-2{
   display:flex;
   justify-content:center;
 } */

}/*media query */


</style>
