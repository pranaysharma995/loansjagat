<template>
<div class="row bg-white">
  <div class="col-md-3">
    <router-link to="/">
      <img src="../../assets/logo.png" alt="Loanjagat">
    </router-link>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery';
jQuery(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

export default {
  name: 'Header',
  components: {
  }
}
</script>
<style scoped>
.row{
  padding: 10px;
}
</style>
