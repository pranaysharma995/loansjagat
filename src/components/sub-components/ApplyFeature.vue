<template>
<div class="row pdt-30">
<div class="col-md-10 d-flex align-items-center justify-content-center offset-md-1 bg-white">
    <ul class="list">
        <li class="d-flex align-items-center list-heading">Personal Loan Starting at 10.40%</li>
        <li class="d-flex align-items-center list-heading">Instant paperless approvals <sup>New</sup></li>
        <li class="d-flex align-items-center list-heading">Free and Quick Service</li>
        <li class="d-flex align-items-center list-heading">10.4% of interest rate <sup>New</sup></li>
        <li class="d-flex align-items-center list-heading">Money in account within 24hrs</li>
        <li class="d-flex align-items-center list-heading">Cashback upto 5000 <sup>New</sup></li>
        <li class="d-flex align-items-center list-heading">Service plan india cities</li>
        <li class="d-flex align-items-center list-heading">Easy debt consolidation <sup>New</sup></li>
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
    margin-bottom: 15px;
}
ul li::before{
   content: '';
   display: inline-block;
   height:20px;
   width: 20px;
   background-image: url('../../assets/img/checked.svg');
   background-size: contain;
   background-repeat: no-repeat;
   margin-right: 10px;
}
sup{
    color: red;
    margin-left: 5px;
}
@media only screen and (max-width:1200px)
{
    ul li{
        font-size: 12px;
    }
}
</style>
