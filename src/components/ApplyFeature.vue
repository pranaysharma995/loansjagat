<template>
<div class="row pdt-30">
<div class="col-md-10 d-flex align-items-center justify-content-center offset-md-1 bg-white">
    <ul class="list">
        <li class="d-flex align-items-center">Personal Loan Starting at 10.40%</li>
        <li class="d-flex align-items-center">Instant paperless approvals <sup>New</sup></li>
        <li class="d-flex align-items-center">Free and Quick Service</li>
        <li class="d-flex align-items-center">10.4% of interest rate <sup>New</sup></li>
        <li class="d-flex align-items-center">Money in account within 24hrs</li>
        <li class="d-flex align-items-center">Cashback upto 5000 <sup>New</sup></li>
        <li class="d-flex align-items-center">Service plan india cities</li>
        <li class="d-flex align-items-center">Easy debt consolidation <sup>New</sup></li>
    </ul>
</div>
</div>
</template>

<script>
export default {
  name: 'ApplyFeature',
  components: {
  }
}
</script>
<style scoped>
.row
{
    height: 100%;
}
.col-md-10{
    border-top-left-radius: 40%;
    border-top-right-radius: 40%;
    padding-top: 50px;
}
ul{
    padding-left: 0px;
}
ul li{
   list-style: none;
}
ul li:not(:last-child)
{
    margin-bottom: 10px;
}
ul li::before{
   content: '';
   display: inline-block;
   height:20px;
   width: 20px;
   background-image: url('../assets/img/check-mark.png');
   background-size: contain;
   background-repeat: no-repeat;
   margin-right: 10px;
}
sup{
    color: red;
    margin-left: 5px;
}
</style>