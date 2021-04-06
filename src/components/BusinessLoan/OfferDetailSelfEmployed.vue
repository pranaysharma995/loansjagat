<template>
  <div class="container-fluid">
      <Header />
<div v-if='this.loader.page' class=" load d-flex justify-content-center align-items-center">
  <div class="spinner-border text-primary" role="status">
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
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
          <span class='col-md-6   pad_top d-flex flex-row align-items-center'>
            <p class='padd_text'>Loan Amount:    </p>
            <input type='range' min='0' :max='max_filter' value='0' class=' button-blue' v-model='filter' v-on:change='filter_post'>
            <p class='padd_text padd_left'>₹{{filter}}   </p>

          </span>
          <span class='col-md-4  pad_top d-flex flex-row align-items-center '>
                <p class='padd_text'>Tenure:    </p>
                <input type='range' min='1' :max='5' value='0' class=' button-blue' v-model='tenure' v-on:change='filter_post'>
                <p class='padd_text padd_left'>{{tenure}}Years   </p>

              <div>

              </div>

            </span>
        <span class='pad_top btm_top '>
          <span class="blinking maxLoanAmt">Max. Loan Amount - Rs <span v-html="max_filter"></span> rupes</span>
          <p class='result_count'><span >We have </span>{{list.length}} Bank Results</p>
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
                  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                </div>
              </td >
            </tr>
            <tr v-else-if='list.length==0' class="">
              <td colspan="7"  >
                <div class='d-flex justify-content-center align-items-center'>
                  <p >Sorry no result found{{list.length,list}}</p>
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
              <td  v-if='i.bal_t_or_f_to_other_bank !=null' class='col_'>Upto {{i.bal_t_or_f_to_other_bank}}% of outstanding Loan</td>
              <td v-else  class='col_'>

              </td>
              <td  class='col_'>{{i.label_value.split(" ")[0]}}</td>
              <td v-if='loader.btn &&loader.index==index' class="  d-flex justify-content-center align-items-center">
                <div class="spinner-border text-primary" role="status">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
              </td>
              <td  v-else class='end_col d-flex justify-content-center align-items-center'>

                <button type="button" class="btn button-blue d-flex justify-content-center align-items-center color-white bg-blue"
                 v-on:click='apply_loan(index)'>Apply</button>
              </td>


            </tr>

          </tbody>
        </table>
        <!-- <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <span class="page-link">Previous</span>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
              <span class="page-link">
                2
                <span class="sr-only">(current)</span>
              </span>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav> -->
      </div>

    </div>

  </div>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import Header from '../sub-components/Header';

// import {this.self_employed_form} from '../globalVariableSalaried.js'

