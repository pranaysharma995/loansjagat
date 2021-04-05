<template>
<div>
  <app-header></app-header>

  <div class="banner_new">
    <div class="container">
	<div class="row">
	  <div class="col-lg-8 col-md-8 col-xs-12">
		  <div class="banner_new_image">
			<h1>India's Largest Online Loan Providing Company</h1>
			<img src="@/assets/images/banner.png">
	      </div>
	  </div>
	  <div class="col-lg-4 col-md-4 col-xs-12">
      <div class="jumbotron quick_apply">
		<div class="alert alert-success" role="alert" v-show="success_msg">
			Thanks For applying quick loan, we will get back to you shortly
		</div>
        <div class="quick_apply_head">
          <h2>Quick Apply for Loan</h2>
	    </div>
        <div class="quick_apply_inner">
          <div class="quick_apply_input">
            <span class="quick_apply_icons"><i class="fa fa-user-circle-o"></i></span>
            <input type="text" name="" @focus="toggleBorder" id="name" v-model="name" placeholder="Name">
          </div>
          <div class="quick_apply_input">
            <span class="quick_apply_icons"><i class="fa fa-suitcase"></i></span>
            <input type="text" name="" @focus="toggleBorder" id="work_profile" v-model="work_profile" placeholder="Work Profile">
          </div>
          <div class="quick_apply_input">
            <span class="quick_apply_icons"><i class="fa fa-inr"></i></span>
            <input type="text" name="" @focus="toggleBorder" id="loan_amt_require" v-model="loan_amt_require" placeholder="Loan Amount Required">
          </div>
          <div class="quick_apply_input">
            <span class="quick_apply_icons"><i class="fa fa-mobile"></i></span>
            <input type="text" name=""  @focus="toggleBorder" onKeyPress="if(this.value.length==10) return false;" id="mobile" v-model="mobile" placeholder="Mobile">
          </div>
          <div class="quick_apply_input">
            <span class="quick_apply_icons"><i class="fa fa-envelope-o"></i></span>
            <input type="text" name="" @focus="toggleBorder" id="email" v-model="email" placeholder="Email">
          </div>
          <div class="quick_apply_submit">
            <input type="button" name="" @click="create" value="Submit" class="btn btn-md btn-primary">
          </div>
        </div>
		<div style="clear:both;"></div>
      </div>
      </div>
    </div>
	</div>
  </div>

  <div class="products_new">
    <div class="container">
      <div class="products_new_inner">
        <div class="products_new_salaried">
          <div class="products_new_salaried_head">
            <h5>Loans for Salaried</h5>
          </div>
          <div class="products_new_salaried_prod">
            <ul>
              <li>
                <a href="/personal-loans" title="Personal Loan" alt="Personal Loan">
                  <span class="products_icons"><i class="fa fa-handshake-o"></i></span>
                  <p>Personal Loan</p>
                </a>
              </li>
              <li>
                <a href="/home-loans-for-salaried" title="Home Loan" alt="Home Loan">
                  <span class="products_icons"><i class="fa fa-home"></i></span>
                  <p>Home Loan</p>
                </a>
              </li>
              <li>
                <a href="/loan-against-property-for-salaried" title="Loan Against Property" alt="Loan Against Property">
                  <span class="products_icons"><i class="fa fa-building-o"></i></span>
                  <p>Loan Against Property</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="products_new_selfEmp">
          <div class="products_new_selfEmp_head">
            <h5>Loans for Self-Employed</h5>
          </div>
          <div class="products_new_selfEmp_prod">
            <ul>
              <li>
                <a href="/business-loans" title="Business Loan" alt="Business Loan">
                  <span class="products_icons"><i class="fa fa-briefcase"></i></span>
                  <p>Business Loan</p>
                </a>
              </li>
              <li>
                <a href="/home-loans-for-self-employed" title="Home Loan" alt="Home Loan">
                  <span class="products_icons"><i class="fa fa-home"></i></span>
                  <p>Home Loan</p>
                </a>
              </li>
              <li>
                <a href="/loan-against-property-for-self-employed" title="Loan Against Property" alt="Loan Against Property">
                  <span class="products_icons"><i class="fa fa-building-o"></i></span>
                  <p>Loan Against Property</p>
                </a>
              </li>
              <li>
                <a href="/drop-line-overdraft" title="Dropline Overdraft" alt="Dropline Overdraft">
                  <span class="products_icons"><i class="fa fa-credit-card"></i></span>
                  <p>Dropline Overdraft</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="products_new_others">
          <div class="products_new_others_head">
            <h5>Others</h5>
          </div>
          <div class="products_new_others_prod">
            <ul>
              <li>
                <a href="/know-your-property">
                  <span class="products_icons"><i class="fa fa-search"></i></span>
                  <p>Know Your Property</p>
                </a>
              </li>
              <li>
                <a href="/balance-transfer">
                  <span class="products_icons"><i class="fa fa-refresh"></i></span>
                  <p>Balance Transfer</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div style="clear:both;"></div>
  
  <div class="padding50">
	<div class="container">
	<div class="row">
		<div class="col-lg-6 col-md-6 col-xs-12 lj_simpler_faster_img">
			<img src="@/assets/images/home1.jpg" title="" alt="" class="img-fluid">
		</div>
		<div class="col-lg-6 col-md-6 col-xs-12 lj_simpler_faster_txt">
			<div class="lj_simpler_faster_head">
				<h3 class="heading">LoansJagat made it simpler and faster.</h3>
				<p class="subheading">All loan solutions in one place</p>
			</div>
			
			<div class="row">
				<div class="col-lg-6 col-md-6 col-12">
					<div class="lj_simpler_faster_ulli_icon"><i class="fa fa-balance-scale"></i></div>
					<div class="lj_simpler_faster_ulli_points">
						
						<h5>Compare 250+ Plans</h5>
						<p>To save upto 20%</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-12">
					<div class="lj_simpler_faster_ulli_icon"><i class="fa fa-headphones"></i></div>
					<div class="lj_simpler_faster_ulli_points">
						<h5>24X7 Customer Service</h5>
						<p>+91-9876543210</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-12">
					<div class="lj_simpler_faster_ulli_icon"><i class="fa fa-line-chart"></i></div>
					<div class="lj_simpler_faster_ulli_points">
						<h5>Over 1500 Crore</h5>
						<p>Loan Disbursed</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-12">
					<div class="lj_simpler_faster_ulli_icon"><i class="fa fa-university"></i></div>
					<div class="lj_simpler_faster_ulli_points">
						<h5>40+ Bank Associations</h5>
						<p>Compare &amp; apply on best interest rates</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-12">
					<div class="lj_simpler_faster_ulli_icon"><i class="fa fa-users"></i></div>
					<div class="lj_simpler_faster_ulli_points">
						<h5>10000 Happy Clients</h5>
						<p>Winning hearts of Banks &amp; NBFCs</p>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-12">
					<div class="lj_simpler_faster_ulli_icon"><i class="fa fa-trophy"></i></div>
					<div class="lj_simpler_faster_ulli_points">
						<h5>40+ Awards</h5>
						<p>Winning hearts of Banks &amp; NBFCs</p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	</div>
