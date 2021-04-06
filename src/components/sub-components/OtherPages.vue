<template>
  <div class="row content-padding pd-30-0 bg-white">
    <div
      class="col-md-2 col-sm-4 col-xl-4 d-flex flex-column align-items-center"
    >
      <router-link
        class="pagelink d-flex flex-column justify-content-center align-items-center"
        v-bind:to="`/${page}/benefits`"
      >
        <img src="../../assets/img/benefits@2x.png" alt="Benifits" />
        <p class="mgt-15 color-black">Features and Benefits</p>
      </router-link>
    </div>
    <div
      class="col-md-8 col-sm-4 col-xl-4 d-flex flex-column align-items-center"
    >
      <router-link
        class="pagelink d-flex flex-column justify-content-center align-items-center"
        v-bind:to="`/${page}/eligibility`"
      >
        <img src="../../assets/img/eligibility.png" alt="Eligibility" />
        <p class="mgt-15 color-black">Eligibility</p>
      </router-link>
    </div>
    <div
      class="col-md-2 col-sm-4 col-xl-4 d-flex flex-column align-items-center"
    >
      <router-link
        class="pagelink d-flex flex-column justify-content-center align-items-center"
        v-bind:to="`/${page}/document-requirements`"
      >
        <img
          src="../../assets/img/document-required.png"
          alt="Document Required"
        />
        <p class="mgt-15 color-black">Document Required</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherPages",
  components: {},
  props: ["page"],
};
</script>

<style scoped>
.col-md-2 img,
.col-md-8 img {
  background-color: #fff;
  padding: 10px;
  width: 70px;
  box-shadow: 0px 0px 10px 0px rgba(155, 155, 155, 0.4);
}
</style>
