import Vue from 'vue'
import Router from 'vue-router'

import index from './components/Index.vue'
import business_result from '../src/components/BusinessLoan/BusinessLoanBankFilter.vue'
import hml_saliried_result from '../src/components/HomeLoanSalaried/HomeLoanBankFilter.vue'
import hml_employee_result from '../src/components/HomeLoanSelfEmployed/HomeLoanBankEmployedFilter.vue'
import loan_agaist_result from '../src/components/LoanAgainstPropertySalaried/LoanAgainstPropertyResult.vue'

import BasicDetailSalaried from "../src/components/PersonalLoan/BasicDetailSalaried.vue";
import PersonalDetailSalaried from "../src/components/PersonalLoan/PersonalDetailSalaried.vue";
import TransactionDetailSalaried  from "../src/components/PersonalLoan/TransactionDetailSalaried.vue";
import OfferDetailSalaried  from "../src/components/PersonalLoan/OfferDetailSalaried.vue";

import PersonalBenefits from '../src/components/PersonalLoan/PersonalBenefits.vue'
import PersonalDocumentRequirement from '../src/components/PersonalLoan/PersonDocumentRequired.vue'
import PersonalEligibility from '../src/components/PersonalLoan/PersonalEligibility.vue'

import BusinessBenefits from '../src/components/BusinessLoan/BusinessBenifits.vue';
import BusinessDocumentRequirement from '../src/components/BusinessLoan/BusinessDocumentRequired.vue';
import BusinessEligibility from '../src/components/BusinessLoan/BusinessEligibility.vue';

