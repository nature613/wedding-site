<template>
	<div id="wedding">
		<h2 class="display-3">Wedding Celebration Details</h2>
		<p>Details about our celebration is behind each category. Click through for more details, as David + Dacia has worked to make sure we provide all the information you need for our event.</p>

		<div id="wedding-categories" class="ui clearing">
			<div class="ui grid">
				<div class="ui sixteen column row top attached tabular menu">
					<div class="active tab-title five wide computer four wide tablet four wide mobile column" data-tab="first">
						<i class="calendar outline icon"></i>
						<p>When &amp; Where</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="second">
						<i class="alarm outline icon"></i>
						<p>Time</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="third">
						<i class="product hunt icon"></i>
						<p>Parking</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="fourth">
						<i class="open envelope outline icon"></i>
						<p>RSVP</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="fifth">
						<i class="tag icon"></i>
						<p>Attire</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="sixth">
						<i class="empty heart icon"></i>
						<p>The Celebration</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="seventh">
						<i class="food icon"></i>
						<p>Food &amp; Drinks</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="eighth">
						<i class="child icon"></i>
						<p>Children</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="ninth">
						<i class="plus square outline icon"></i>
						<p>Plus Ones</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="tenth">
						<i class="gift icon"></i>
						<p>Gifts/Registry</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="eleventh">
						<i class="slack icon"></i>
						<p>Social Media</p>
					</div>
					<div class="tab-title five wide computer four wide tablet four wide mobile column" data-tab="twelfth">
						<i class="podcast icon"></i>
						<p>Live Streaming</p>
					</div>
				</div>

				<div class="ui bottom attached active tab segment" data-tab="first">
					<p>Our wedding celebration is on</p>
					<h2><em>Saturday, November 3<sup>rd</sup>, 2018</em></h2>
					<p>Held at the</p>
					<h2><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank">Chicago Sports Museum</a></h2>
					<address>
						Water Tower Place<br>
						835 North Michigan Avenue<br>
						Chicago, IL 60611
					</address>

					<a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897976,-87.6258027,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank" class="ui large image">
						<img src="../assets/chicago-sports-museum.jpg">
					</a>
				</div>
				<div class="ui bottom attached tab segment" data-tab="second">
					<p>The doors open at <span class="nowrap">4:30 p.m.</span> <em>Entry will not be allowed after <span class="nowrap">5:15 p.m.</span></em>, as the main event starts promptly at <em class="nowrap">5:30 p.m.</em> Entry will resume after the main event is completed.</p>

					<p>The wedding celebration should last until <span class="nowrap">10 p.m.</span>, with a special moment around 9:30 pm</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="third">
					<p><em>Valet Parking:</em> Available from 5 p.m. &ndash; 11 p.m. | Enter on Pearson ($16 for 3 hours or less with restaurant validation).</p>
					<p><em>Self Parking:</em> Available in the Water Tower Place garage located at 845 N. Michigan | Enter on Chestnut</p>
					<ul>
						<li>Before 5 p.m.: Regular rates apply.</li>
						<li>After 5 p.m.: $12 for up to 5 hours with restaurant validation.</li>
					</ul>
					<p>If you would like, please use our code for a discounted ride via Lyft.</p>

					<p>Download <a href="https://www.waze.com/get" class="card-link">Waze</a> for the best route to the venue.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="fourth">
					<p>We are excited to have you as our guest!!!</p>

					<p>Please <router-link class="card-link" to="/rsvp">RSVP</router-link> by <em>Friday, September 14<sup>th</sup>, 2018</em>. It is very important that you RSVP by this date, so we can finalize our plans.</p>

					<router-link class="button-link" to="/rsvp">RSVP</router-link>
				</div>
				<div class="ui bottom attached tab segment" data-tab="fifth">
					<p>We were asked about colors for our wedding, with our theme being <em>"City Lights"</em>, no colors are off limits, except, metallics and the obvious, white. We are requesting <em>"Semiformal", "Festive" or "Dressy Casual"</em> attire for our event. We will be having a party, so have fun with your attire. No need to be stuffy!<p>

					<p>Suggestions:</p>

					<dl>
						<dt><em>Women</em></dt>
						<dd><span><i class="small female icon"></i></span>A cocktail or party dress in a fun color, paired with playful accessories</dd>
						<dd><span><i class="small female icon"></i></span>Dressy separates for instance long skirt with a top or a jazzy pants suit</dd>
					</dl>

					<dl>
						<dt><em>Men</em></dt>
						<dd><span><i class="small male icon"></i></span>A suit and tie, jazzed up with a bright tie</dd>
						<dd><span><i class="small male icon"></i></span>A sweater with a collar shirt and tie paired with slacks and fun socks</dd>
					</dl>
				</div>
				<div class="ui bottom attached tab segment" data-tab="sixth">
					<p>Be prepared to have a great time! There will be plenty of dancing and entertainment. We'lll have comfy shoes for you to change out of, camera balls for photos, and YOU!!! Use our hashtag when posting videos and photos: <em>#DavidAndDacia</em>. We will also have a SnapChat filter. Do not hestitate to stream the event via Facebook live! Tag us in everything!!!</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="seventh">
					<p>Dinner will be served buffet/station style with both <em>Ha&iuml;tian</em> and <em>American</em> courses. You can leave your beer money at home, the drinks are on us! We will have wine, liquor, beer, and non-alcoholic options as well. We just ask that you tip the bartenders.</p>

					<p>The menu includes meat one, meat two, meat three, salad one, sides one, sides two, and sides three.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="eighth">
					<p>Many of our friends and family members have children. We do not want you and your family to feel excluded; however, with the size of our guest list, we have chosen for our wedding day to be an adult only occasion. Hopefully, this will allow all guests, including parents, an evening of relaxation. We hope this advance notice means you are still able to share our big day and will enjoy having the evening off! Special circumstances are in place for Dacia + David's immediate nieces and nephews.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="ninth">
					<p>For "Plus Ones", typically, our events are all inclusive, but we do have a guest limit. Your invitation should state the number of reserved seats for you and your guest(s). Don't worry, we feel like we know you and have made sure to seat you with others that you will have a great time with!</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="tenth">
					<p>We know that you want to be a blessing to us, and since we already have a beautiful home, we will not have a traditional registry. Instead, you can participate in the traditional <em>"Money Dance"</em> at the reception or contribute to our honeymoon fund via Google Wallet.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="eleventh">
					<p>We are "socially-active", so please use our hashtag throughout the weekend, while traveling to and from Chicago, while doing any of the activities we shared, eating at any of the restaurants, and especially during our wedding celebration when posting messages, updates, videos, and photos.</p>
					<p>SNAPCHAT</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="twelfth">
					<p>Can't make it to the wedding? No worries, we are live streaming it. Click the link below to view our wedding live! The celebration begins at 5:00 p.m. CST on November 3<sup>rd</sup>, 2018. Please log in 15 minutes prior to be sure your computer has the right software. If it does not, it will instruct you on how to to get the stream going. Once you're at the website, click the <em>PLAY</em> button and celebrate with us!!!</p>
				</div>
			</div>
			<div class="ui row">
				<div class="ui grid sixteen column"></div>
			</div>
		</div>

	</div>
