<template>
<div>
	
	<div class="navbar navbar-expand-md navbar-light" role="navigation">
		<div class="row container">
			<div class="col-lg-3 col-md-3 col-12">
			<a class="navbar-brand" href="/"><img src="@/assets/images/logo-black.png" alt="Logo"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			</div>
			<div class="col-lg-9 col-md-9 col-12">
				<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="nav navbar-nav navbar-right">
					<li class="nav-item active">
						<router-link to="/" class="nav-link" title="Home">Home</router-link>
					</li>
					<li class="nav-item">
						 <router-link class="nav-link" to="/about-us">About Us</router-link> 
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Loan Products</a>
						<ul class="dropdown-menu" aria-labelledby="dropdown1">
							<li class="dropdown-item dropdown">
								<a class="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Salaried</a>
								<ul class="dropdown-menu" aria-labelledby="dropdown1-1">

									<li class="dropdown-item"><a @click="redirectPage('personal-loans')" href="/personal-loans" title="Apply Personal Loan Online">Personal Loan</a></li>
									<li class="dropdown-item"><a @click="redirectPage('home-loans-for-salaried')" href="/home-loans-for-salaried" title="Apply Home Loan For Salaried Online">Home Loans</a></li>
									<li class="dropdown-item"><a @click="redirectPage('loan-against-property-for-salaried')" href="/loan-against-property-for-salaried" title="Apply Loan Agaisnt Property For Salaried Online">Loan Against Property</a></li>
								</ul>
							</li>
							<li class="dropdown-item dropdown">
								<a class="dropdown-toggle" id="dropdown1-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Self-Employed</a>
								<ul class="dropdown-menu" aria-labelledby="dropdown1-2">
									<li class="dropdown-item-1"><a @click="redirectPage('business-loans')" href="/business-loans">Business Loan</a></li>
									<li class="dropdown-item"><a @click="redirectPage('drop-line-overdraft')" href="/drop-line-overdraft">Dropline Overdraft</a></li>
									<li class="dropdown-item"><a @click="redirectPage('loan-against-property-for-self-employed')" href="/loan-against-property-for-self-employed" title="Apply Loan Against Property For Self Employed Online">Loan Against Property</a></li>
									<li class="dropdown-item"><a @click="redirectPage('home-loans-for-self-employed')" href="/home-loans-for-self-employed" title="Apply Home Loan For Self Employed Online">Home Loans</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<router-link to="/know-your-property" class="nav-link"  title="Apply Know Your Property Online">Know Your Property</router-link>
					</li>
					<li class="nav-item"> 
						<a @click="redirectPage('balance-transfer')" class="nav-link" href="/balance-transfer">Balance Transfer</a>

					</li>
					<li class="nav-item">
						<router-link to="/contact-us" class="nav-link"  title="Contact Us">Contact Us</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/login" class="nav-link loginbtn" title="Login">Login</router-link>
					</li>
				</ul>
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>
<script>

export default {
	methods:{
		redirectPage(pageName){
			window.location.href = pageName
		}
	},
	mounted() {
		$('.navbar .dropdown-item').on('click', function (e) {
			var $el = $(this).children('.dropdown-toggle');
			var $parent = $el.offsetParent(".dropdown-menu");
			$(this).parent("li").toggleClass('open');
	
			if (!$parent.parent().hasClass('navbar-nav')) {
				if ($parent.hasClass('show')) {
					$parent.removeClass('show');
					$el.next().removeClass('show');
					$el.next().css({"top": -999, "left": -999});
				} else {
					$parent.parent().find('.show').removeClass('show');
					$parent.addClass('show');
					$el.next().addClass('show');
					$el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
				}
				e.preventDefault();
				e.stopPropagation();
			}
		});
		$('.navbar .dropdown').on('hidden.bs.dropdown', function () {
			$(this).find('li.dropdown').removeClass('show open');
			$(this).find('ul.dropdown-menu').removeClass('show open');
		});
	},
}
</script>