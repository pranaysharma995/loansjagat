<template>
  <div class="container-fluid">
      <Header />
  <div class="row  contai">
    <div class="  w-100">
      <div class=" d-flex flex-row justify-content-center align-items-center p-4">
        <img class='tick' alt="img" src="../../assets/img/white-check-mark.png">
      </div>
      <div class="h1">
          Thank You
      </div>
      <div class=" p">
        Congratulations! you have just applied for a Loan.
      </div>
      <div class="d-flex flex-row justify-content-center align-items-center">
        <div class="box shadow d-flex flex-row justify-content-center align-items-center text">
          {{text}}
        </div>
      </div>
      <div class="">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '../sub-components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

export default {
  name: "AcknowledgementThankyouPage ",
  data: function()
  {
      return{
      page:'self-employed',
      text:''
      }
  },
  components: {
    Header,
  },
  mounted(){
    console.log(this.$route.query);
    this.text=this.$route.query.no
  }
};
</script>
<style scoped>
.h1{
    margin-bottom: 10px;
    color:#fff;
    font-size: 4rem;
    font-weight: 600;
    padding-bottom:1.5rem;
}
.p{
  color:#fff;
  font-size: 1.7rem;
  /* font-weight: 500; */
}
.contai{
  min-height:calc(100vh - 59px);
  background-color:#0255AB;
  text-align: center;
  /* position: fixed; */
}
.tick{
  width:10rem;
}
.box{
  margin-top:3.5rem;
  background-color:#fff;
  width:65%;
  height:8rem;
  color:#0255AB;
  border-radius: 5px;
}
.text{
  font-size: 3rem;
}
@media screen and (max-width: 767px) {
  .text{
    font-size: 2rem;
  }
  .tick{
    width:7rem;
  }
  .h1{
      margin-bottom: 10px;
      color:#fff;
      font-size: 3rem;
      font-weight: 600;
      padding-bottom:1.5rem;
  }
  .p{
    color:#fff;
    font-size: 1.3rem;
    /* font-weight: 500; */
  }

}
@media screen and (max-width: 480px) {
  .text{
    font-size: 1.2rem;
  }
  .tick{
    width:5rem;
  }

}
</style>
