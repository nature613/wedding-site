<template>
	<div id="wedding">
		<h2 class="display-3">Wedding Celebration Details</h2>
		<p>Details about our celebration is behind each category. Click through for more details, as David + Dacia has worked to make sure we provide all the information you need for our event.</p>

		<div class="row">
			<div id="wedding-category" class="col-xl-12">
				<div>
					<h2 @click="showWhenInfo = !showWhenInfo" class="col-lg-2">
						<i class="fal fa-calendar"></i>
						<span>When &amp; Where</span>
					</h2>
					<h2 @click="showTimeInfo = !showTimeInfo" class="col-lg-2">
						<i class="fal fa-clock"></i>
						<span>Time</span>
					</h2>
					<h2 @click="showParkingInfo = !showParkingInfo" class="col-lg-2">
						<i class="fab fa-product-hunt"></i>
						<span>Parking</span>
					</h2>
					<h2 @click="showReserveInfo = !showReserveInfo" class="col-lg-2">
						<i class="fal fa-envelope"></i>
						<span>RSVP</span>
					</h2>
					<h2 @click="showAttireInfo = !showAttireInfo" class="col-lg-2">
						<i class="fal fa-venus-mars"></i>
						<span>Attire</span>
					</h2>
					<h2 @click="showPartyInfo = !showPartyInfo" class="col-lg-2">
						<i class="fal fa-heart"></i>
						<span>The Celebration</span>
					</h2>
					<h2 @click="showFoodInfo = !showFoodInfo" class="col-lg-2">
						<i class="fal fa-utensils"></i>
						<span>Food &amp; Drinks</span>
					</h2>
					<h2 @click="showChildrenInfo = !showChildrenInfo" class="col-lg-2">
						<i class="fal fa-gamepad"></i>
						<span>Children</span>
					</h2>
					<h2 @click="showGuestsInfo = !showGuestsInfo" class="col-lg-2">
						<i class="fal fa-plus"></i>
						<span>Plus Ones</span>
					</h2>
					<h2 @click="showRegistryInfo = !showRegistryInfo" class="col-lg-2">
						<i class="fa fa-exclamation-triangle"></i>
						<span>Gifts/Registry</span>
					</h2>
					<h2 @click="showSocialInfo = !showSocialInfo" class="col-lg-2">
						<i class="fab fa-slack-hash"></i>
						<span>Social Media</span>
					</h2>
					<h2 @click="showStreamInfo = !showStreamInfo" class="col-lg-2">
						<i class="fa fa-exclamation-triangle"></i>
						<span>Live Streaming</span>
					</h2>
				</div>
			</div>

			<div id="wedding-info" class="col-xl-12">
				<b-card variant="default" type="default" align="left" :class="[ showWhenInfo === true ? 'active' : '' ]">
					<p class="card-text">Our wedding celebration is on</p>
					<h3>Saturday<br />November 3<sup>rd</sup>, 2018</h3>
					<p class="card-text">Held at the</p>
					<h3><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank">Chicago Sports Museum</a></h3>
					<address class="card-text">
						Water Tower Place<br>
						835 North Michigan Avenue<br>
						Chicago, IL 60611
					</address>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showTimeInfo === true ? 'active' : '' ]">
					<p class="card-text">The doors open at <span class="nowrap">4:30 p.m.</span> <em>Entry will not be allowed after <span class="nowrap">5:15 p.m.</span></em>, as the main event starts promptly at <em class="nowrap">5:30 p.m.</em> Entry will resume after the main event is completed.</p>

					<p class="card-text">The wedding celebration should last until <span class="nowrap">10 p.m.</span>, with a special moment around 9:30 pm</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showParkingInfo === true ? 'active' : '' ]">
					<p class="card-text"><em>Valet Parking:</em> Available from 5 p.m. &ndash; 11 p.m. | Enter on Pearson ($16 for 3 hours or less with restaurant validation).</p>
					<p class="card-text"><em>Self Parking:</em> Available in the Water Tower Place garage located at 845 N. Michigan | Enter on Chestnut</p>
					<ul>
						<li>Before 5 p.m.: Regular rates apply.</li>
						<li>After 5 p.m.: $12 for up to 5 hours with restaurant validation.</li>
					</ul>
					<p class="card-text">If you would like, please use our code for a discounted ride via Lyft.</p>

					<p class="card-text">Download <a href="https://www.waze.com/get" class="card-link">Waze</a> for the best route to the venue.</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showReserveInfo === true ? 'active' : '' ]">
					<p class="card-text">We are excited to have you as our guest!!!</p>

					<p class="card-text">Please <router-link class="card-link" to="/rsvp">RSVP</router-link> by <em>Friday, September 14<sup>th</sup>, 2018</em>. It is very important that you RSVP by this date, so we can finalize our plans.</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showAttireInfo === true ? 'active' : '' ]">
					<p class="card-text">We were asked about colors for our wedding, with our theme being <em>"City Lights"</em>, no colors are off limits, except, metallics and the obvious, white. We are requesting <em>"Semiformal", "Festive" or "Dressy Casual"</em> attire for our event. We will be having a party, so have fun with your attire. No need to be stuffy! Suggestions:</p>

					<dl>
						<dt><em>Women</em></dt>
						<dd>A cocktail or party dress in a fun color, paired with playful accessories</dd>
						<dd>Dressy separates for instance long skirt with a top or a jazzy pants suit</dd>
					</dl>

					<dl>
						<dt><em>Men</em></dt>
						<dd>A suit and tie, jazzed up with a bright tie</dd>
						<dd>A sweater with a collar shirt and tie paired with slacks and fun socks</dd>
					</dl>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showPartyInfo === true ? 'active' : '' ]">
					<p class="card-text">Be prepared to have a great time! There will be plenty of dancing and entertainment. We'lll have comfy shoes for you to change out of, camera balls for photos, and YOU!!! Use our hashtag when posting videos and photos: <em>#DavidAndDacia</em>. We will also have a SnapChat filter. Do not hestitate to stream the event via Facebook live! Tag us in everything!!!</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showFoodInfo === true ? 'active' : '' ]">
					<p class="card-text">Dinner will be served buffet/station style with both <em>Ha&iuml;tian</em> and <em>American</em> courses. You can leave your beer money at home, the drinks are on us! We will have wine, liquor, beer, and non-alcoholic options as well. We just ask that you tip the bartenders.</p>

					<p class="card-text">The menu includes meat one, meat two, meat three, salad one, sides one, sides two, and sides three.</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showChildrenInfo === true ? 'active' : '' ]">
					<p class="card-text">Many of our friends and family members have children. We do not want you and your family to feel excluded; however, with the size of our guest list, we have chosen for our wedding day to be an adult only occasion. Hopefully, this will allow all guests, including parents, an evening of relaxation. We hope this advance notice means you are still able to share our big day and will enjoy having the evening off! Special circumstances are in place for Dacia + David's immediate nieces and nephews.</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showGuestsInfo === true ? 'active' : '' ]">
					<p class="card-text">For "Plus Ones", typically, our events are all inclusive, but we do have a guest limit. Your invitation should state the number of reserved seats for you and your guest(s). Don't worry, we feel like we know you and have made sure to seat you with others that you will have a great time with!</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showRegistryInfo === true ? 'active' : '' ]">
					<p class="card-text">We know that you want to be a blessing to us, and since we already have a beautiful home, we will not have a traditional registry. Instead, you can participate in the traditional <em>"Money Dance"</em> at the reception or contribute to our honeymoon fund via Google Wallet.</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showSocialInfo === true ? 'active' : '' ]">
					<p class="card-text">We are "socially-active", so please use our hashtag throughout the weekend, while traveling to and from Chicago, while doing any of the activities we shared, eating at any of the restaurants, and especially during our wedding celebration when posting messages, updates, videos, and photos.</p>
					<p class="card-text">SNAPCHAT</p>
				</b-card>

				<b-card variant="default" type="default" align="left" :class="[ showStreamInfo === true ? 'active' : '' ]">
					<p class="card-text">Can't make it to the wedding? No worries, we are live streaming it. Click the link below to view our wedding live! The celebration begins at 5:00 p.m. CST on November 3<sup>rd</sup>, 2018. Please log in 15 minutes prior to be sure your computer has the right software. If it does not, it will instruct you on how to to get the stream going. Once you're at the website, click the PLAY button and celebrate with us!!!</p>
				</b-card>
			</div>
		</div>
	</div>
