<template>
<div v-if='loader.page' class=" load d-flex justify-content-center align-items-center">
  <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
  </div>
</div>

<div v-else class='row contai' >

<div class='container containz  '>


  <div class='text_container color_white'>
    <p class='heading_one p-0'>Congratulations! You Are Eligible for Personal Loan Offers </p>
    <p class='heading_two'>
      Adjust the loan amount and choose tenure to suit the EMI paying capacity.
    </p>
  </div>

  <div class='container_two shadow mr-auto ml-auto'>
    <div class='first_container'>
      <div class='slider_container row'>
        <!-- <div class='col-md-12 d-flex flex-row justify-content-between align-items-center'> -->
          <span class='col-md-6 col-sm-6 col-xl-6 col-6  pad_top d-flex flex-row align-items-center'>
            <p class='padd_text'>Loan Amount:    </p>
            <input type='range' min='0' :max='max_filter' value='0' class=' button-blue' v-model='filter'>
            <p class='padd_text padd_left'>₹{{filter}}   </p>

          </span>
          <span class='col-md-4  col-sm-6 col-xl-4 col-6 pad_top d-flex flex-row align-items-center mbl_tenure'>
                <p class='padd_text'>Tenure:    </p>

              <div>
              <select class="form-select dropdown" aria-label="Default select example " v-model='tenure'>
                <option selected>---</option>
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                <option value="5">5 Year</option>
              </select>
              </div>

            </span>
        <span class='pad_top btm_top '>
          <div v-if='loader.apply_filter' class="  d-flex justify-content-center align-items-center">
            <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
          </div>
          <button v-else type="button" class="btn btn_big button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue"
          v-on:click='filter_post'>Apply Filter</button>
        </span>

        <!-- </div> -->
      </div>
      <p class='result_size'>Result</p>
    </div>

    <div class='table_container'>


      <div  class='tbl'>
        <table class="table">
          <thead>
            <tr class='head'>
              <th class='border_col' scope="col">Bank</th>
              <th class='border_col' scope="col">Loan Amount</th>
              <th class='border_col' scope="col">Interest Rate</th>
              <th class='border_col' scope="col">Processing Fees</th>
              <th class='border_col' scope="col">Monthly EMI</th>
              <th class='border_col' scope="col">Bal. t/f to other bank</th>
              <th class='border_col' scope="col">Tenure</th>
              <th class='border_col' scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            <tr v-if='loader.table' class="  ">
              <td colspan="7"  >
                <div class='d-flex justify-content-center align-items-center'>


                  <div class="mx-auto spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                </div>
              </td >
            </tr>
            <tr v-else-if='list.length==0' class="">
              <td colspan="7"  >
                <div class='d-flex justify-content-center align-items-center'>
                  <p >Sorry no result found</p>
                </div>
              </td >
            </tr>

            <tr  v-else-if='!loader.table' v-for= '(i,index) in list' v-bind:key='index'>
              <td class='col_' >
                <img class='bank_img' alt="img" :src="get_image_link(i.bank_logo)">
              </td>
              <td  class='col_'>₹{{i.loan_amt}}</td>
              <td  class='col_'>{{i.intrest}}%</td>
              <td  class='col_'>₹{{i.process_fees}}</td>
              <td  class='col_'>₹{{i.blemi}}</td>
              <td  class='col_'>Upto 4{{i.special_emi}}% of outstanding Loan</td>
              <td  class='col_'>{{i.label_value.split(" ")[0]}}</td>
              <td v-if='loader.btn &&loader.index==index' class="  d-flex justify-content-center align-items-center">
                <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
                </div>
              </td>
              <td  v-else class='end_col d-flex justify-content-center align-items-center'>

                <button type="button" class="btn button-blue d-flex justify-content-center align-items-center color-white bg-blue"
                 v-on:click='apply_loan(index)'>Apply</button>
              </td>


            </tr>

          </tbody>
        </table>
      </div>

    </div>

  </div>
</div>
</div>

</template>

<script>
import axios from 'axios';
import {self_employed_form} from '../globalVariableSalaried.js'

