<template>
    <div class="progress-container">
        <ul class="list list-inline progress-list">
          <li 
          class="list-inline-item"
          v-bind:class="{ 
            'active': $route.path == '/salaried/basic-detail' || $route.path == '/salaried/personal-detail' || $route.path == '/salaried/transaction-detail' || $route.path == '/salaried/offer-detail'
             ||$route.path == '/self-employed/basic-detail' || $route.path == '/self-employed/personal-detail' || $route.path == '/self-employed/transaction-detail' || $route.path == '/self-employed/offer-detail' ,
            }"
          >
          <i v-if=" $route.path == '/salaried/basic-detail' || $route.path == '/self-employed/basic-detail'" class="number-icon">1</i> 
          <i class="fa fa-check number-icon" v-else />
          <p class="color-white">Basic Details</p>
          </li>
          <li 
          class="list-inline-item"
           v-bind:class="{ 
            'active': $route.path == '/salaried/personal-detail' || $route.path == '/salaried/transaction-detail' || $route.path == '/salaried/offer-detail'
             || $route.path == '/self-employed/personal-detail' || $route.path == '/self-employed/transaction-detail' || $route.path == '/self-employed/offer-detail' ,
            }"
          >
          <i v-if=" $route.path == '/salaried/personal-detail' || $route.path == '/self-employed/personal-detail'" class="number-icon">2</i> 
          <i class="fa fa-check number-icon" v-else />
          <p class="color-white">Personal Details</p>
          </li>
          <li 
          class="list-inline-item"
           v-bind:class="{ 
            'active':$route.path == '/salaried/transaction-detail' || $route.path == '/salaried/offer-detail'
             || $route.path == '/self-employed/transaction-detail' || $route.path == '/self-employed/offer-detail' ,
            }"
          >
          <i v-if=" $route.path == '/salaried/transaction-detail' || $route.path == '/self-employed/transaction-detail'" class="number-icon">3</i> 
          <i class="fa fa-check number-icon" v-else />
          <p class="color-white">Financial Details</p>
          </li>
          <li 
          class="list-inline-item"
          v-bind:class="{ 
            'active': $route.path == '/salaried/offer-detail' || $route.path == '/self-employed/offer-detail' ,
            }"
          >
          <i v-if=" $route.path == '/salaried/offer-detail' || $route.path == '/self-employed/offer-detail'" class="number-icon">4</i> 
          <i class="fa fa-check number-icon" v-else />
            <p class="color-white">Get Offers</p>
          </li>
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
.progress-list > li.active > svg, .progress-list > li.active > .number-icon
{
  background-color: #fff;
}
.progress-list > li > i{
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
.number-icon
{
    display: inline-flex;
    background-color:rgba(255,255,255,0.3);
    height: 18px;
    width: 18px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    transform: translateY(-4px);
}
</style>