</template>

<script>

	export default {

		data: function () {
			return {
				showWhenInfo: false,
				showTimeInfo: false,
				showParkingInfo: false,
				showReserveInfo: false,
				showAttireInfo: false,
				showPartyInfo: false,
				showFoodInfo: false,
				showChildrenInfo: false,
				showGuestsInfo: false,
				showRegistryInfo: false,
				showSocialInfo: false,
				showStreamInfo: false
			}
		}

	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	#wedding
		h2
			@include animation(1s fadeIn forwards)
			@include rem(margin-bottom, 15px)

	#wedding-category
		@include rem(padding, 0)
		background: $background3b

		h2
			@include rem(margin-bottom, 0)
			@include rem(padding, 5px)
			align-items: center
			display: flex
			flex-direction: column
			height: 120px
			justify-content: center
			text-align: center

			&:hover,
			&.active
				border: 2px solid $anchor-text2
				cursor: pointer

				i,
				.svg-inline--fa,
				span
					color: $anchor-text2

			i,
			.svg-inline--fa,
			span
				display: block
				text-align: center

			i,
			.svg-inline--fa
				@include rem(font-size, 32px)
				@include rem(margin, 0)
				display: inline-block

			span
				@include rem(font-size, 12px)
				@include rem(margin-top, 5px)

	#wedding-info
		@include animation(1s fadeIn forwards)
		@include rem(margin-top, 15px)
		@include rem(padding, 0)

		@include tablet
			@include rem(padding, 0 15px)

	.card
		@include rem(padding, 20px 0)
		display: none

		&.active
			display: block

		@include tablet-xlarge
			@include rem(margin, 0 auto 20px)
			@include rem(padding, 20px)

		.card-block
			@include rem(margin-bottom, 0)

			@include tablet-small
				@include rem(margin-bottom, 30px)

			&:last-of-type
				@include tablet-small
					@include rem(margin-bottom, 0)

		h3
			@include line-height(24)
			color: $text8
			font-family: $font-stack-serif
			font-size: 30px

		em
			@include black()
			color: $text8
			font-style: normal

</style>
