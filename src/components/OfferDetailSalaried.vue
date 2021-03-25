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
          <span class='col-md-6 pad_top d-flex flex-row align-items-center'>
            <p class='padd_text'>Loan Amount:    </p>
            <input type='range' min='0' max='10000' value='0' class=' button-blue' v-model='filter'>
            <p class='padd_text padd_left'>₹{{filter}}   </p>

          </span>
          <span class='col-md-4 pad_top d-flex flex-row align-items-center'>
                <p class='padd_text'>Tenure:    </p>
              <div>
              <select class="form-select dropdown" aria-label="Default select example " v-model='tenure'>
                <option selected>---</option>
                <option value="1">3 Year</option>
                <option value="2">6 Year</option>
                <option value="3">7 Year</option>
              </select>
              </div>

            </span>
        <span class='pad_top'>
          <button type="submit" class="btn btn_big button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Apply Filter</button>
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
        </table>
        <div v-if='loader.table' class="  d-flex justify-content-center align-items-center">
          <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else-if='list.length==0' class='text-center'>
          <p >Sorry no result found</p>
        </div>
        <table v-else class="table ">
          <tbody class= 'tbody'>
              <!-- <tr >
                <td class='col_' >
                  <img class='bank_img' alt="img" src="../assets/logo.png">
                </td>
                <td  class='col_'>₹10000</td>
                <td  class='col_'>14.28%</td>
                <td  class='col_'>₹6</td>
                <td  class='col_'>₹8</td>
                <td  class='col_'>Upto 4% of outstanding Loan</td>
                <td  class='col_'>4</td>
                <td v-if='loader.btn' class="  d-flex justify-content-center align-items-center">
                  <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                  </div>
                </td>
                <td v-else class='end_col d-flex justify-content-center align-items-center'>

                  <button type="button" class="btn button-blue d-flex justify-content-center align-items-center color-white bg-blue"
                   v-on:click='apply_loan'>Apply</button>
                </td>


              </tr> -->
            <tr  v-for= '(i,index) in list' v-bind:key='index'>
              <td class='col_' >
                <img class='bank_img' alt="img" src="../assets/logo.png">
              </td>
              <td  class='col_'>₹10000{{i}}</td>
              <td  class='col_'>14.28%</td>
              <td  class='col_'>₹6</td>
              <td  class='col_'>₹8</td>
              <td  class='col_'>Upto 4% of outstanding Loan</td>
              <td  class='col_'>4</td>
              <td v-if='loader.btn' class="  d-flex justify-content-center align-items-center">
                <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
                </div>
              </td>
              <td v-else class='end_col d-flex justify-content-center align-items-center'>

                <button type="button" class="btn button-blue d-flex justify-content-center align-items-center color-white bg-blue"
                 v-on:click='apply_loan'>Apply</button>
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
export default{
  name:'home',
  props:{

  },
  mounted ()
  {
    this.loan_amount=localStorage.getItem("loan_amount");
    this.any_emi=localStorage.getItem("any_emi");
    this.net_salary=localStorage.getItem("net_salary");
    this.mode_of_salary=localStorage.getItem("mode_of_salary");
    this.total_exp=localStorage.getItem("total_exp");
    this.company_id=localStorage.getItem("company_id");

    axios.post(process.env.VUE_APP_LIVE_HOST+"/personal-loan-result",{
      loan_amount:this.loan_amount,
      any_emi:this.any_emi,
      net_salary_all_deductions:this.net_salary,
      mode_of_salary:this.mode_of_salary,
      total_exp:this.total_exp,
      company_id:this.company_id
    })
    .then((res) =>
    {
      console.log(res);
          this.loader.table=false;
    })
    .catch((err) =>
    {
      console.log(err)
          this.loader.table=false;
    })

    axios.post(process.env.VUE_APP_LIVE_HOST+"/personal-loan",{
      loan_amount:localStorage.getItem("loan_amount"),
      name:localStorage.getItem("name"),
      email:localStorage.getItem("email"),
      mobile:localStorage.getItem("mobile"),
      city:localStorage.getItem("city"),
      net_salary:localStorage.getItem("net_salary"),
      date_of_birth:localStorage.getItem("date_of_birth"),
      pan_number:localStorage.getItem("pan_number"),
      company_id:localStorage.getItem("company_id"),
      total_exp:localStorage.getItem("total_exp"),
      salary_pay_type:localStorage.getItem("salary_pay_type"),
      ownership:localStorage.getItem("ownership"),
      credit_score:localStorage.getItem("credit_score")
    })
    .then((res) =>
    {
      console.log(res);
      this.request_id=res.data.id
      this.loader.page=false;
    })
    .catch((err) =>
    {
      console.log(err);
      this.loader.page=false;
    })

  },
  methods:{
    apply_loan(){
      console.log('called')
      this.loader.btn=true;

      axios.post(process.env.VUE_APP_LIVE_HOST+'/applied-personal-loan',{
        'request_id':this.request_id
      })
      .then((response)=>{console.log(response);
        this.request_id=response.data.id;
      this.loader.btn=false;



      })
      .catch((err)=>{console.log(err);
      this.loader.btn=false;
      })
    }
  },
  data(){
    return {
       request_id:null,
       loan_amount:null,
       net_salary:null,
       mode_of_salary:null,
       total_exp:null,
       civil_score:null,
       any_emi:null,
       tensure:null,
       company_id:null,
       loader:{
         page:true,
         btn:false,
           table:true,
       },
       filter:5000,
       list:[],
       tenure:'1',
    }
  },

  components: {
    },
}
</script>
<style scoped>
.contai{
  min-height:calc(100vh - 59px);
  background-color:#0255AB;


  /* position: fixed; */
}
.color_white{
  color:white;

}

