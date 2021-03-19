<template>
  <div class="row content-padding pd-50-0 bg-white">
      <div class="col-md-2 d-flex flex-column align-items-center">
          <img src="../assets/img/submit.svg" alt="Icon" />
          <p class="mgt-15">Title comes here</p>
      </div>
      <div class="col-md-8 d-flex flex-column align-items-center">
          <img src="../assets/img/submit.svg" alt="Icon" />
          <p class="mgt-15">Title comes here</p>
      </div>
      <div class="col-md-2 d-flex flex-column align-items-center">
          <img src="../assets/img/submit.svg" alt="Icon" />
          <p class="mgt-15">Title comes here</p>
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
