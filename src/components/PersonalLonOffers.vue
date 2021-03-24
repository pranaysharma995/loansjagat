<template>

<div class='row contai' >
<div class='container  '>
  <div class='text_container color_white'>
  <p class='heading_one p-0'>Congratulations! You Are Eligible for Personal Loan Offers </p>
  <p class='heading_two'>
    Adjust the loan amount and choose tenure to suit the EMI paying capacity.
  </p>
  </div>
  <div class='container_two shadow mr-auto ml-auto'>
    <div class='first_container'>
      <div class='slider_container'>
        <div class='d-flex flex-row justify-content-between align-items-center'>
          <span class='d-flex flex-row'>
            <p class='padd_text'>Loan Amount:    </p>
            <input type='range' min='0' max='100' value='50' class=' button-blue'>
            <p class='padd_text padd_left'>₹10000   </p>

          </span>
          <span class='d-flex flex-row align-items-center'>
                <p class='padd_text'>Tenure:    </p>
              <div>
              <select class="form-select dropdown" aria-label="Default select example">
                <option selected>---</option>
                <option value="1">3 Year</option>
                <option value="2">6 Year</option>
                <option value="3">7 Year</option>
              </select>
              </div>

            </span>
        <span >
          <button type="submit" class="btn btn_big button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Apply Filter</button>
        </span>

        </div>
      </div>
      <p class='result_size'>Result</p>
    </div>

    <div class='table_container'>

      <div class='tbl'>
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
        <table class="table ">
          <tbody class= 'tbody'>
            <tr >
              <td class='col_' >
                <img alt="img" src="../assets/logo.png">
              </td>
              <td  class='col_'>₹10000</td>
              <td  class='col_'>14.28%</td>
              <td  class='col_'>₹6</td>
              <td  class='col_'>₹8</td>
              <td  class='col_'>Upto 4% of outstanding Loan</td>
              <td  class='col_'>4</td>
              <td  class='end_col d-flex justify-content-center align-items-center'>
                <button type="submit" class="btn button-blue d-flex justify-content-center align-items-center color-white bg-blue">Apply</button>
              </td>


            </tr>
            <tr >
              <td class='col_' >
                <img alt="img" src="../assets/logo.png">
              </td>
              <td  class='col_'>₹10000</td>
              <td  class='col_'>14.28%</td>
              <td  class='col_'>₹6</td>
              <td  class='col_'>₹8</td>
              <td  class='col_'>Upto 4% of outstanding Loan</td>
              <td  class='col_'>4</td>
              <td  class='end_col d-flex justify-content-center align-items-center'>
                <button type="submit" class="btn button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Apply</button>
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
export default{
  name:'home',
  props:{

  },

  methods:{

  },
  data(){
    return {

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
.text_container{

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
}

.col_{
    border-top:0px solid #000;
    border-right:1px solid #000;
}
.end_col{
  border-top:0px solid #000;
}

</style>