.heading_one{
margin-top:5rem;
font-size: 2.5rem;
font-weight: 600;
text-align: center;
}
.heading_two{
margin-top:2rem;
font-size: 1.5rem;
font-weight: 100;
text-align: center;
}
.containz{
  margin-bottom:2rem;
}
.container_two{
  margin-top:2rem;
  background-color:#fff;
  min-height:22rem;
  border-radius: 5px;
  max-width:100%;
  /* padding-left:1rem;
  padding-right:1rem; */
  padding-top:0.01rem;
}
.first_container{
  padding-left:1rem;
  padding-right:1rem;
}
.slider_container{
  /* height:7rem; */
  /* border-bottom:1px solid #B3B3B3; */
 margin-top:2.5rem;
}
.dropdown{
  border-radius: 5px;
  /* height:2.1rem; */
  /* width:4rem; */
  padding:0.7rem;
}
.padd_text{
  padding-right:1rem;
  font-size: .9rem;
  font-weight: normal;
}
.btn_big{
  height:3rem;
  width:7rem;
}
.padd_left{
  padding-left:0.7rem;
}
.table_container{

overflow:auto;
/* border : 1px solid #000; */
}
.tbl{
  min-width:690px;
}
.result_size{
  margin-top:1.5rem;
  border-top:1px solid  #B3B3B3;
  padding-top:1rem;
  padding-bottom:1rem;
  font-size: 1rem;
}

.border{
  border-style: groove;
    border-width: 0px!important;
    border-color: coral;

}
.head{
  margin-top:1rem!important;
  margin-bottom:1rem;
  padding-bottom:1rem;
  font-size: 1rem;
}
.border_col{

  background-color:#034E9A;
  color:#fff;
  font-size: 0.9rem;
  font-weight: normal;

}
.tbody{
  padding:2rem!important;
  border-top:1px solid #000;
  font-size:1rem;
}

.col_{
    border-top:0px solid #000;
    border-right:1px solid #000;
}
.end_col{
  border-top:0px solid #000;
}
.bank_img{
  width:10rem;
  height:auto;
}
@media screen and (max-width: 767px) {
  .heading_one{
  margin-top:5rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  }
  .heading_two{
  margin-top:2rem;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
  }
.pad_top{
  padding-top:.5rem;
}
.bank_img{
  width:5rem;
  height:auto;
}
.tbody{
  padding:2rem!important;
  border-top:1px solid #000;
  font-size:0.8rem;
}
.head{
  margin-top:1rem!important;
  margin-bottom:1rem;
  padding-bottom:1rem;
  font-size: 0.8rem;
}
.btm_top{
  margin-left:1rem;
}
}
</style>
