<template>
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <div class="col-md-8">
      <h3 class="color-white roboto-bold">
        PERSONAL LOAN
      </h3>
      <h5 class="color-white roboto mgb-60">Get a personal loan in few steps</h5>
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
</template>

<script>
import ApplyFeature from './ApplyFeature';
import ApplyReview from './ApplyReview';
export default {
  name: "LandingPage",
  data: function()
  {
      return{
      page:'salaried'
      }
  },
  components: {
    ApplyFeature,
    ApplyReview
  },
};
</script>
<style scoped>
h3{
    margin-bottom: 10px;
}
</style>