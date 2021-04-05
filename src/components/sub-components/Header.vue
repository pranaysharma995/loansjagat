<template>
<div>
  <!-- Just an image -->
  <b-navbar variant="faded" type="light">
    <b-navbar-brand href="#">
      <img src="../../assets/logo.png" alt="Loanjagat">
    </b-navbar-brand>
  </b-navbar>
</div>
</template>

<script>
import Vue from 'vue'
import { BNavbar } from 'bootstrap-vue'
Vue.component('b-navbar', BNavbar)

export default {
  name: 'Header',
  components: {
  }
}
</script>
