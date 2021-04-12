<template>
<div class="container-fluid">
    <Header />
    <div class="row bg-blue content-padding pdt-70 relative d-flex">
      <div class="col-md-8">
        <h3 class="color-white roboto-bold heading">
          PERSONAL LOAN
        </h3>
        <h5 class="color-white roboto mgb-60 sub-heading">Get a personal loan in few steps</h5>
        <div class="row mgb-60">
            <div class="col-12" style="padding:0px">
          <form>
              <div class="col-8 form-group mgb-30">
                <label for="work-profile" class="color-white">Work Profile*</label>
                <select id="work-profile" v-model="page" name="work-profile" class="form-control">
                    <option value="self-employed">Self Employed</option>
                    <option value="salaried">Salaried</option>
                </select>
              </div>
              <div class="col-12 form-group">
                  <router-link :to="page+'/basic-detail'">
                  <button type="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Get Started</button>
                  </router-link>
              </div>
          </form>
          </div>
        </div>
         <ApplyReview />
      </div>
      <div class="col-md-4">
       <ApplyFeature v-bind:list="list" />
      </div>
    </div>
    <OtherPages v-bind:page="loan"/>
    <Footer
     content="For instance, if Megha applies for a Personal loan of INR 3 Lacs and get the loan sanctioned at the rate of 11.99% with a tenure range of 5 years, in such a case her EMI would be INR 6,672 and complete repayment amount till the end of 5 years tenure would be INR 4,00,309 (i.e 6,672 EMI * 60 months), wherein the total interest amount is INR 1,00,309 along with principal repayment of INR 3,00,000. Few additional charges like those of minimal one-time processing fee ranging from 0.5% to 3% of loan amount, pre-payment penalty on an earlier foreclosure of loan ranging from 1% to 5% may also apply. T& C apply."
     />
</div>
</template>

<script>
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';
export default {
  name: "LandingPage",
  data: function()
  {
      return{
      page:'self-employed',
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
  computed:{
    loan(){
           return this.page === 'self-employed' ? 'business-loan' : 'personal-loan'
         }
   },
  components: {
    ApplyFeature,
    ApplyReview,
    Header,
    Footer,
    OtherPages,
  },
};
</script>
<style scoped>
h3{
    margin-bottom: 10px;
}
</style>