import BasicDetailSelfEmployed  from "../src/components/BusinessLoan/BasicDetailSelfEmployed.vue";
import PersonalDetailSelfEmployed  from "../src/components/BusinessLoan/PersonalDetailSelfEmployed.vue";
import TransactionDetailSelfEmployed  from "../src/components/BusinessLoan/TransactionDetailSelfEmployed.vue";
import OfferDetailSelfEmployed  from "../src/components/BusinessLoan/OfferDetailSelfEmployed.vue";
import AcknowledgementThankyouPage   from "../src/components/sub-components/AcknowledgementThankyouPage .vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        title: 'Compare Loans &amp; Apply for Instant Loan | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'LoansJagat.com is one of the leading digital finance company in India that helps to achieve the financial dreams of people by applying instant loan online. Avail all kinds of loans such as personal loan, business loan, housing loans etc. at lowest interest rate.'
          },
          {
            property: 'og:description',
            content: 'LoansJagat.com is one of the leading digital finance company in India that helps to achieve the financial dreams of people by applying instant loan online. Avail all kinds of loans such as personal loan, business loan, housing loans etc. at lowest interest rate.'
          }
        ]
      },
    },
    {
      path: '/personal-loan',
      name:'personal-loan',
      component: () => import("../src/components/PersonalLoan/LandingPage.vue"),
      meta: {
        title: 'LoansJagat.com',}
    },
    { path: '/salaried/basic-detail', component:BasicDetailSalaried,
      meta: {title: 'Business Loan | LoansJagat.com',}
    },
    { path: '/salaried/personal-detail', component:PersonalDetailSalaried,
    meta: {title: 'Business Loan | LoansJagat.com',}},
    { path: '/salaried/transaction-detail', component:TransactionDetailSalaried ,
    meta: {title: 'Business Loan | LoansJagat.com',}},
    { path: '/salaried/offer-detail', component: OfferDetailSalaried,
    meta: {title: 'Business Loan | LoansJagat.com',}},
    { path: '/self-employed/basic-detail', component:BasicDetailSelfEmployed ,
    meta: {title: 'Personal Loan | LoansJagat.com',}},
    { path: '/self-employed/personal-detail', component:PersonalDetailSelfEmployed,
    meta: {title: 'Personal Loan | LoansJagat.com',} },
    { path: '/self-employed/transaction-detail', component:TransactionDetailSelfEmployed ,
    meta: {title: 'Personal Loan | LoansJagat.com',}},
    { path: '/self-employed/offer-detail', component:OfferDetailSelfEmployed ,
    meta: {title: 'Personal Loan | LoansJagat.com',}},
    { path: '/acknowledgement-thankyou', component:AcknowledgementThankyouPage ,
    meta: {title: '| LoansJagat.com',}},
    { path: '/business-loan/eligibility', component:BusinessEligibility ,
    meta: {title: 'Business Loan | LoansJagat.com',}},
    { path: '/business-loan/document-requirements', component:BusinessDocumentRequirement ,
    meta: {title: 'Business Loan | LoansJagat.com',}},
    { path: '/business-loan/benefits', component:BusinessBenefits,
    meta: {title: 'Business Loan | LoansJagat.com',}},
    { path: '/personal-loan/document-requirements', component:PersonalDocumentRequirement ,
    meta: {title: 'Personal Loan | LoansJagat.com',}},
    { path: '/personal-loan/eligibility', component:PersonalEligibility ,
    meta: {title: 'Personal Loan | LoansJagat.com',}},
    { path: '/personal-loan/benefits', component:PersonalBenefits,
    meta: {title: 'Personal Loan | LoansJagat.com',}},

    {
      path: '/login',
      name:'login',
      component: () => import("../src/components/Login/login.vue")
    },
    {
      path: '/dashboard',
      name:'dashboard',
      component: () => import("../src/components/Dashboard/dashboad.vue")
    },
    {
      path: '/update-profile',
      name: 'updateProfile',
      component: () => import("../src/components/Dashboard/update_profile.vue")
    },
    {
      path: '/upload-pl-documents',
      name: 'pl_documents',
      component: () => import("../src/components/Dashboard/pl_documents.vue")
    },
    {
      path: '/upload-lap-documents',
      name: 'lap_documents',
      component: () => import("../src/components/Dashboard/lap_documents.vue")
    },
    {
      path: '/upload-hl-documents',
      name: 'hl_documents',
      component: () => import("../src/components/Dashboard/hl_documents.vue")
    },
    {
      path: '/upload-lapselfemp-documents',
      name: 'lap_selfemp_documents',
      component: () => import("../src/components/Dashboard/lap_selfemp_documents.vue")
    },
    {
      path: '/personal-loans',
      name:"personal-loans",
      component: () => import("../src/components/PersonalLoan/PersonalLoan.vue"),
      meta: {
        title: 'Personal Loan - Instant Personal Loans for Salaried Online @ 10.50%* ROI',
        metaTags: [
          {
            name: 'description',
            content: 'Need Personal Loan? LoansJagat offers the instant personal loans from over 40 top Banks and NBFCs, just enter your requirements and get the best offers.'
          },
          {
            property: 'og:description',
            content: 'Need Personal Loan? LoansJagat offers the instant personal loans from over 40 top Banks and NBFCs, just enter your requirements and get the best offers.'
          }
        ]
      },
    },
    {
      path: '/business-loans',
      name: 'bl',
      component: () => import("../src/components/BusinessLoan/BusinessLoan.vue"),
      meta: {
        title: 'Business Loans - Apply Business Loan for self Employed Online in India',
        metaTags: [
          {
            name: 'description',
            content: 'LoansJagat.com is a renowned platform for online Business loans in India for Small Business and Medium Enterprises. Apply online business loan and get instant eligibility with minimum documentation!'
          },
          {
            property: 'og:description',
            content: 'LoansJagat.com is a renowned platform for online Business loans in India for Small Business and Medium Enterprises. Apply online business loan and get instant eligibility with minimum documentation!'
          }
        ]
      },
    },
    {
      path: '/home-loans-for-salaried',
      name: 'hlsal',
      component: () => import("../src/components/HomeLoanSalaried/HomeLoanSalaried.vue"),
      meta: {
        title: 'Apply Home Loan for Salaried in India',
        metaTags: [
          {
            name: 'description',
            content: 'Compare and apply for hassle free home loans for salaried at LoansJagat.com with quick processing, easy and convenient availability of loan, best interest rates, less documentation and best after sales service till your whole loan tenure.'
          },
          {
            property: 'og:description',
            content: 'Compare and apply for hassle free home loans for salaried at LoansJagat.com with quick processing, easy and convenient availability of loan, best interest rates, less documentation and best after sales service till your whole loan tenure.'
          }
        ]
      },
    },
    {
      path: '/home-loans-for-self-employed',
      name: 'hlselfemp',
      component: () => import("../src/components/HomeLoanSelfEmployed/HomeLoanSelfEmployed.vue"),
      meta: {
        title: 'Apply Housing Loan for self Employed Online',
        metaTags: [
          {
            name: 'description',
            content: 'Compare and apply for home loans for self employed/business person at LoansJagat.com with lowest interest rates, longer repayment period, easy and convenient availability of loan, less documentation, quick processing and best after sales service till the whole tenure of your loan.'
          },
          {
            property: 'og:description',
            content: 'Compare and apply for home loans for self employed/business person at LoansJagat.com with lowest interest rates, longer repayment period, easy and convenient availability of loan, less documentation, quick processing and best after sales service till the whole tenure of your loan. '
          }
        ]
      },
    },
    {
      path: '/loanformresult',
      component: () => import("../src/components/PersonalLoan/PersonalLoanBankFilter.vue"),
      name:'result'

    },
    {
      path: '/loanformresultbusiness',
      component: () => import("../src/components/BusinessLoan/BusinessLoanBankFilter.vue"),
      name:'bl_result'
    },
    {
      path: '/hmloanformresult_salried',
      component: () => import("../src/components/HomeLoanSalaried/HomeLoanBankFilter.vue"),
      name:'hml_salried_result'
    },
    {
      path: '/employedhomeloanresult',
      component: () => import("../src/components/HomeLoanSelfEmployed/HomeLoanBankEmployedFilter.vue"),
      name:'hml_employee_result'
    },
    {
      path: '/employedloanagainstpropertyresult',
      component: () => import("../src/components/LoanAgainstPropertySelfEmployed/BankFilterData.vue"),
      name:'bank_filter_property_employee'
    },
    {
      path: '/againestpropertyloanformresult_salried',
      component: () => import("../src/components/LoanAgainstPropertySalaried/LoanAgainstPropertyResult.vue"),
      name:'loan_agaist_result'
    },
    {
      path: '/overdraftcashformresult',
      component: () => import("../src/components/OverDraftLimit/BankFilterDod.vue"),
      name:'over_draft_bank_filter'
    },
    {
      path: '/apply_consent_thank',
      component: () => import("../src/components/PersonalLoan/PersonalLoanApplyLoan.vue"),
      name:'apply-result'
    },
    {
      path: '/apply_consent_thank/:id',
      component: () => import("../src/components/PersonalLoan/PersonalLoanApplyThanks.vue"),
      name:'apply-result-with-id'
    },
    {
      path: '/balance-transfer',
      component: () => import("../src/components/BalanceTransfer/BalanceTransfer.vue"),
      meta: {
        title: 'Balance Transfer of Loan and EMI Reducing Calculator | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'LoansJagat.com is an ultimate platform for balance transfer of loan where customer can transfer his outstanding principal amount to another bank or financial institution for better interest rate and features.'
          },
          {
            property: 'og:description',
            content: 'LoansJagat.com is an ultimate platform for balance transfer of loan where customer can transfer his outstanding principal amount to another bank or financial institution for better interest rate and features.'
          }
        ]
      },
    },
    {
      path: '/balance-transfer-result',
      component: () => import("../src/components/BalanceTransfer/BalanceTransferResult.vue"),
      name:'bt_result'
    },
    {
      path: '/balance-transfer-result-card',
      component: () => import("../src/components/BalanceTransfer/CreditCardTransferResult.vue"),
      name:'bt_result_card'
    },

    {
      path: '/know-your-property',
      component: () => import("../src/components/KnowYourProperty/KnowYourProperty.vue"),
      meta: {
        title: 'Know your Property &amp; Loan Eligibility in 1 minute | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'LoansJagat.com is the only online platform that tells you about your property eligibility for secured loan in only one minute at lowest rate of interest and get the complete details.'
          },
          {
            property: 'og:description',
            content: 'LoansJagat.com is the only online platform that tells you about your property eligibility for secured loan in only one minute at lowest rate of interest and get the complete details'
          }
        ]
      },
    },
    {
      path: '/know-your-property-result',
      component: () => import("../src/components/KnowYourProperty/KnowYourPropertyResult.vue"),
      name:'know_result'
    },
    {
      path: '/know-your-property-apply',
      component: () => import("../src/components/KnowYourProperty/KnowYourPropertyApply.vue"),
    },
    {
      path: '/loan-against-property-for-salaried',
      component: () => import("../src/components/LoanAgainstPropertySalaried/LoanAgainstPropertySalaried.vue"),
      meta: {
        title: 'Apply for Loan Against Property in India for Salaried | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'Compare and apply for loan against property for salaried/business person at LoansJagat.com with lowest interest rates, easy and convenient availability of loan, less documentation, quick processing and best after sales service till the whole tenure of your loan.'
          },
          {
            property: 'og:description',
            content: 'Compare and apply for loan against property for salaried/business person at LoansJagat.com with lowest interest rates, easy and convenient availability of loan, less documentation, quick processing and best after sales service till the whole tenure of your loan.'
          }
        ]
      },
    },
    {
      path: '/loan-against-property-for-self-employed',
      component: () => import("../src/components/LoanAgainstPropertySelfEmployed/LoanAgainstPropertySelfEmployed.vue"),
      meta: {
        title: 'Get Loan against Property for Self Employed | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'Compare and apply for loan against property for self employed/business person at LoansJagat.com with quick processing, easy and convenient availability of loan and less documentation.'
          },
          {
            property: 'og:description',
            content: 'Compare and apply for loan against property for self employed/business person at LoansJagat.com with quick processing, easy and convenient availability of loan and less documentation.'
          }
        ]
      },
    },
    {
      path: '/drop-line-overdraft',
      component: () => import("../src/components/OverDraftLimit/OverDraftLimit.vue"),
      meta: {
        title: 'Dropline overdraft loan @ 9.5% - Compare choose and apply online',
        metaTags: [
          {
            name: 'description',
            content: 'Dropline overdraft is a smart loan product where you pay interest only for the amount you withdraw. Compare, choose and apply online from multiple banks offers.'
          },
          {
            property: 'og:description',
            content: 'Dropline overdraft is a smart loan product where you pay interest only for the amount you withdraw. Compare, choose and apply online from multiple banks offers.'
          }
        ]
      },
    },

    {
      path: '/about-us',
      component: () => import("../src/components/AboutUs.vue"),
      meta: {
        title: 'About Us - Fintech Company in India | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'LoansJagat.com is one of the best online fintech portal that assist almost all working class population to avail personal loans, business loans, home loans, Drop line Overdraft and Loan Against Property for their all financial requirements.'
          },
          {
            property: 'og:description',
            content: 'LoansJagat.com is one of the best online fintech portal that assist almost all working class population to avail personal loans, business loans, home loans, Drop line Overdraft and Loan Against Property for their all financial requirements.'
          }
        ]
      },
    },
    {
      path: '/contact-us',
      component: () => import("../src/components/ContactUs.vue"),
      meta: {
        title: 'Contact Us | LoansJagat.com',
        metaTags: [
          {
            name: 'description',
            content: 'Get in touch with LoansJagat.com and contact us to know everything about our services and products. We are available for you at support@loansjagat.com or you can also give us a call on +919873883888.'
          },
          {
            property: 'og:description',
            content: 'Get in touch with LoansJagat.com and contact us to know everything about our services and products. We are available for you at support@loansjagat.com or you can also give us a call on +919873883888. '
          }
        ]
      },
    },
    {
      path: '/:id',
      component: () => import("../src/components/cms.vue")
    },
  ]
})
