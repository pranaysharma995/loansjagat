<template>
  <div class="container-fluid">
      <Header />
  <div class="row bg-blue content-padding pdt-70 relative d-flex">
    <ApplyProgress />
    <div class="col-md-8 col-sm-12 col-xs-12">
      <h3 class="color-white roboto-bold mgb-30 heading">
        Basic Detail Self Employed
      </h3>
      <div class="row mgb-60">
        <form v-on:submit.prevent="submit">
          <div class="row">
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="loan-amount" class="color-white">Loan Amount*</label>
              <input
                type="text"
                class="form-control"
                id="loan-amount"
                placeholder="Loan Amount"
                name="loanAmount"
                v-model.trim="$v.loanAmount.$model"
                :class="{'is-invalid': validationStatus($v.loanAmount)}"
              />
              <div v-if="!$v.loanAmount.required" class="invalid-feedback">Loan amount is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
              <label for="annual-sales" class="color-white">Annual Sales*</label>

              <select name="annualSales" v-model="annualSales" id="annual-sales" class="form-control"
              v-model.trim="$v.annualSales.$model"
              :class="{'is-invalid': validationStatus($v.loanAmount)}">
                <option value=null>Select An Option</option>
                <option value="5000000">Less than 50 Lacs</option>
                <option value="7500000">50 Lacs - 1 Cr</option>
                <option value="15000000">1 Cr - 2 Cr</option>
                <option value="25000000">2 Cr - 3 Cr</option>
                <option value="35000000">3 Cr - 4 Cr</option>
                <option value="45000000">4 Cr - 5 Cr</option>
                <option value="75000000">5 Cr - 10 Cr</option>
                <option value="150000000">10 Cr - 20 Cr</option>
                <option value="350000000">20 Cr - 50 Cr</option>
                <option value="750000000">50 Cr - 100 Cr</option>
                <option value="1000000000">More than 100 Cr</option>

            </select>
              <div v-if="!$v.annualSales.required" class="invalid-feedback">Annual sales is required.</div>
            </div>
            <div class="col-md-2 col-sm-12 col-xs-12 form-group"></div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
                <label for="city" class="color-white">City*</label>
                <typeahead
                :data = "cities"
                :minMatchingChars = "1"
                class=""
                id="city"
                :placeholder="city?city:'Your City'"
                name="city"
                v-model.trim="$v.city.$model"
                :class="{'is-invalid': validationStatus($v.city)}"
                >
                </typeahead>

              <div v-if="!$v.city.required" class="invalid-feedback">City is required.</div>
            </div>
            <div class="col-md-5 col-xs-12 col-sm-6 form-group">
                 <label for="mobile-number" class="color-white">Mobile Number*</label>
              <input
                type="text"
                class="form-control"
                placeholder="Mobile Number"
                name="mobileNumber"
                v-model="mobileNumber"
                v-model.trim="$v.mobileNumber.$model"
                :class="{'is-invalid': validationStatus($v.mobileNumber)}"
              />
              <div v-if="!$v.mobileNumber.required" class="invalid-feedback">Mobile number is required.</div>
            </div>
            <div class="col-12 form-group mgt-15">
              <router-link to="/">
                <button type="button" class="btn button-dark-blue form-button d-flex-inline justify-content-center align-items-center color-white bg-blue mgr-15">Previous</button>
              </router-link>
                <button type="button" v-on:click="submit" class="btn form-button button-blue d-flex-inline justify-content-center align-items-center color-white bg-blue">Countinue</button>
            </div>
          </div>
        </form>
      </div>
       <ApplyReview />
    </div>
    <div class="col-md-4 col-sm-12 col-xs-12">
     <ApplyFeature v-bind:list="list" />
    </div>
  </div>
  <OtherPages page="business-loan"/>
  <Footer
  content="For instance, if Rahul applies for a Business loan of INR 5 Lacs and get the loan sanctioned at the rate of 15.99% with a tenure range of 3 years, in such a case his EMI would be INR 17,576 and complete repayment amount till the end of 3 years tenure would be INR 6,32,738 (i.e 17,576 EMI * 36 months), wherein the total interest amount is INR 1,32,738 along with principal repayment of INR 5,00,000. Few additional charges like those of minimal one-time processing fee ranging from 1% to 3% of loan amount, pre-payment penalty on an earlier foreclosure of loan ranging from 1% to 5% may also apply. T& C apply."
  />
