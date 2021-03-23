<template>
    <div class="progress-container">
        <ul class="list list-inline progress-list">
          <li class="list-inline-item active"><i class="fa fa-check" /> <p class="color-white">Basic Details</p></li>
          <li class="list-inline-item"><i class="fa fa-check" /> <p class="color-white">Personal Details</p></li>
          <li class="list-inline-item"><i class="fa fa-check" /> <p class="color-white">Company Details</p></li>
          <li class="list-inline-item"><i class="fa fa-check" /> <p class="color-white">Financial Details</p></li>
          <li class="list-inline-item"><i class="fa fa-check" /> <p class="color-white">Get Offers</p></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'ApplyProgress',
  components: {
  }
}
</script>
<style scoped>
.progress-container{
  position:absolute;
  top: 20px;
  right: 30px;
  z-index: 10;
}
.progress-list
{
  list-style: none;
}
.progress-list > li{
  width: 80px;
  text-align: center;
  position: relative;
}

.progress-list > li.active:not(:last-child):after{
 content: "";
  width: 88px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 25%;
  left: 48px;
}

.progress-list > li:not(:last-child):after{
  content: "";
  width: 88px;
  height: 2px;
  background-color: rgba(255,255,255,0.3);
  position: absolute;
  top: 25%;
  left: 48px;
}
.list-inline-item:not(:last-child) {
    margin-right: 1.5rem;
}
.progress-list > li.active > svg
{
  background-color: #fff;
}
.progress-list > li > svg{
  background-color: rgba(255,255,255,0.3);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  padding: 5px;
}
.progress-list > li svg path{
  fill:blue
}
p{
  font-size: 10px;
}
</style>