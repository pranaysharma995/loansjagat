(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65be1406"],{"20e9":function(t,e,a){t.exports=a.p+"img/know-your-prop.77c76ee3.jpg"},"39cc":function(t,e,a){t.exports=a.p+"img/logo-white.6d8f6ee6.png"},"5d2b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("main",{staticClass:"cd-main-content"},[a("nav",{staticClass:"cd-side-nav"},[a("ul",[a("li",{},[a("router-link",{attrs:{to:"/dashboard"}},[a("i",{staticClass:"fa fa-home"}),a("span",[t._v("Dashboard")])])],1),t._m(1),a("li",[a("router-link",{attrs:{to:"/update-profile"}},[a("i",{staticClass:"fa fa-user"}),a("span",[t._v("Update Profile")])])],1),t._m(2),t._m(3),t._m(4),t._m(5)])]),t._m(6),t._m(7),a("div",{staticClass:"mobileMenuDashboard"},[a("ul",[t._m(8),a("li",[a("router-link",{attrs:{to:"/update-profile"}},[a("i",{staticClass:"fa fa-user"}),a("span",[t._v("Update Profile")])])],1),t._m(9),t._m(10),t._m(11),t._m(12)])]),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content_container"},[a("div",{staticClass:"profile_view"},[a("div",{staticClass:"profile_view_left"},[t._m(13),a("div",{staticClass:"profile_name"},[a("h2",[t._v(t._s(t.users.name))])])]),a("div",{staticClass:"profile_view_right"},[a("div",{staticClass:"profile_pinfo"},[a("div",{staticClass:"profile_pinfo_inner"},[a("div",{staticClass:"profile_pinfo_title"},[t._v("Phone Number")]),a("div",{staticClass:"profile_pinfo_detail"},[t._v(t._s(t.users.mobile_number))])]),a("div",{staticClass:"profile_pinfo_inner"},[a("div",{staticClass:"profile_pinfo_title"},[t._v("Email ID")]),a("div",{staticClass:"profile_pinfo_detail"},[t._v(t._s(t.users.email))])]),a("div",{staticClass:"profile_pinfo_inner"},[a("div",{staticClass:"profile_pinfo_title"},[t._v("Date of Birth")]),a("div",{staticClass:"profile_pinfo_detail"},[t._v(t._s(t.users.dob))])]),a("div",{staticClass:"profile_pinfo_inner"},[a("div",{staticClass:"profile_pinfo_title"},[t._v("Gender")]),a("div",{staticClass:"profile_pinfo_detail"},[t._v(t._s(t.users.gender))])])]),t._m(14)])]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"profile_edit"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.success_msg,expression:"success_msg"}],staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Your profile has been updated successfully ")]),t._m(15),a("div",{staticClass:"profile_edit_content"},[a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("Full Name")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.full_name,expression:"full_name"}],attrs:{type:"text"},domProps:{value:t.full_name},on:{input:function(e){e.target.composing||(t.full_name=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("Mobile Number")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile_num,expression:"mobile_num"}],attrs:{type:"text"},domProps:{value:t.mobile_num},on:{input:function(e){e.target.composing||(t.mobile_num=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("Date of Birth")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dob,expression:"dob"}],attrs:{type:"text",placeholder:"__ / __ / ____"},domProps:{value:t.dob},on:{input:function(e){e.target.composing||(t.dob=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("E-mail ID")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("PAN Number")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pan_no,expression:"pan_no"}],attrs:{type:"text"},domProps:{value:t.pan_no},on:{input:function(e){e.target.composing||(t.pan_no=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("Monthly Income")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.monthly_income,expression:"monthly_income"}],attrs:{type:"text"},domProps:{value:t.monthly_income},on:{input:function(e){e.target.composing||(t.monthly_income=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("Gender")]),a("div",{staticClass:"genderDiv"},[a("label",{staticClass:"genderLabel"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",value:"male",checked:""},domProps:{checked:t._q(t.gender,"male")},on:{click:function(e){return t.setVal("male")},change:function(e){t.gender="male"}}}),t._v("Male")]),a("label",{staticClass:"genderLabel"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],attrs:{type:"radio",name:"gender",value:"female"},domProps:{checked:t._q(t.gender,"female")},on:{click:function(e){return t.setVal("female")},change:function(e){t.gender="female"}}}),t._v("Female")])])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("Marital Status")]),a("div",{staticClass:"profile_input"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.marital_status,expression:"marital_status"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.marital_status=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select Maritial Status")]),a("option",{attrs:{value:"Married"}},[t._v("Married")]),a("option",{attrs:{value:"Unmarried"}},[t._v("Unmarried")])])])]),a("div",{staticClass:"profile_edit_100w"},[t._m(16),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.residence_add,expression:"residence_add"}],attrs:{type:"text"},domProps:{value:t.residence_add},on:{input:function(e){e.target.composing||(t.residence_add=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_50w"},[a("div",{staticClass:"profile_label"},[t._v("City")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],attrs:{type:"text"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})])]),a("div",{staticClass:"profile_edit_30w"},[a("div",{staticClass:"profile_label"},[t._v("State")]),a("div",{staticClass:"profile_input"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.state=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Select State")]),a("option",{attrs:{value:""}})])])]),a("div",{staticClass:"profile_edit_20w"},[a("div",{staticClass:"profile_label"},[t._v("Pin Code")]),a("div",{staticClass:"profile_input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pin_code,expression:"pin_code"}],attrs:{type:"text"},domProps:{value:t.pin_code},on:{input:function(e){e.target.composing||(t.pin_code=e.target.value)}}})])]),t._m(17),a("div",{staticClass:"profile_edit_100w"},[a("input",{staticClass:"updateSubmitBtn",attrs:{type:"submit",value:"Submit"},on:{click:function(e){return t.updateProfile()}}})])])]),t._m(18)]),a("div",{staticClass:"clearfix"})]),t._v(" "),a("div",{staticClass:"clearfix"})])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"cd-main-header"},[s("a",{staticClass:"cd-logo",attrs:{href:"index.html"}},[s("img",{attrs:{src:a("39cc"),alt:"Logo"}})]),s("a",{staticClass:"cd-nav-trigger",attrs:{href:"#0"}},[s("span")]),s("nav",{staticClass:"cd-nav"},[s("ul",{staticClass:"cd-top-nav hidden-xs"},[s("li",[s("a",{attrs:{href:"#0"}},[s("i",{staticClass:"fa fa-bell"})])]),s("li",[s("a",{attrs:{href:"mailto:care@loansjagat.com",title:"Quick Contact"}},[s("i",{staticClass:"fa fa-envelope"})])]),s("li",{staticClass:"has-children account"},[s("a",{attrs:{href:"#0"}},[s("img",{attrs:{src:a("a8b3"),alt:"avatar"}}),t._v(" 1223 ")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fa fa-power-off"}),s("span",[t._v("Logout")])])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"has-children overview hidden-xs"},[a("a",{attrs:{href:"#0"}},[a("i",{staticClass:"fa fa-server"}),a("span",[t._v("Products"),a("i",{staticClass:"fa fa-angle-right hidden-xs",staticStyle:{float:"right"}})])]),a("ul",[a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Salaried Personal Loans")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Salaried Home Loans")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Salaried Loan Against Property")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Business Loans")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Dropline Overdrafts")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Loan Against Property")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Home Loan")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Know Your Property")])]),a("li",[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("Balance Transfer")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-file-text-o"}),a("span",{staticClass:"blink"},[t._v("Upload Documents")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-refresh"}),a("span",[t._v("Refer & Earn")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-phone"}),a("span",[t._v("Contact Us")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-power-off"}),a("span",[t._v("Logout")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mobileHeadingDashboard"},[s("img",{attrs:{src:a("39cc"),alt:"Logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobileMyBoard"},[a("div",{staticClass:"mobileMyBoardTop"},[a("span",{staticClass:"profileName"},[t._v("Dashboard")]),a("span",{staticClass:"edit"},[a("a",{attrs:{href:"",title:"Edit"}},[a("i",{staticClass:"fa fa-pencil-square-o"})])])]),a("div",{staticStyle:{background:"#212121",width:"100%",float:"left",padding:"10px","border-radius":"5px"}},[a("div",{staticClass:"mobileMyBoardName"},[t._v("1223")]),a("div",{staticClass:"mobileMyBoardMobile"},[a("img",{attrs:{src:"img/phone.png"}}),t._v(" 7838480658")]),a("div",{staticClass:"mobileMyBoardGender"},[a("img",{attrs:{src:"img/user_male.png"}}),t._v(" male ")]),a("div",{staticClass:"mobileMyBoardDOB"},[a("img",{attrs:{src:"img/gift.png"}}),t._v(" 1970-01-01 ")]),a("div",{staticClass:"mobileMyBoardLoc"},[a("img",{attrs:{src:"img/envelope.png"}}),t._v(" test@gmail.com ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-home"}),a("span",[t._v("Dashboard")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-file-text-o"}),a("span",{staticClass:"blink black"},[t._v("Upload Documents")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-refresh"}),a("span",[t._v("Refer & Earn")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-phone"}),a("span",[t._v("Contact Us")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-power-off"}),a("span",[t._v("Logout")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile_img"},[s("img",{attrs:{src:a("a8b3")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile_social"},[a("ul",[a("li",[a("a",{staticClass:"hint--top",attrs:{href:"","aria-label":"Twitter"}},[a("i",{staticClass:"fa fa-twitter"})])]),a("li",[a("a",{staticClass:"hint--top",attrs:{href:"","aria-label":"Facebook"}},[a("i",{staticClass:"fa fa-facebook"})])]),a("li",[a("a",{staticClass:"hint--top",attrs:{href:"","aria-label":"Linkedin"}},[a("i",{staticClass:"fa fa-linkedin"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile_edit_heading"},[a("h4",[t._v("Personal Details")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile_label"},[t._v("Residence Address "),a("span",[t._v("(with Landmark & Pin Code)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile_edit_100w"},[a("div",{staticClass:"addAddress"},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fa fa-plus-circle"}),t._v(" Add Office Address")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"knowurprop"},[s("h3",[t._v("Know Your Property")]),s("img",{attrs:{src:a("20e9")}}),s("p",[t._v("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here Lorem. "),s("a",{attrs:{href:""}},[t._v("Check Now >>")])])])}],l=(a("b0c0"),a("eacc")),r={data:function(){return{users:[],apply_loan:[],full_name:"",mobile_num:"",dob:"",email:"",pan_no:"",monthly_income:"",gender:"",marital_status:"",residence_add:"",city:"",state:"",pin_code:"",success_msg:!1}},created:function(){this.getUserData(),this.getUsersAppliedLoans()},methods:{getUserData:function(){var t=this;l["a"].get("show_user_profile/5627").then((function(e){t.users=e.data,t.full_name=e.data.name,t.mobile_num=e.data.mobile_number,t.dob=e.data.dob,t.pan_no=e.data.panno,t.monthly_income=e.data.net_monthly_salary,t.gender=e.data.gender,t.email=e.data.email,t.residence_add=e.data.residence_address}))},getUsersAppliedLoans:function(){var t=this,e={mobile_number:9999999999};l["a"].post("/dashboard",e).then((function(e){t.apply_loan=e.data.detail})).catch((function(t){console.log(t)}))},setVal:function(t){this.gender=t},updateProfile:function(){var t=this,e={name:this.full_name,email:this.email,mobile_number:this.mobile_num,gender:this.gender,dob:this.dob,panno:this.pan_no,residence_address:this.residence_add,net_monthly_salary:this.net_monthly_salary};l["a"].put("/user_profile_update/5627",e).then((function(e){console.log(e),t.success_msg=!0,setTimeout((function(t){t.success_msg=!1}),2e3,t),t.getUserData(),window.scrollTo(0,0)})).catch((function(t){console.log(t)}))}}},n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports},a8b3:function(t,e,a){t.exports=a.p+"img/dashman.f8a7e526.jpg"}}]);
//# sourceMappingURL=chunk-65be1406.24eabe35.js.map