export default{
  name:'home',
  props:{

  },

  methods:{
    apply_loan(index){
      this.loader.index=index;
      console.log('called')
      this.loader.btn=true;

      axios.post(process.env.VUE_APP_LIVE_HOST+'/applied-business-loan',
      {
        'request_id':this.request_id
      }
      )
      .then((response)=>{console.log(response);
        this.request_id=response.data.id;
      this.loader.btn=false;



      })
      .catch((err)=>{console.log(err);
      this.loader.btn=false;
      })
    },
    filter_post(){
      this.loader.apply_filter=true;
      this.loader.table=true;
      axios.get(process.env.VUE_APP_LIVE_HOST+'/business-loan-filter/'+this.request_id+'/'+this.filter+'/'+this.tenure      )
      .then((response)=>{console.log(response);
        this.loader.table=false;
        this.list=response.data;
        this.loader.apply_filter=false;
      })
      .catch((err)=>{console.log('error',err);
        this.list=[];
        this.loader.table=false;
      this.loader.apply_filter=false;
      })
    },
    get_image_link(img){
      return require('../assets/img/bank/'+img)
    },
  },
  data(){
    return {
      filter:self_employed_form.loan_amount_required,
      max_filter:self_employed_form.loan_amount_required,
      list:[],
      tenure:'1',
      loader:{
        page:true,
        btn:false,
        table:true,
        apply_filter:false,
      },
      request_id:0,

    }
  },

  components: {
    },

mounted(){

  axios.post(process.env.VUE_APP_LIVE_HOST+'/business-loan',{
    "city":self_employed_form.city,
    "loan_amount_required":self_employed_form.loan_amount_required,
    "mobile_number":self_employed_form.mobile_number,
    "turn_over":self_employed_form.turn_over,
  })
  .then((response)=>{console.log('then-POST     -',response);
    this.request_id=response.data.id;
    this.loader.page=false;
    console.log(this.loader.page);
    axios.put(process.env.VUE_APP_LIVE_HOST+'/business-loan/'+this.request_id,{
    ...self_employed_form
      })
      .then((response)=>{console.log(response);
        // this.request_id=response.data.id;
        axios.get(process.env.VUE_APP_LIVE_HOST+'/business-loan-filter/'+this.request_id+'/'+this.filter+'/'+this.tenure)
          .then((response)=>{console.log(response);
          this.loader.table=false;
          this.list=response.data;
          console.log(this.loader.table,this.list);
          })
          .catch((err)=>{console.log('error',err);
          this.loader.table=false;
          this.list=[]
          })

      })
      .catch((err)=>{console.log('err-POST     -',err);
      this.loader.table=false;
      this.list=[]
      })


  })
  .catch((err)=>{console.log(err);
  this.loader.page=false;
  })

},
}

</script>
<style scoped>
.contai {
  min-height: calc(100vh - 59px);
  background-color: #0255ab;
  /* position: fixed; */
}
.color_white {
  color: white;
}
.heading_one {
  margin-top: 5rem;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
}
.heading_two {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
}
.containz {
  margin-bottom: 2rem;
}
.container_two {
  margin-top: 2rem;
  background-color: #fff;
  min-height: 22rem;
  border-radius: 5px;
  max-width: 100%;
  /* padding-left:1rem;
    padding-right:1rem; */
  padding-top: 0.01rem;
}
.first_container {
  padding-left: 1rem;
  padding-right: 1rem;
}
.slider_container {
  /* height:7rem; */
  /* border-bottom:1px solid #B3B3B3; */
  margin-top: 2.5rem;
}
.dropdown {
  border-radius: 5px;
  /* height:2.1rem; */
  /* width:4rem; */
  padding: 0.7rem;
}
.padd_text {
  padding-right: 1rem;
  font-size: .9rem;
  font-weight: normal;
}
.btn_big {
  height: 3rem;
  width: 7rem;
}
.padd_left {
  padding-left: 0.7rem;
}
.table_container {
  overflow: auto;
  /* border : 1px solid #000; */
}
.tbl {
  min-width: 690px;
}
.result_size {
  margin-top: 1.5rem;
  border-top: 1px solid #b3b3b3;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1rem;
}
.border {
  border-style: groove;
  border-width: 0px !important;
  border-color: coral;
}
.head {
  margin-top: 1rem !important;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1rem;
}
.border_col {
  background-color: #034e9a;
  color: #fff;
  font-size: 0.9rem;
  font-weight: normal;
}
.tbody {
  padding: 2rem !important;
  border-top: 1px solid #000;
  font-size: 1rem;
}
.col_ {
  border-top: 0px solid #000;
  border-right: 1px solid #000;
}
.end_col {
  border-top: 0px solid #000;
}
.bank_img {
  width: 10rem;
  height: auto;
}
@media screen and (max-width: 767px) {
  .heading_one {
    margin-top: 5rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
  .heading_two {
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 100;
    text-align: center;
  }
  .pad_top {
    padding-top: .5rem;
  }
  .bank_img {
    width: 5rem;
    height: auto;
  }
  .tbody {
    padding: 2rem !important;
    border-top: 1px solid #000;
    font-size: 0.8rem;
  }
  .border_col {
    background-color: #034e9a;
    color: #fff;
    font-size: 0.8rem;
    font-weight: normal;
  }
  .btm_top{
    margin-left:1rem;
  }
  .mbl_tenure{
    display:flex;
    justify-content:flex-end;
  }
}
</style>