</template>

<script>

	export default {
		mounted() {
			$('.tabular .tab-title').tab().transition({
				animation: 'pulse',
				reverse: true,
				interval: 200
			})
		}
	}

</script>

<style scoped lang="sass">

	#wedding
		@include rem(padding, 20px)
		background: $background3b
		width: 100%

		h2
			@include animation(1s fadeIn forwards)
			@include rem(margin-bottom, 15px)

			~ p
				max-width: 800px

	#wedding-categories
		@include rem(margin-top, 40px)

		.tabular
			@include rem(margin-bottom, 25px)
			@include rem(margin-right, 15px)
			float: left
			position: relative
			width: 45% !important
			z-index: 4

			@include tablet-small
				margin-bottom: 0
				margin-right: 0
				width: 100% !important

		.tab-title
			@include animation(1s fadeIn forwards)
			@include rem(padding, 10px 0 0)
			float: left
			height: 124px
			text-align: center

			i,
			p
				@include rem(font-size, 32px)
				color: $text
				margin: 0
				padding: 0

			i
				&.icon
					height: 1.2rem

			p
				@include rem(font-size, 11px)
				@include rem(margin-top, 11.5px)

				@include mobile-small
					@include rem(font-size, 9px)

			&:hover,
			&.active
				background: transparent
				cursor: pointer

				i,
				p
					color: $text7

		.ui.tab
			@include animation(1s fadeIn forwards)
			@include rem(padding, 20px 10px 20px 20px)
			float: right
			font-size: 21px
			min-height: 630px
			width: 50%

			@include tablet-small
				@include rem(padding, 10px 5px 10px 5px)
				min-height: 330px
				width: 100%

			h2
				font-size: 32px

			em
				color: $text8

			.image
				@include rem(margin-top, 10px)

			dd
				position: relative

				span
					@include abs-pos(auto, auto, auto, -30px)
</style>
