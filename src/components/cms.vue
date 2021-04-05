<template>
    <div>
          <app-header></app-header>

        <div class="formMainDiv">
		<div class="container">
			<div class="formBreadcrum">
				<ul>
					<li><a href="/">Home</a></li>
					<li>>></li>
					<li v-html="bredcrumb">Personal Loan</li>
				</ul>
			</div>
			<div class="row formInnerDiv" v-show="is_form">
				
				<div class="col-lg-12 col-md-12 col-sm-12 col-12 formInnerRight">
					<div class="formInnerRightHead">
						<h2>Compare &amp; Apply for <span v-html="form_name">Personal Loan </span> </h2>
					</div>
				
<div>
    <form id="contact-form" method="post" action="contact.php" role="form">
        <div class="messages"></div>
        <div class="controls">
            <div class="row">
                <div class="col-md-12">
                    <div class="moving-tab" style="width: 570px; transform: translate3d(-8px, 0px, 0px); transition: transform 0s ease 0s;">Personal Details</div>
                </div>
            </div>
            <div class="row" style="padding-top:90px;">
                <div class="col-md-12">
                    &nbsp;
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="form_name">Name *</label>
                        <input id="form_name" type="text" name="surname" class="form-control" placeholder="Please enter your name *" required="required" data-error="name is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="form_email">Email *</label>
                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="form_phone">Phone</label>
                        <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone number">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="form_message">Message *</label>
                    <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="send a message."></textarea>
                    <div class="help-block with-errors"></div>
                </div>
            </div>
            <div class="col-md-12 pt-4" style="padding-bottom:10px !important">
                <input type="submit" class="btn btn-warning btn-send" value="Send message">
            </div>
        </div>
        
    </form>
</div>
    
				</div>
			</div>
		</div>
		<div style="clear:both;"></div>

	<div class="contentMainDiv">
		<div class="contentHeading">
			<h1 v-html="page_title">Instant Personal Loan Online Apply</h1>
		</div>
		<!-- <div class="contentTabDiv" id="contentTabDivID">
			<div class="container">
				<div class="contentInnerTabDiv">
					<ul>
						<li class="active"><a href="#">Overview</a></li>
						<li><a href="#documentID">Documents</a></li>
						<li><a href="#eligibilityID" id="">Eligibility</a></li>
						<li><a href="#faqID" id="">FAQs</a></li>
						<li><a href="#loan_cycle" id="">Loan Cycle</a></li>
						<li><a href="#do_you_know" id="">Do You Know?</a></li>
						<li class="apply_now"><a href="#" id="apply_now_fix">APPLY NOW</a></li>
					</ul>
				</div>
			</div>
		</div> -->
		<div class="contentInnerDiv padding50">
			<div class="container" v-html="response_html_data">
			</div>
		</div>
	</div>
        </div>
            <app-footer></app-footer>
    </div>
</template>
<script src = "./cms.js"></script> 
<style scoped>
.moving-tab {
    position: absolute;
    text-align: center;
    padding: 12px;
    font-size: 16px;
    text-transform: uppercase;
    -webkit-font-smoothing: subpixel-antialiased;
    background-color: #006b9e;
    top: -4px;
    left: -33px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 16px 26px -10px rgba(0,107,158,.25), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(76,175,80,.2);
}
</style>