</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import ApplyProgress from '../sub-components/ApplyProgress';
import ApplyFeature from '../sub-components/ApplyFeature';
import ApplyReview from '../sub-components/ApplyReview';
import Header from '../sub-components/Header';
import Footer from '../sub-components/Footer';
import OtherPages from '../sub-components/OtherPages';
import typeahead from 'vue-bootstrap-typeahead';
// import {self_employed_form} from '../globalVariableSalaried.js'
export default {
  name: "BasicDetailSelfEmployment",
  data:function()
  {
   return{
       mobileNumber:null,
       loanAmount:null,
       city:null,
       annualSales:"",
       self_employed_form:{},
       list:[
        {
          "title":"Business Loan Starting at 12.99%",
          "new":true
        },
        {
          "title":"Free and Quick Service",
          "new":false
        },
        {
          "title":"Cashback upto Rs 5,000",
          "new":true
        },
        {
          "title":"Instant Paperless Approvals",
          "new":true
        },
        {
          "title":"10.4% interest rate",
          "new":true
        },
        {
          "title":"Servicing Pan India Cities",
          "new":false
        },
        {
          "title":"Money in Account in 24 hrs ",
          "new":false
        },
        {
          "title":"Easy Debt Consolidation",
          "new":true
        },
  ],
  cities: ["Mumbai","Delhi","Bengaluru","Ahmedabad","Hyderabad","Chennai","Kolkata","Pune","Jaipur","Surat","Lucknow","Kanpur","Nagpur","Patna","Indore","Thane","Bhopal","Visakhapatnam","Vadodara","Firozabad","Ludhiana","Rajkot","Agra","Siliguri","Nashik","Faridabad","Patiala","Meerut","Kalyan-Dombivali","Vasai-Virar","Varanasi","Srinagar","Dhanbad","Jodhpur","Amritsar","Raipur","Allahabad","Coimbatore","Jabalpur","Gwalior","Vijayawada","Madurai","Guwahati","Chandigarh","Hubli-Dharwad","Amroha","Moradabad","Gurgaon","Aligarh","Solapur","Ranchi","Jalandhar","Tiruchirappalli","Bhubaneswar","Salem","Warangal","Mira-Bhayandar","Thiruvananthapuram","Bhiwandi","Saharanpur","Guntur","Amravati","Bikaner","Noida","Jamshedpur","Bhilai Nagar","Cuttack","Kochi","Udaipur","Bhavnagar","Dehradun","Asansol","Nanded-Waghala","Ajmer","Jamnagar","Ujjain","Sangli","Loni","Jhansi","Pondicherry","Nellore","Jammu","Belagavi","Raurkela","Mangaluru","Tirunelveli","Malegaon","Gaya","Tiruppur","Davanagere","Kozhikode","Akola","Kurnool","Bokaro Steel City","Rajahmundry","Ballari","Agartala","Bhagalpur","Latur","Dhule","Korba","Bhilwara","Brahmapur","Mysore","Muzaffarpur","Ahmednagar","Kollam","Raghunathganj","Bilaspur","Shahjahanpur","Thrissur","Alwar","Kakinada","Nizamabad","Sagar","Tumkur","Hisar","Rohtak","Panipat","Darbhanga","Kharagpur","Aizawl","Ichalkaranji","Tirupati","Karnal","Bathinda","Rampur","Shivamogga","Ratlam","Modinagar","Durg","Shillong","Imphal","Hapur","Ranipet","Anantapur","Arrah","Karimnagar","Parbhani","Etawah","Bharatpur","Begusarai","New Delhi","Chhapra","Kadapa","Ramagundam","Pali","Satna","Vizianagaram","Katihar","Hardwar","Sonipat","Nagercoil","Thanjavur","Murwara (Katni)","Naihati","Sambhal","Nadiad","Yamunanagar","English Bazar","Eluru","Munger","Panchkula","Raayachuru","Panvel","Deoghar","Ongole","Nandyal","Morena","Bhiwani","Porbandar","Palakkad","Anand","Purnia","Baharampur","Barmer","Morvi","Orai","Bahraich","Sikar","Vellore","Singrauli","Khammam","Mahesana","Silchar","Sambalpur","Rewa","Unnao","Hugli-Chinsurah","Raiganj","Phusro","Adityapur","Alappuzha","Bahadurgarh","Machilipatnam","Rae Bareli","Jalpaiguri","Bharuch","Pathankot","Hoshiarpur","Baramula","Adoni","Jind","Tonk","Tenali","Kancheepuram","Vapi","Sirsa","Navsari","Mahbubnagar","Puri","Robertson Pet","Erode","Batala","Haldwani-cum-Kathgodam","Vidisha","Saharsa","Thanesar","Chittoor","Veraval","Lakhimpur","Sitapur","Hindupur","Santipur","Balurghat","Ganjbasoda","Moga","Proddatur","Srinagar","Medinipur","Habra","Sasaram","Hajipur","Bhuj","Shivpuri","Ranaghat","Shimla","Tiruvannamalai","Kaithal","Rajnandgaon","Godhra","Hazaribag","Bhimavaram","Mandsaur","Dibrugarh","Kolar","Bankura","Mandya","Dehri-on-Sone","Madanapalle","Malerkotla","Lalitpur","Bettiah","Pollachi","Khanna","Neemuch","Palwal","Palanpur","Guntakal","Nabadwip","Udupi","Jagdalpur","Motihari","Pilibhit","Dimapur","Mohali","Sadulpur","Rajapalayam","Dharmavaram","Kashipur","Sivakasi","Darjiling","Chikkamagaluru","Gudivada","Baleshwar Town","Mancherial","Srikakulam","Adilabad","Yavatmal","Barnala","Nagaon","Narasaraopet","Raigarh","Roorkee","Valsad","Ambikapur","Giridih","Chandausi","Purulia","Patan","Bagaha","Hardoi ","Achalpur","Osmanabad","Deesa","Nandurbar","Azamgarh","Ramgarh","Firozpur","Baripada Town","Karwar","Siwan","Rajampet","Pudukkottai","Anantnag","Tadpatri","Satara","Bhadrak","Kishanganj","Suryapet","Wardha","Ranebennuru","Amreli","Neyveli (TS)","Jamalpur","Marmagao","Udgir","Tadepalligudem","Nagapattinam","Buxar","Aurangabad","Jehanabad","Phagwara","Khair","Sawai Madhopur","Kapurthala","Chilakaluripet","Aurangabad","Malappuram","Rewari","Nagaur","Sultanpur","Nagda","Port Blair","Lakhisarai","Panaji","Tinsukia","Itarsi","Kohima","Balangir","Nawada","Jharsuguda","Jagtial","Viluppuram","Amalner","Zirakpur","Tanda","Tiruchengode","Nagina","Yemmiganur","Vaniyambadi","Sarni","Theni Allinagaram","Margao","Akot","Sehore","Mhow Cantonment","Kot Kapura","Makrana","Pandharpur","Miryalaguda","Shamli","Seoni","Ranibennur","Kadiri","Shrirampur","Rudrapur","Parli","Najibabad","Nirmal","Udhagamandalam","Shikohabad","Jhumri Tilaiya","Aruppukkottai","Ponnani","Jamui","Sitamarhi","Chirala","Anjar","Karaikal","Hansi","Anakapalle","Mahasamund","Faridkot","Saunda","Dhoraji","Paramakudi","Balaghat","Sujangarh","Khambhat","Muktsar","Rajpura","Kavali","Dhamtari","Ashok Nagar","Sardarshahar","Mahuva","Bargarh","Kamareddy","Sahibganj","Kothagudem","Ramanagaram","Gokak","Tikamgarh","Araria","Rishikesh","Shahdol","Medininagar (Daltonganj)","Arakkonam","Washim","Sangrur","Bodhan","Fazilka","Palacole","Keshod","Sullurpeta","Wadhwan","Gurdaspur","Vatakara","Tura","Narnaul","Kharar","Yadgir","Ambejogai","Ankleshwar","Savarkundla","Paradip","Virudhachalam","Kanhangad","Kadi","Srivilliputhur","Gobindgarh","Tindivanam","Mansa","Taliparamba","Manmad","Tanuku","Rayachoti","Virudhunagar","Koyilandy","Jorhat","Karur","Valparai","Srikalahasti","Neyyattinkara","Bapatla","Fatehabad","Malout","Sankarankovil","Tenkasi","Ratnagiri","Rabkavi Banhatti","Sikandrabad","Chaibasa","Chirmiri","Palwancha","Bhawanipatna","Kayamkulam","Pithampur","Nabha","Shahabad, Hardoi","Dhenkanal","Uran Islampur","Gopalganj","Bongaigaon City","Palani","Pusad","Sopore","Pilkhuwa","Tarn Taran","Renukoot","Mandamarri","Shahabad","Barbil","Koratla","Madhubani","Arambagh","Gohana","Ladnu","Pattukkottai","Sirsi","Sircilla","Tamluk","Jagraon","AlipurdUrban Agglomerationr","Alirajpur","Tandur","Naidupet","Tirupathur","Tohana","Ratangarh","Dhubri","Masaurhi","Visnagar","Vrindavan","Nokha","Nagari","Narwana","Ramanathapuram","Ujhani","Samastipur","Laharpur","Sangamner","Nimbahera","Siddipet","Suri","Diphu","Jhargram","Shirpur-Warwade","Tilhar","Sindhnur","Udumalaipettai","Malkapur","Wanaparthy","Gudur","Kendujhar","Mandla","Mandi","Nedumangad","North Lakhimpur","Vinukonda","Tiptur","Gobichettipalayam","Sunabeda","Wani","Upleta","Narasapuram","Nuzvid","Tezpur","Una","Markapur","Sheopur","Thiruvarur","Sidhpur","Sahaswan","Suratgarh","Shajapur","Rayagada","Lonavla","Ponnur","Kagaznagar","Gadwal","Bhatapara","Kandukur","Sangareddy","Unjha","Lunglei","Karimganj","Kannur","Bobbili","Mokameh","Talegaon Dabhade","Anjangaon","Mangrol","Sunam","Gangarampur","Thiruvallur","Tirur","Rath","Jatani","Viramgam","Rajsamand","Yanam","Kottayam","Panruti","Dhuri","Namakkal","Kasaragod","Modasa","Rayadurg","Supaul","Kunnamkulam","Umred","Bellampalle","Sibsagar","Mandi Dabwali","Ottappalam","Dumraon","Samalkot","Jaggaiahpet","Goalpara","Tuni","Lachhmangarh","Bhongir","Amalapuram","Firozpur Cantt.","Vikarabad","Thiruvalla","Sherkot","Palghar","Shegaon","Jangaon","Bheemunipatnam","Panna","Thodupuzha","KathUrban Agglomeration","Palitana","Arwal","Venkatagiri","Kalpi","Rajgarh (Churu)","Sattenapalle","Arsikere","Ozar","Thirumangalam","Petlad","Nasirabad","Phaltan","Rampurhat","Nanjangud","Forbesganj","Tundla","BhabUrban Agglomeration","Sagara","Pithapuram","Sira","Bhadrachalam","Charkhi Dadri","Chatra","Palasa Kasibugga","Nohar","Yevla","Sirhind Fatehgarh Sahib","Bhainsa","Parvathipuram","Shahade","Chalakudy","Narkatiaganj","Kapadvanj","Macherla","Raghogarh-Vijaypur","Rupnagar","Naugachhia","Sendhwa","Byasanagar","Sandila","Gooty","Salur","Nanpara","Sardhana","Vita","Gumia","Puttur","Jalandhar Cantt.","Nehtaur","Changanassery","Mandapeta","Dumka","Seohara","Umarkhed","Madhupur","Vikramasingapuram","Punalur","Kendrapara","Sihor","Nellikuppam","Samana","Warora","Nilambur","Rasipuram","Ramnagar","Jammalamadugu","Nawanshahr","Thoubal","Athni","Cherthala","Sidhi","Farooqnagar","Peddapuram","Chirkunda","Pachora","Madhepura","Pithoragarh","Tumsar","Phalodi","Tiruttani","Rampura Phul","Perinthalmanna","Padrauna","Pipariya","Dalli-Rajhara","Punganur","Mattannur","Mathura","Thakurdwara","Nandivaram-Guduvancheri","Mulbagal","Manjlegaon","Wankaner","Sillod","Nidadavole","Surapura","Rajagangapur","Sheikhpura","Parlakhemundi","Kalimpong","Siruguppa","Arvi","Limbdi","Barpeta","Manglaur","Repalle","Mudhol","Shujalpur","Mandvi","Thangadh","Sironj","Nandura","Shoranur","Nathdwara","Periyakulam","Sultanganj","Medak","Narayanpet","Raxaul Bazar","Rajauri","Pernampattu","Nainital","Ramachandrapuram","Vaijapur","Nangal","Sidlaghatta","Punch","Pandhurna","Wadgaon Road","Talcher","Varkala","Pilani","Nowgong","Naila Janjgir","Mapusa","Vellakoil","Merta City","Sivaganga","Mandideep","Sailu","Vyara","Kovvur","Vadalur","Nawabganj","Padra","Sainthia","Siana","Shahpur","Sojat","Noorpur","Paravoor","Murtijapur","Ramnagar","Sundargarh","Taki","Saundatti-Yellamma","Pathanamthitta","Wadi","Rameshwaram","Tasgaon","Sikandra Rao","Sihora","Tiruvethipuram","Tiruvuru","Mehkar","Peringathur","Perambalur","Manvi","Zunheboto","Mahnar Bazar","Attingal","Shahbad","Puranpur","Nelamangala","Nakodar","Lunawada","Murshidabad","Mahe","Lanka","Rudauli","Tuensang","Lakshmeshwar","Zira","Yawal","Thana Bhawan","Ramdurg","Pulgaon","Sadasivpet","Nargund","Neem-Ka-Thana","Memari","Nilanga","Naharlagun","Pakaur","Wai","Tarikere","Malavalli","Raisen","Lahar","Uravakonda","Savanur","Sirohi","Udhampur","Umarga","Pratapgarh","Lingsugur","Usilampatti","Palia Kalan","Wokha","Rajpipla","Vijayapura","Rawatbhata","Sangaria","Paithan","Rahuri","Patti","Zaidpur","Lalsot","Maihar","Vedaranyam","Nawapur","Solan","Vapi","Sanawad","Warisaliganj","Revelganj","Sabalgarh","Tuljapur","Simdega","Musabani","Kodungallur","Phulabani","Umreth","Narsipatnam","Nautanwa","Rajgir","Yellandu","Sathyamangalam","Pilibanga","Morshi","Pehowa","Sonepur","Pappinisseri","Zamania","Mihijam","Purna","Puliyankudi","Shikarpur, Bulandshahr","Umaria","Porsa","Naugawan Sadat","Fatehpur Sikri","Manuguru","Udaipur","Pipar City","Pattamundai","Nanjikottai","Taranagar","Yerraguntla","Satana","Sherghati","Sankeshwara","Madikeri","Thuraiyur","Sanand","Rajula","Kyathampalle","Shahabad, Rampur","Tilda Newra","Narsinghgarh","Chittur-Thathamangalam","Malaj Khand","Sarangpur","Robertsganj","Sirkali","Radhanpur","Tiruchendur","Utraula","Patratu","Vijainagar, Ajmer","Periyasemur","Pathri","Sadabad","Talikota","Sinnar","Mungeli","Sedam","Shikaripur","Sumerpur","Sattur","Sugauli","Lumding","Vandavasi","Titlagarh","Uchgaon","Mokokchung","Paschim Punropara","Sagwara","Ramganj Mandi","Tarakeswar","Mahalingapura","Dharmanagar","Mahemdabad","Manendragarh","Uran","Tharamangalam","Tirukkoyilur","Pen","Makhdumpur","Maner","Oddanchatram","Palladam","Mundi","Nabarangapur","Mudalagi","Samalkha","Nepanagar","Karjat","Ranavav","Pedana","Pinjore","Lakheri","Pasan","Puttur","Vadakkuvalliyur","Tirukalukundram","Mahidpur","Mussoorie","Muvattupuzha","Rasra","Udaipurwati","Manwath","Adoor","Uthamapalayam","Partur","Nahan","Ladwa","Mankachar","Nongstoin","Losal","Sri Madhopur","Ramngarh","Mavelikkara","Rawatsar","Rajakhera","Lar","Lal Gopalganj Nindaura","Muddebihal","Sirsaganj","Shahpura","Surandai","Sangole","Pavagada","Tharad","Mansa","Umbergaon","Mavoor","Nalbari","Talaja","Malur","Mangrulpir","Soro","Shahpura","Vadnagar","Raisinghnagar","Sindhagi","Sanduru","Sohna","Manavadar","Pihani","Safidon","Risod","Rosera","Sankari","Malpura","Sonamukhi","Shamsabad, Agra","Nokha","PandUrban Agglomeration","Mainaguri","Afzalpur","Shirur","Salaya","Shenkottai","Pratapgarh","Vadipatti","Nagarkurnool","Savner","Sasvad","Rudrapur","Soron","Sholingur","Pandharkaoda","Perumbavoor","Maddur","Nadbai","Talode","Shrigonda","Madhugiri","Tekkalakote","Seoni-Malwa","Shirdi","SUrban Agglomerationr","Terdal","Raver","Tirupathur","Taraori","Mukhed","Manachanallur","Rehli","Sanchore","Rajura","Piro","Mudabidri","Vadgaon Kasba","Nagar","Vijapur","Viswanatham","Polur","Panagudi","Manawar","Tehri","Samdhan","Pardi","Rahatgarh","Panagar","Uthiramerur","Tirora","Rangia","Sahjanwa","Wara Seoni","Magadi","Rajgarh (Alwar)","Rafiganj","Tarana","Rampur Maniharan","Sheoganj","Raikot","Pauri","Sumerpur","Navalgund","Shahganj","Marhaura","Tulsipur","Sadri","Thiruthuraipoondi","Shiggaon","Pallapatti","Mahendragarh","Sausar","Ponneri","Mahad","Lohardaga","Tirwaganj","Margherita","Sundarnagar","Rajgarh","Mangaldoi","Renigunta","Longowal","Ratia","Lalgudi","Shrirangapattana","Niwari","Natham","Unnamalaikadai","PurqUrban Agglomerationzi","Shamsabad, Farrukhabad","Mirganj","Todaraisingh","Warhapur","Rajam","Urmar Tanda","Lonar","Powayan","P.N.Patti","Palampur","Srisailam Project (Right Flank Colony) Township","Sindagi","Sandi","Vaikom","Malda","Tharangambadi","Sakaleshapura","Lalganj","Malkangiri","Rapar","Mauganj","Todabhim","Srinivaspur","Murliganj","Reengus","Sawantwadi","Tittakudi","Lilong","Rajaldesar","Pathardi","Achhnera","Pacode","Naraura","Nakur","Palai","Morinda, India","Manasa","Nainpur","Sahaspur","Pauni","Prithvipur","Ramtek","Silapathar","Songadh","Safipur","Sohagpur","Mul","Sadulshahar","Phillaur","Sambhar","Prantij","Nagla","Pattran","Mount Abu","Reoti","Tenu dam-cum-Kathhara","Panchla","Sitarganj","Pasighat","Motipur","O' Valley","Raghunathpur","Suriyampalayam","Qadian","Rairangpur","Silvassa","Nowrozabad (Khodargama)","Mangrol","Soyagaon","Sujanpur","Manihari","Sikanderpur","Mangalvedhe","Phulera","Ron","Sholavandan","Saidpur","Shamgarh","Thammampatti","Maharajpur","Multai","Mukerian","Sirsi","Purwa","Sheohar","Namagiripettai","Parasi","Lathi","Lalganj","Narkhed","Mathabhanga","Shendurjana","Peravurani","Mariani","Phulpur","Rania","Pali","Pachore","Parangipettai","Pudupattinam","Panniyannur","Maharajganj","Rau","Monoharpur","Mandawa","Marigaon","Pallikonda","Pindwara","Shishgarh","Patur","Mayang Imphal","Mhowgaon","Guruvayoor","Mhaswad","Sahawar","Sivagiri","Mundargi","Punjaipugalur","Kailasahar","Samthar","Sakti","Sadalagi","Silao","Mandalgarh","Loha","Pukhrayan","Padmanabhapuram","Belonia","Saiha","Srirampore","Talwara","Puthuppally","Khowai","Vijaypur","Takhatgarh","Thirupuvanam","Adra","Piriyapatna","Obra","Adalaj","Nandgaon","Barh","Chhapra","Panamattom","Niwai","Bageshwar","Tarbha","Adyar","Narsinghgarh","Warud","Asarganj","Sarsod","Gandhinagar","Kullu","Manali","Mirzapur","Kota","Dispur",],



   }
  },
  components: {
    ApplyProgress,
    ApplyFeature,
    ApplyReview,
    Header,
    Footer,
    OtherPages,
    typeahead,
  },
        validations: {
        annualSales: {required},
        loanAmount: {required},
        city: {required},
        mobileNumber: {required, minLength: minLength(10)},
        annualSales:{required},

    },
      mounted (){
        this.self_employed_form=localStorage.getItem("self_employed_form") ? JSON.parse(localStorage.getItem("self_employed_form")) : {};
        this.mobileNumber=this.self_employed_form.mobile_number ? this.self_employed_form.mobile_number : null;
        this.loanAmount=this.self_employed_form.loan_amount_required ? this.self_employed_form.loan_amount_required : null;
        this.city=this.self_employed_form.city ? this.self_employed_form.city : null;
        this.annualSales=this.self_employed_form.turn_over ? this.self_employed_form.turn_over :null ;
      },
        methods: {
             validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error : false;
            },
        submit: function() {
            console.log(this.loanAmount);
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
            this.self_employed_form.mobile_number=this.mobileNumber
            this.self_employed_form.loan_amount_required=this.loanAmount
            this.self_employed_form.city=this.city
            this.self_employed_form.turn_over=this.annualSales
            localStorage.setItem("self_employed_form",JSON.stringify(this.self_employed_form));

            this.$router.push('/self-employed/personal-detail');
            // alert('Data Submit');
        }},
};
</script>