</div>
  
  <div style="clear:both;"></div>
  
  <div class="how_it_works padding90">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 how_it_works_head">
				<h3 class="heading">How it Work?</h3>
				<p class="subheading">Follow our easy, step by step process.</p>
			</div>
		</div>
		<div class="row how_it_works_inner">
			<div class="col-lg-4 col-md-4 col-12 how_it_works_content">
				<figure>
					<svg height="120" viewBox="0 0 64 64" width="100%" xmlns="http://www.w3.org/2000/svg"><g id="Application"><path d="m25 44h14v2h-14z"/><path d="m21 44h2v2h-2z"/><path d="m61 6h-14v-1a3.009 3.009 0 0 0 -3-3h-24a3.009 3.009 0 0 0 -3 3v4h-14a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h14v2a5 5 0 0 0 -5 5v4.09l2 20.95v5.96a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-5.68l3.72-5.32h2.28a3.009 3.009 0 0 0 3-3v-1h1a3.985 3.985 0 0 0 2.62-7 3.951 3.951 0 0 0 0-6 3.951 3.951 0 0 0 0-6 3.985 3.985 0 0 0 -2.62-7h-1v-2h14a1 1 0 0 0 1-1v-10a1 1 0 0 0 -1-1zm-21.28-2-.31 1.24a1 1 0 0 1 -.97.76h-12.88a1 1 0 0 1 -.97-.76l-.31-1.24zm-35.72 17v-10h18v10zm32 39h-20v-4h20zm.48-6h-20.57l-1.91-20v-4a3.009 3.009 0 0 1 3-3h7a3 3 0 0 1 0 6h-6a1 1 0 0 0 -1 1v13a3.009 3.009 0 0 0 3 3h19.28zm8.52-7a1 1 0 0 1 -1 1h-24a1 1 0 0 1 -1-1v-12h5a5 5 0 0 0 0-10h-5v-2h4a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1h-4v-4a1 1 0 0 1 1-1h2.22l.43 1.73a3 3 0 0 0 2.91 2.27h12.88a3 3 0 0 0 2.91-2.27l.43-1.73h2.22a1 1 0 0 1 1 1v1h-2a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h2v2h-1a3.985 3.985 0 0 0 -2.62 7 3.951 3.951 0 0 0 0 6 3.951 3.951 0 0 0 0 6 3.985 3.985 0 0 0 2.62 7h1zm3-3h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4zm0-6h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4zm0-6h-4a2 2 0 0 1 0-4h4a2 2 0 0 1 0 4zm0-10a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4zm12-6h-16v-8h16z"/><path d="m6 13h2v2h-2z"/><path d="m10 13h10v2h-10z"/><path d="m6 17h14v2h-14z"/><path d="m46 11h4v2h-4z"/><path d="m52 11h6v2h-6z"/></g></svg>
				</figure>
				<div style="clear:both;"></div>
				<h3>Quick & easy online forms</h3>
				<p>Fill up a basic form with your profile details. Fill your online banking details & we will process your application within minutes.</p>
			</div>
			<div class="col-lg-4 col-md-4 col-12 how_it_works_content">
				<figure>
					<svg id="outline" height="120" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m152 88h80v16h-80z"/><path d="m112 88h16v16h-16z"/><path d="m144 136h88v16h-88z"/><path d="m72 136h48v16h-48z"/><path d="m208 184h120v16h-120z"/><path d="m120 184h64v16h-64z"/><path d="m72 184h32v16h-32z"/><path d="m184 240h112v16h-112z"/><path d="m72 240h88v16h-88z"/><path d="m160 296h96v16h-96z"/><path d="m72 296h64v16h-64z"/><path d="m72 352h40v16h-40z"/><path d="m491.96924 105.05371-56-32a7.99969 7.99969 0 0 0 -10.99219 3.11529l-144 264 .00855.00488a7.98314 7.98314 0 0 0 -.9856 3.82612v64h-208v16h216a7.99971 7.99971 0 0 0 4.6499-1.49023l56-40a7.97571 7.97571 0 0 0 2.36011-2.68555l.01294.00683 144-264a8.00061 8.00061 0 0 0 -3.05371-10.77734zm-151.08472 259.95166-13.32352-7.61377 92.87866-171.926 14.009 8.00512zm-42.10547-24.06055 93.56421-171.53418 14.2002 8.11426-92.87854 171.92627zm101.22754-185.584 9.44556-17.31665 42.10547 24.0603-9.44532 17.31665zm-104.00659 245.09328v-42.66894l33.187 18.96384zm163.22119-252.39941-42.10571-24.06031 18.00024-33.00024 42.10547 24.06055z"/><path d="m136 352h64v16h-64z"/><path d="m224 352h32v16h-32z"/><path d="m384 456a24.0275 24.0275 0 0 1 -24 24h-304a24.0275 24.0275 0 0 1 -24-24v-400a24.0275 24.0275 0 0 1 24-24h202.74512a24.20388 24.20388 0 0 1 5.25488.58081v79.41919a40.04552 40.04552 0 0 0 40 40h24v-16h-24a24.02718 24.02718 0 0 1 -24-24v-68.68555l82.51562 82.51465 11.31348-11.31445-86.79931-86.79785a39.734 39.734 0 0 0 -28.28467-11.7168h-202.74512a40.04552 40.04552 0 0 0 -40 40v400a40.04552 40.04552 0 0 0 40 40h304a40.04552 40.04552 0 0 0 40-40v-96h-16z"/></svg>
				</figure>
				<div style="clear:both;"></div>
				<h3>Submit minimum documents</h3>
				<p>Upload your KYC documents in a few clicks. Our team will then do the final verification at your doorstep.</p>
			</div>
			<div class="col-lg-4 col-md-4 col-12 how_it_works_content">
				<figure>
					<svg id="Capa_1" enable-background="new 0 0 512 512" height="120" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg"><g><path d="m143.598 291.891c0 4.142 3.357 7.5 7.5 7.5h47.156c-3.149 9.044-11.71 15.551-21.758 15.551h-15.572c-4.74 0-8.965 2.652-11.027 6.921-2.061 4.269-1.51 9.226 1.439 12.938l45.789 57.642c1.481 1.864 3.669 2.836 5.878 2.836 1.635 0 3.281-.532 4.66-1.628 3.243-2.576 3.784-7.295 1.208-10.538l-42.237-53.17h9.862c18.373 0 33.745-13.14 37.284-30.551h13.144c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-12.965c-1.004-5.642-3.287-10.944-6.721-15.551h19.687c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5l-75.826-.001c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h16.176l.019.001h10.134c5.906.005 11.458 2.306 15.635 6.482 2.579 2.578 4.437 5.683 5.487 9.07h-47.452c-4.143-.002-7.5 3.356-7.5 7.498z"/><path d="m507.753 441.444-36.352-62.963c-2.071-3.588-6.66-4.817-10.245-2.745-3.587 2.071-4.816 6.658-2.745 10.245l36.352 62.962c4.616 7.997 1.866 18.259-6.13 22.876-7.996 4.615-18.259 1.867-22.875-6.13l-65.478-113.41c-2.236-3.874-2.83-8.386-1.673-12.707 1.158-4.32 3.929-7.932 7.803-10.168 3.872-2.236 8.383-2.832 12.707-1.673 4.32 1.158 7.932 3.929 10.168 7.802l11.625 20.137c2.07 3.588 6.656 4.816 10.245 2.745 3.587-2.071 4.816-6.658 2.745-10.245l-11.625-20.137c-4.239-7.344-11.086-12.597-19.277-14.791-8.192-2.194-16.745-1.069-24.089 3.171-7.344 4.239-12.597 11.085-14.791 19.276-2.195 8.191-1.069 16.746 3.171 24.089l9.99 17.303h-19.377c-1.654-27.176-23.208-70.761-64.157-129.676-21.108-30.369-42.396-57.539-54.126-72.138 7.276-2.04 13.321-7.041 16.75-13.62 16.919 2.088 30.405 18.16 35.447 34.353 1.025 3.286 1.942 6.61 2.914 10.129 3.738 13.547 7.605 27.556 17.637 38.634 1.48 1.635 3.518 2.465 5.562 2.465 1.796 0 3.597-.641 5.032-1.941 3.07-2.78 3.306-7.524.525-10.594-7.64-8.436-10.874-20.152-14.297-32.555-.961-3.482-1.955-7.082-3.052-10.6-3.823-12.281-10.949-23.521-20.065-31.65-8.064-7.192-17.172-11.585-26.742-12.98-.362-4.395-1.773-8.496-3.987-12.05 10.877-6.579 21.182-7.592 31.319-3.082 4.55 2.028 8.865 5.137 13.435 8.43 7.631 5.498 15.522 11.184 25.756 12.79.395.062.786.092 1.172.092 3.63 0 6.82-2.64 7.401-6.339.643-4.092-2.154-7.93-6.246-8.572-6.697-1.051-12.825-5.467-19.314-10.142-4.983-3.591-10.137-7.304-16.1-9.962-15.874-7.064-32.748-4.809-49.072 6.471-2.362-1.097-4.906-1.865-7.576-2.242 3.997-4.743 7.745-10.05 11.135-15.811 1.909-3.252 3.62-6.502 5.085-9.659 1.744-3.757.111-8.217-3.646-9.961-3.756-1.743-8.216-.111-9.96 3.646-1.264 2.723-2.749 5.542-4.411 8.374-5.549 9.431-12.095 17.375-19.033 23.138h-18.382c.927-3.308 1.801-6.861 2.613-10.659 1.64-7.686 2.757-15.082 3.32-21.985.338-4.129-2.735-7.749-6.864-8.086-4.119-.345-7.747 2.736-8.085 6.864-.513 6.263-1.535 13.018-3.041 20.075-1.082 5.066-2.306 9.734-3.601 13.79h-24.472c-1.286-4.028-2.509-8.695-3.597-13.789-1.512-7.084-2.53-13.835-3.028-20.064-.331-4.129-3.93-7.208-8.075-6.878-4.129.331-7.208 3.945-6.878 8.074.551 6.877 1.665 14.278 3.313 22 .814 3.809 1.687 7.36 2.61 10.656h-18.39c-6.939-5.764-13.484-13.708-19.03-23.135-13.692-23.296-13.385-42.245.891-54.802 4.918-4.333 12.593-9.394 22.406-3.373 9.494 5.815 20.53 6.114 29.521.803 8.017-4.732 16.96-4.738 24.983-.001 8.99 5.31 20.03 5.011 29.539-.805 4.692-2.882 12.124-5.666 22.398 3.374 5.428 4.784 8.876 10.52 10.25 17.049.853 4.054 4.828 6.647 8.883 5.795 4.054-.853 6.649-4.83 5.795-8.884-2.054-9.762-7.104-18.245-15.015-25.217-12.756-11.223-27.017-12.965-40.147-4.907-4.755 2.907-9.884 3.154-14.074.68-6.352-3.751-13.118-5.652-20.114-5.652-7 0-13.771 1.901-20.124 5.652-4.19 2.474-9.313 2.229-14.053-.675-13.147-8.067-27.41-6.326-40.157 4.901-9.265 8.15-14.74 18.729-15.831 30.595-1.204 13.074 2.807 27.564 11.921 43.071 3.387 5.758 7.134 11.063 11.131 15.805-13.156 1.861-23.309 13.189-23.309 26.85 0 12.42 8.394 22.91 19.805 26.112-7.201 8.96-17.991 22.637-30.076 38.82-2.479 3.319-1.798 8.019 1.521 10.497 1.348 1.006 2.922 1.491 4.483 1.491 2.285 0 4.542-1.041 6.015-3.013 16.914-22.648 31.236-40.305 36.557-46.784h104.227c7.683 9.358 34.127 42.025 60.306 79.69 47.701 68.63 60.085 103.549 61.455 121.115h-94.667c-17.502 0-31.741 14.243-31.741 31.751 0 9.712 4.389 18.414 11.282 24.241-6.896 5.828-11.286 14.533-11.286 24.248 0 6.142 1.759 11.878 4.791 16.742h-140.685c-18.824 0-40.569-11.612-53.771-23.119-14.512-12.648-31.811-35.158-31.811-70.551 0-16.778 11.209-52.732 64.608-128.741 2.381-3.39 1.564-8.068-1.825-10.448-3.391-2.381-8.068-1.564-10.448 1.825-44.68 63.598-67.335 109.814-67.335 137.364 0 41.033 20.096 67.164 36.955 81.861 18.685 16.287 43.66 26.812 63.627 26.812l298.591.003c17.504 0 31.746-14.241 31.746-31.746 0-9.714-4.39-18.419-11.286-24.247 2.325-1.965 4.363-4.255 6.046-6.803l27.088 46.919c5.873 10.173 16.566 15.867 27.546 15.867 5.382 0 10.833-1.368 15.82-4.247 15.159-8.752 20.372-28.206 11.62-43.366zm-394.162-292.29c0-6.685 5.439-12.123 12.123-12.123h126.592c6.685 0 12.123 5.439 12.123 12.123 0 6.685-5.439 12.123-12.123 12.123h-126.592c-6.684 0-12.123-5.439-12.123-12.123zm302.327 308.167c0 9.234-7.512 16.745-16.745 16.745h-121.67c-.023 0-.045-.003-.068-.003h-9.285c-9.202-.037-16.679-7.531-16.679-16.742 0-9.235 7.512-16.747 16.745-16.747h130.954c9.236 0 16.748 7.513 16.748 16.747zm-16.748-31.747h-130.954c-9.232 0-16.742-7.51-16.742-16.742 0-9.236 7.51-16.75 16.741-16.75h130.953c2.791 0 5.498.693 7.926 2l8.8 15.242c-.264 9.002-7.654 16.25-16.724 16.25z"/></g></svg>
				</figure>
				<div style="clear:both;"></div>
				<h3>Funds sent fast</h3>
				<p>Voila! Within four hours you will receive funds. It’s as easy as ordering a pizza.</p>
			</div>
		</div>
	</div>
