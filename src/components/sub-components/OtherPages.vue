<template>
  <div class="row content-padding pd-50-0 bg-white">
      <div class="col-md-2 col-sm-4 col-xl-4 d-flex flex-column align-items-center">
          <img src="../../assets/img/benefits@2x.png" alt="Benifits" />
          <p class="mgt-15">Benifits for you</p>
      </div>
      <div class="col-md-8 col-sm-4 col-xl-4 d-flex flex-column align-items-center">
          <img src="../../assets/img/eligibility.png" alt="Eligibility" />
          <p class="mgt-15">Eligibility</p>
      </div>
      <div class="col-md-2 col-sm-4 col-xl-4 d-flex flex-column align-items-center">
          <img src="../../assets/img/document-required.png" alt="Document Required" />
          <p class="mgt-15">Document Required</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'OtherPages',
  components: {
  }
}
</script>

<style scoped>
.col-md-2 > img, .col-md-8 > img {
  background-color: #fff;
  padding: 10px;
  width: 90px;
  box-shadow: 0px 0px 10px 0px rgba(155, 155,155, 0.4);
}
</style>
