<template>
	<section id="wedding">
		<h2>Wedding Celebration Details</h2>
		<p>Details about our celebration is behind each category. Click through for more details, as <em>David + Dacia</em> has worked to make sure we provide all the information you need for our event.</p>

		<div id="wedding-categories" class="ui clearing">
			<div class="ui grid">
				<div class="ui top attached tabular">
					<div class="active tab-title" data-tab="first" @click="runAnalytics('When and Where')">
						<i class="calendar outline icon"></i>
						<p>When &amp; Where</p>
					</div>
					<div class="tab-title" data-tab="second" @click="runAnalytics('RSVP')">
						<i class="open envelope outline icon"></i>
						<p>RSVP</p>
					</div>
					<div class="tab-title" data-tab="third" @click="runAnalytics('Theme and Attire')">
						<i class="tag icon"></i>
						<p>Theme &amp; Attire</p>
					</div>
					<div class="tab-title" data-tab="fourth" @click="runAnalytics('The Celebration')">
						<i class="empty heart icon"></i>
						<p>The Celebration</p>
					</div>
					<div class="tab-title" data-tab="fifth" @click="runAnalytics('Gifts and Registry')">
						<i class="gift icon"></i>
						<p>Gifts/Registry</p>
					</div>
					<div class="tab-title" data-tab="sixth" @click="runAnalytics('Social Media')">
						<i class="slack icon"></i>
						<p>Social Media</p>
					</div>
				</div>

				<div class="ui bottom attached active tab segment" data-tab="first">
					<div class="div-table">
						<div class="div-table-row">
							<div class="div-table-cell">
								<p>Our wedding celebration is on</p>
								<h2><em>Saturday, November 3<sup>rd</sup>, 2018</em></h2>
								<p>Held at the</p>
								<h2><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank" @click="runAnalytics('Chicago Sports Museum')">Chicago Sports Museum</a></h2>
								<p>
									<a target="_blank" class="noted" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MTc1NWdwZTdia3E2YW1kcTZ2NGFobmhybnQgZGF2aWRhbmRkYWNpYUBt&amp;tmsrc=davidanddacia%40gmail.com">
										<i class="calendar icon"></i> Add our wedding to your calendar
									</a>
								</p>

								<address>
									Water Tower Place<br>
									835 North Michigan Avenue<br>
									Chicago, IL 60611
								</address>
							</div>
							<div class="div-table-cell">
								<a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897976,-87.6258027,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank" class="ui large image p50lft" @click="runAnalytics('Chicago Sports Museum2')">
									<img src="../assets/chicago-sports-museum.jpg">
								</a>
							</div>
						</div>
					</div>
					<div class="ui divider"></div>

					<h2>Time</h2>
					<p>The doors open at <span class="nowrap">4:30 p.m.</span> <em>WARNING: Entry will not be allowed after <span class="nowrap">5:15 p.m.</span></em>, as the main event starts promptly at <em class="nowrap">5:30 p.m.</em> Entry will resume after the main event is completed.</p>

					<p>The wedding celebration should last until <span class="nowrap">10 p.m.</span>, with a special moment around 9:30 pm</p>

					<h2>Parking</h2>
					<p><em>Valet Parking:</em> Available from 5 p.m. &ndash; 11 p.m. | Enter on Pearson ($16 for 3 hours or less with restaurant validation).</p>
					<p><em>Self Parking:</em> Available in the Water Tower Place garage located at 845 N. Michigan | Enter on Chestnut</p>
					<ul>
						<li>Before 5 p.m.: Regular rates apply.</li>
						<li>After 5 p.m.: $12 for up to 5 hours with restaurant validation.</li>
					</ul>
					<p>If you would like, please use our code for a discounted ride via Lyft.</p>

					<p>Download <a href="https://www.waze.com/get" target="_blank" class="card-link" @click="runAnalytics('Download Waze')">Waze</a> for the best route to the venue.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="second">
					<h2>RSVP</h2>
					<p>We are excited to have you as our guest!!!</p>

					<p>Please <router-link class="card-link" to="/rsvp" @click="runAnalytics('RSVP page')">RSVP</router-link> by <em>Friday, September 14<sup>th</sup>, 2018</em>. It is very important that you RSVP by this date, so we can finalize our plans.</p>

					<router-link class="button-link button" to="/rsvp" @click="runAnalytics('RSVP page')"><span>RSVP</span></router-link>

					<h2>Children</h2>
					<p>Many of our friends and family members have children. We do not want you and your family to feel excluded; however, with the size of our guest list, we have chosen for our wedding day to be an adult only occasion. Hopefully, this will allow all guests, including parents, an evening of relaxation. We hope this advance notice means you are still able to share our big day and will enjoy having the evening off! Special circumstances are in place for David + Dacia's immediate nieces and nephews.</p>

					<h2>Plus Ones</h2>
					<p>For "Plus Ones", typically, our events are all inclusive, but we do have a guest limit. Your invitation should state the number of reserved seats for you and your guest(s). Don't worry, we feel like we know you and have made sure to seat you with others that you will have a great time with!</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="third">
					<h2>Theme &amp; Attire</h2>
					<p>We were asked about wedding theme and colors, with our theme being <em>"City Lights"</em>, no colors are off limits, except, metallics and the obvious, white. We are requesting <em>"Semi-formal", "Festive" or "Dressy Casual"</em> attire for our event. We will be having a party, so have fun with your attire. No need to be stuffy!<p>

					<p>Suggestions:</p>

					<dl>
						<dt><em>Women</em></dt>
						<dd><span><i class="small female icon"></i></span>A cocktail or party dress in a fun color, paired with playful accessories</dd>
						<dd><span><i class="small female icon"></i></span>Dressy separates, for instance long skirt with a top or a jazzy pants suit</dd>
					</dl>

					<dl>
						<dt><em>Men</em></dt>
						<dd><span><i class="small male icon"></i></span>A suit and tie, jazzed up with a bright tie</dd>
						<dd><span><i class="small male icon"></i></span>A sweater with a collar shirt and tie paired with slacks and fun socks</dd>
					</dl>
				</div>
				<div class="ui bottom attached tab segment" data-tab="fourth">
					<h2>The Celebration</h2>
					<p>Be prepared to have a great time! There will be plenty of dancing and entertainment. We'll have comfy shoes for you to change out of, camera balls for photos, and YOU!!! Use our hashtag, <em>#DavidAndDacia</em>, when posting videos and photos. We will also have a SnapChat filter. Do not hesitate to stream the event via Facebook live! Tag us in everything!!!</p>

					<h2>Dinner</h2>
					<p><em>WARNING:</em> Food will be served from the time you walk into our event, until you leave, so doNn't ruin your appetite before you arrive.</p>
					<p>Dinner will be served buffet/station style with both <em>Ha&iuml;tian</em> and <em>American</em> courses with vegetarian options. You can leave your beer money at home, the drinks are on us! We will have wine, liquor, beer, and non-alcoholic options as well. We just ask that you tip the bartenders.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="fifth">
					<h2>Gifts/Registry</h2>
					<p>We know that you want to be a blessing to us, and since we already have a beautiful home, we will not have a traditional registry. Instead, you can participate in the traditional <em>"Money Dance"</em> at the reception or contribute to our honeymoon fund via Google Wallet.</p>
				</div>
				<div class="ui bottom attached tab segment" data-tab="sixth">
					<h2>Social Media</h2>
					<p>We are "socially-active", so please use our hashtag, <em>#DavidAndDacia</em>, throughout the weekend, while traveling to and from Chicago, while doing any of the activities we shared, eating at any of the restaurants, and especially during our wedding celebration when posting messages, updates, videos, and photos.</p>
					<p>SNAPCHAT</p>
				</div>
			</div>
			<div class="ui row">
				<div class="ui grid sixteen column"></div>
			</div>
		</div>

	</section>