export default{
  name:'home',
  props:{

  },
  data(){
    return {
      self_employed_form:localStorage.getItem("self_employed_form") ? JSON.parse(localStorage.getItem("self_employed_form")) : {},
      filter:JSON.parse(localStorage.getItem("self_employed_form")).loan_amount_required ,
      max_filter:JSON.parse(localStorage.getItem("self_employed_form")).loan_amount_required ,
  list:[
    {
        "loan_amt": "1222",
        "minloan": 138799496461164690,
        "intrest": 16.5,
        "process_fees": 27,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "HDFC",
        "bank_logo": "hdfc_bank.jpg",
        "blemi": 111,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 137364239240973400,
        "intrest": 18.5,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "TATA CAPITAL",
        "bank_logo": "tata_capital.jpg",
        "blemi": 112,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 138618907773141180,
        "intrest": 16.75,
        "process_fees": 12,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "ICICI",
        "bank_logo": "icici.jpg",
        "blemi": 111,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 138799496461164690,
        "intrest": 16.5,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "KOTAK",
        "bank_logo": "kotak.jpg",
        "blemi": 111,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 133527030848909100,
        "intrest": 24,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "Edelweiss",
        "bank_logo": "edelweiss.jpg",
        "blemi": 116,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 126234795998471460,
        "intrest": 21.5,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "RBL",
        "bank_logo": "rbl.jpg",
        "blemi": 114,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 137008802043874720,
        "intrest": 19,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "Bajaj ",
        "bank_logo": "bajaj_finserv.jpg",
        "blemi": 113,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 137008802043874720,
        "intrest": 19,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "Aditya Birla",
        "bank_logo": "aditya_birla_capital.jpg",
        "blemi": 113,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 145388726814783680,
        "intrest": 20,
        "process_fees": 24,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "Lending Kart",
        "bank_logo": "lendingkart.jpg",
        "blemi": 113,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 127544397349235820,
        "intrest": 19.5,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "Capital First",
        "bank_logo": "capital_first.jpg",
        "blemi": 113,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 138438651783602320,
        "intrest": 17,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "YES BANK",
        "bank_logo": "yes_bank.jpg",
        "blemi": 111,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 135600380333225730,
        "intrest": 21,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "Fullerton",
        "bank_logo": "fullerton.jpg",
        "blemi": 114,
        "label_value": "1 Years"
    },
    {
        "loan_amt": "1222",
        "minloan": 138438651783602320,
        "intrest": 17,
        "process_fees": 21,
        "special_intrest": 0,
        "special_fees": "",
        "special_emi": "",
        "bank_name": "IDFC",
        "bank_logo": "idfc.jpg",
        "blemi": 111,
        "label_value": "1 Years"
    },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 138438651783602320,
    //     "intrest": 17,
    //     "process_fees": 21,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "SCB",
    //     "bank_logo": "scb.jpg",
    //     "blemi": 111,
    //     "label_value": "1 Years"
    // },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 129715071650151540,
    //     "intrest": 16.25,
    //     "process_fees": 9,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "Axis Bank",
    //     "bank_logo": "axis.jpg",
    //     "blemi": 111,
    //     "label_value": "1 Years"
    // },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 124625228792313680,
    //     "intrest": 24,
    //     "process_fees": 24,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "HDB",
    //     "bank_logo": "hdb.jpg",
    //     "blemi": 116,
    //     "label_value": "1 Years"
    // },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 129517225773909890,
    //     "intrest": 30,
    //     "process_fees": 31,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "NEO GROWTH",
    //     "bank_logo": "neogrowth.jpg",
    //     "blemi": 119,
    //     "label_value": "1 Years"
    // },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 148278509031016500,
    //     "intrest": 28,
    //     "process_fees": 27,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "Capital Float",
    //     "bank_logo": "capital_float.jpg",
    //     "blemi": 118,
    //     "label_value": "1 Years"
    // },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 142428832905504560,
    //     "intrest": 24,
    //     "process_fees": 27,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "CLIX",
    //     "bank_logo": "clxx.jpg",
    //     "blemi": 116,
    //     "label_value": "1 Years"
    // },
    // {
    //     "loan_amt": "1222",
    //     "minloan": 134212973320602930,
    //     "intrest": 23,
    //     "process_fees": 37,
    //     "special_intrest": 0,
    //     "special_fees": "",
    //     "special_emi": "",
    //     "bank_name": "PNB Housing",
    //     "bank_logo": "pnbhousing.jpg",
    //     "blemi": 115,
    //     "label_value": "1 Years"
    // }
],
      tenure:'1',
      loader:{
        page:false,
        btn:false,
        table:false ,
        apply_filters:false,
      },
      request_id:0,


    }
  },

  methods:{
    apply_loan(index){
      this.loader.index=index;
      //console.log('called')
      this.loader.btn=true;

      axios.post(process.env.VUE_APP_LIVE_HOST+'/applied-business-loan',
      {
        'request_id':this.request_id
      }
      )
      .then((response)=>{//console.log(response);
        // this.request_id=response.data.id;
      this.loader.btn=false;
      this.$router.push({ name: 'apply-result',
              params: {
                    applocation_no: response.data.application_no,
                    type:'Business Loan'
                  }});



      })
      .catch((err)=>{console.log(err);
      this.loader.btn=false;
      })
    },
    filter_post(){
      this.loader.apply_filters=true;
      this.loader.table=true;
      axios.get(process.env.VUE_APP_LIVE_HOST+'/business-loan-filter/'+this.request_id+'/'+this.filter+'/'+this.tenure      )
      .then((response)=>{
        console.log('response',response,response.data.length>13?13:response.data.length);
        this.loader.table=false;
        this.list=response.data.slice(0,13);
        for (var i = 0; i < response.data.length ; i++) {
              // this.list.push(response.data[i]);
            }
        this.loader.apply_filters=false;
      })
      .catch((err)=>{console.log('error',err);
        this.list=[];
        this.loader.table=false;
      this.loader.apply_filters=false;
      })
    },
    get_image_link(img){
      return require('../../assets/img/bank/'+img)
    },
    findWinConfirmed(topConfirmed) {
      let findTop = [];
      topConfirmed.data.forEach(obj => findTop.push(obj.minloan));
      return Math.max(...findTop);
  		},
  },


  components: {
    Header,
    },

mounted(){


    // this.self_employed_form=localStorage.getItem("self_employed_form") ? JSON.parse(localStorage.getItem("self_employed_form")) : {};
    axios.post(process.env.VUE_APP_LIVE_HOST+'/business-loan',{
      ...this.self_employed_form
    })
    .then((response)=>{//console.log('then-POST     -',response);
      this.request_id=response.data.id;
      this.loader.page=false;
      console.log(this.loader.page);
      axios.put(process.env.VUE_APP_LIVE_HOST+'/business-loan/'+this.request_id,{
      ...this.self_employed_form
        })
        .then((response)=>{
          console.log(response);
          response
          // this.request_id=response.data.id;
          axios.get(process.env.VUE_APP_LIVE_HOST+'/business-loan-filter/'+this.request_id+'/'+this.filter+'/'+this.tenure)
            .then((response)=>{
              console.log(response);
            this.loader.table=false;
            var maix_data=this.findWinConfirmed(response.data);

            if(parseInt(this.self_employed_form.loan_amount_required) > parseInt(this.max_filter)){
    					var max = parseInt(this.self_employed_form.loan_amount_required)
    					maix_data = parseInt(this.self_employed_form.loan_amount_required);
    				}else{
    					max = maix_data
    				}
    				var mx_amt = maix_data / 100000
            this.max_filter = mx_amt.toFixed(2)
            console.log('this.max_filter',this.max_filter);



            this.list=response.data//.slice(0,response.data>13?13:response.data.length);
            this.loader.table=false;

            console.log(this.loader.table,this.list.length);
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
.result_count{
  font-size: 0.9rem;
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