</div>
  
  <div style="clear:both;"></div>
  
  
    
  <div class="whyChooseLJMain padding50">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 whyChooseLJHead">
					<h3 class="heading">Why Choose LoansJagat?</h3>
				</div>
			</div>
			<div class="row whyChooseLJInner">
				
				<div class="col-lg-4 col-sm-6 col-12 whyChooseLJContent">
					<figure><img src="@/assets/images/why-choose-loansjagat1.jpg" alt="Why Choose LoansJagat"></figure>
					<h5>Experienced Loan Advisors</h5>
					<p>15 years of experienced mortgage professionals handling your case since the inception of same financial product in India, 2002</p>
				</div>
			
				<div class="col-lg-4 col-sm-6 col-12 whyChooseLJContent">
					<figure><img src="@/assets/images/why-choose-loansjagat2.jpg" alt="Why Choose LoansJagat"></figure>
					<h5>Tech Friendly</h5>
					<p>Our process systems are Tech driven to provide quality support to all our customers.</p>
				</div>
			
				<div class="col-lg-4 col-sm-6 col-12 whyChooseLJContent">
					<figure><img src="@/assets/images/why-choose-loansjagat3.jpg" alt="Why Choose LoansJagat"></figure>
					<h5>One Loan Professional</h5>
					<p>Dedicated one loan professional will be assigned to your financial  project</p>
				</div>
			
				<div class="col-lg-4 col-sm-6 col-12 whyChooseLJContent">
					<figure><img src="@/assets/images/why-choose-loansjagat4.jpg" alt="Why Choose LoansJagat"></figure>
					<h5>Data Security</h5>
					<p>We care about your all personal and financial information and hence are kept secured in our encrypted systems.</p>
				</div>
			
				<div class="col-lg-4 col-sm-6 col-12 whyChooseLJContent">
					<figure><img src="@/assets/images/why-choose-loansjagat5.jpg" alt="Why Choose LoansJagat"></figure>
					<h5>Customer Convenient Contactability</h5>
					<p>We respect your life priorities, hence we always contact you at your convenient provided time slot.</p>
				</div>
			
				<div class="col-lg-4 col-sm-6 col-12 whyChooseLJContent">
					<figure><img src="@/assets/images/why-choose-loansjagat6.jpg" alt="Why Choose LoansJagat"></figure>
					<h5>Associations<span class="hidden-lg visible-xs">with 40+ Banks &amp; NBFCs</span></h5>
					<p>Tie -ups with more than 40+ Banks &amp; NBFCs</p>
				</div>
				
			</div>
		</div>
	</div>
  <div style="clear:both;"></div>
  
  
  
  <div class="testimonials_new padding50">
    <div class="container">
      <div class="testimonials_new_head">
        <h3 class="heading">Customer Reviews</h3>
        <p class="subheading">What our customer say...</p>
      </div>
      <div style="clear:both;"></div>
      <div class="row">
        <div class="col-sm-12">
          <div id="customers-testimonials" class="owl-carousel">

            <div class="item">
              <div class="shadow-effect">
              <img class="img-circle" src="@/assets/images/pooja-bharti.png" alt="">
              <p>My sister’s wedding was near and I had to run to several branches to get a personal loan. I then came across LoansJagat. They simplified my life and gave me the choices where I picked the loan with a minimum interest rate. The best thing is I did not have to go anywhere.</p>
              </div>
              <div class="testimonial-name btn btn-md btn-primary">Pooja Bharti</div>
            </div>

            <div class="item">
              <div class="shadow-effect">
              <img class="img-circle" src="@/assets/images/vishal-bhardwaj.png" alt="">
              <p>I was searching for a personal loan and has applied using a DSA, got no status for weeks. It was then someone suggested LoansJagat. Surprisingly now I was able to choose from the top lenders and the LoansJagat team was also very helpful. Thank you for the help.</p>
              </div>
              <div class="testimonial-name btn btn-md btn-primary">Vishal Bhardwaj</div>
            </div>

            <div class="item">
              <div class="shadow-effect">
              <img class="img-circle" src="@/assets/images/nila-chandra.png" alt="">
              <p>I run a small grocery shop in Delhi and every time I applied for a Personal Loan, approvals never came as they kept asking for documents. LoansJagat was very transparent and I was made clear on what is needed and I got my loan approved online. I would recommend everyone to choose LoansJagat.</p>
              </div>
              <div class="testimonial-name btn btn-md btn-primary">Nila Chandra</div>
            </div>

            <div class="item">
              <div class="shadow-effect">
              <img class="img-circle" src="@/assets/images/akash-katiyar.png" alt="">
              <p>Last Year when I needed a Personal Loan, I applied through friend’s DSA the interest rate asked was too high and that is when I decided to check for options. While searching online I came across LoansJagat and not just the rate was much less but I also got to choose from the lenders who wanted to give me a personal loan. </p>
              </div>
              <div class="testimonial-name btn btn-md btn-primary">Akash Katiyar</div>
            </div>

            <div class="item">
              <div class="shadow-effect">
              <img class="img-circle" src="@/assets/images/abid-usmani.png" alt="">
              <p>I recommend everyone to get their Personal Loan from LoansJagat as they do not just offer complete transparency but we also get to choose from many Banks, which helped me to get the cheapest loan and I am sure everyone can get this benefit.</p>
              </div>
              <div class="testimonial-name btn btn-md btn-primary">Abid Usmani</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div style="clear:both;"></div>

	<div class="our_lenders padding50" id="client-logos">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 our_lenders_head">
					<h3 class="heading">Our Lenders</h3>
					<p class="subheading">Leading insurers for your financial freedom</p>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox adityaBirla"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox aufinance"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox axisBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox bajajFinserv"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox capitalFloat"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox capriGlobal"></span>
				</div>	
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox clxx"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox dcbBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox deutscheBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox dhflBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox edelweiss"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox federalBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox fullertonIndia"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox grihashakti"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox hdbBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox hdfcBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox hdfcLtd"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox heroFinCorp"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox heroHousing"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox iciciBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox idfcFirst"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox iiflBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox indiabulls"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox indostar"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox kotakBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox piramalCapital"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox pnbHousing"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox relianceBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox rblBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox sbiHomeLoan"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox shriramCity"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox standardCharteredBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox tataCapital"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox tataHousing"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox yesBank"></span>
				</div>
				<div class="col-lg-2 col-sm-3 col-4 lenders_logo">
					<span class="listBox zipLoan"></span>
				</div>
				 
			</div>	
		</div>		
	</div>			
  
  <div style="clear:both;"></div>
  
  <div class="official_blogs padding50">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 official_blogs_head">
					<h3 class="heading">Official Blogs</h3>
					<p class="subheading">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
				</div>
			</div>
			<div class="row official_blogs_row">
				<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 official_blogs_inner">
					<a href="#">
						<div class="official_blogs_inner_img">
							<img src="@/assets/images/blog1.jpg" alt="" title="">
						</div>
						<div class="official_blogs_inner_txt">
							<h4>How to verify Indian Property &amp; Land Records online?</h4>
							<p>When it comes to buying a property, one ought to alert and check the property and land records. Indian real estate industry use to involve......</p>
						</div>
						<div style="clear:both;"></div>
					</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 official_blogs_inner">
					<a href="#">
						<div class="official_blogs_inner_img">
							<img src="@/assets/images/blog2.jpg" alt="" title="">
						</div>
						<div class="official_blogs_inner_txt">
							<h4>Celebrate Holi with Lowest Interest Rate and Great Offers on Loans</h4>
							<p>When it comes to buying a property, one ought to alert and check the property and land records. Indian real estate industry use to involve......</p>
						</div>
						<div style="clear:both;"></div>
					</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 official_blogs_inner">
					<a href="#">
					<div class="official_blogs_inner_img">
						<img src="@/assets/images/blog3.jpg" alt="" title="">
					</div>
					<div class="official_blogs_inner_txt">
						<h4>Pradhan Mantri Awas Yojna: Housing for All</h4>
						<p>When it comes to buying a property, one ought to alert and check the property and land records. Indian real estate industry use to involve......</p>
					</div>
					<div style="clear:both;"></div>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 official_blogs_viewall">
					<a href="" class="btn btn-md btn-primary">View All</a>
				</div>
			</div>
		</div>
	</div>
  
  <div style="clear:both;"></div>
  
  <div class="newsletter">
    <div class="container">
      <h5>Subscribe Now</h5>
      <div class="newsletter_inner">
		  <div class="alert alert-success" role="alert" v-show="subscribe_succs">
  User successfully Subscribed.
</div>
<div class="alert alert-danger" role="alert" v-show="error">
  <span v-html="error_msg">This is a danger alert—check it out!</span>
</div>
        <input type="text" id="subscribe_email" v-model="subscribe_email" placeholder="Enter Your Email ID"><input type="submit" @click="createSubscribe">
      </div>
	  
    </div>
	
  </div>
    <app-footer></app-footer>

</div>
</template>
<style scoped>
.quick_apply_input_error {
    width: 100%;
    border: 0;
    border-bottom: 1px solid red !important;
    padding: 8px 0 8px 34px;
    box-sizing: border-box;
    outline: 0;
    font-size: 13px;
}
.newsletter_inner_error {
    border-color: #dc3545 !important;
}
</style>
<script src = "./Index.js"></script> 