</template>

<script>

	export default {
		mounted() {
			this.$ga.page(this.$router)
			$('.tabular .tab-title').tab().transition({
				animation: 'pulse',
				reverse: true,
				interval: 200
			})
		},
		methods: {
			runAnalytics(title) {
				this.$ga.event('Wedding', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">

	#wedding
		@include rem(padding, 20px 20px 60px)
		background: $background3b
		max-width: 75%
		width: 100%

		@include tablet-xlarge
			max-width: none
			min-height: 800px

		h2
			@include animation(2s fadeIn forwards)
			@include rem(margin-bottom, 15px)

			@include tablet
				margin-left: 0

			~ p
				max-width: 800px

	#wedding-categories
		@include rem(margin-top, 40px)

		.tabular
			@include rem(margin-bottom, 25px)
			@include rem(margin-right, 15px)
			position: relative
			width: 100%
			z-index: 4

			@include tablet-small
				margin-bottom: 0
				margin-right: 0
				width: 100% !important

		.tab-title
			@include animation(2s fadeIn forwards)
			@include rem(padding, 10px 10px 0)
			@include size(25%, 124px)
			float: left
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
			@include animation(2s fadeIn forwards)
			@include rem(padding, 10px 30px 0)
			font-size: 21px
			min-height: 330px
			width: 100%

			@include tablet
				@include rem(padding-left, 10px)
				@include rem(padding-right, 10px)

			.div-table,
			.div-table-row,
			.div-table-cell
				@include tablet-xsmall
					display: block

			h2
				@include rem(margin-top, 35px)
				font-size: 32px

				&:first-of-type
					@include rem(margin-top, 0)

			em
				color: $text8

			.image
				@include rem(margin-top, 10px)

			dd
				position: relative

				span
					@include abs-pos(auto, auto, auto, -30px)
</style>
