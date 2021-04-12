<template>
  <div class="row bg-black pd-15-15">
    <div class="col-md-12">
        <p class="color-white roboto sub-heading">
        {{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  },
  props:['content']
}
</script>
<style scoped>
p{
  line-height: 25px;
}
</style>