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
       <ApplyFeature />
      </div>
    </div>
    <OtherPages/>
    <Footer/>
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
      page:'self-employed'
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
