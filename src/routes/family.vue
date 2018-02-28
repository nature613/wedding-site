<template>
	<section id="family">
		<h2>Hey Family!!!</h2>
		<div class="ui raised segment">
			<p>This page is for us to communicate amongst ourselves, without going to various social media accounts, text messages, phone calls, etc. <strong><em>Please do not</em></strong> share this link with anyone else. We have reserved this information for <strong><em>only</em></strong> David + Dacia's parents, immediate siblings (significant others included) and their kids.</p>

			<p>At the bottom of this page, there is a comment section, so you can ask questions and post comments that everyone can see. David + Dacia will look at this often and answer back. Everyone can benefit from the information shared.</p>
		</div>

		<div class="ui cards">
			<div class="column card">
				<div class="content">
					<div class="header"><i class="tag icon"></i> Theme &amp; Attire</div>
					<div class="description">
						<p>Our theme is <em>"City Lights"</em>. David + Dacia are not having a wedding party, so we thought we would bring some harmony amongst our families.</p>

						<p>We are requesting <em>"Semi-formal", "Festive" or "Dressy Casual"</em> attire for our event. We will be having a party, so have fun with your attire. No need to be stuffy!</p>

						<p>In terms of colors, we would like you to wear metallic colors, including gold, rose gold, silver, platinum, bronze, copper, etc. We have suggestions for men and women.</p>
					</div>
				</div>
			</div>
			<div class="column card">
				<div class="content">
					<div class="header"><i class="male icon"></i> For the Men</div>
					<div class="description">
						<p>Men, metallics can be hard, but this can be done however you choose. If you feel more comfortable, a tie in metallics will do!</p>

						<dl>
							<dt></dt>
							<dd><span><i class="small male icon"></i></span>A suit and tie, jazzed up with a metallic tie (or no tie)</dd>
							<dd><span><i class="small male icon"></i></span>A sweater with a collar shirt and tie paired with slacks and fun socks</dd>
						</dl>
					</div>
				</div>
			</div>
			<div class="column card">
				<div class="content">
					<div class="header"><i class="female icon"></i> For the Women</div>
					<div class="description">
						<p>Ladies, I know you will have fun with this, but if you need some suggestions:</p>

						<dl>
							<dt></dt>
							<dd><span><i class="small female icon"></i></span>A cocktail or party dress, paired with playful accessories</dd>
							<dd><span><i class="small female icon"></i></span>Dressy separates, for instance long skirt with a top or a jazzy pants suit</dd>
						</dl>

						<dl>
							<dt><em>Kids</em></dt>
							<dd><span><i class="small child icon"></i></span>Totally up to the parents, though we would like them within the color scheme</dd>
							<dd><span><i class="small female icon"></i></span>Comfy shoes</dd>
						</dl>
					</div>
				</div>
			</div>
			<div class="column card">
				<div class="content">
					<div class="header"><i class="child icon"></i> The Kids</div>
					<div class="description">
						<p>We are not having a wedding party, so our family representation is important to us.</p>

						<p>We want to incorporate <em>Tarynn, Devon, Vivian, Dylan, and Andrew</em> into our day. Not sure what we are gonna do yet, we have a couple of ideas.</p>

						<p>Also, they will be the only kids at our wedding, but due to the nature of the venue, they should be entertained. We were also playing with the idea of hiring an on-site babysitter to help feed and entertain the kids. We do have an area in our venue rental for them if needed. The parents can decide.</p>
					</div>
				</div>
			</div>
		</div>

		<comments></comments>
	</section>
</template>

<script>

	import Comments from '../components/comments.vue'

	export default {
		components: {
			Comments
		},
		mounted() {
			this.$ga.page(this.$router)
		}
	}

</script>

<style scoped lang="sass">

	.ui.raised.segment
		@include rem(margin, 0 auto 20px)
		@include rem(padding, 25px 30px 25px)
		background: $background3b

		@include phablet-large
			@include rem(padding-left, 20px)
			@include rem(padding-right, 20px)

		&:last-of-type
			@include phablet-large
				@include rem(margin, 0 auto 30px)
				padding-top: 0

		em
			color: $text8

		strong
			em
				text-transform: uppercase

	.ui.cards
		@include rem(margin, 0 0 20px)

		@include phablet-large
			@include rem(margin-bottom, 15px)
			@include rem(margin-top, 5px !important)

		.column
			@include rem(padding, 15px 10px !important)
			flex: 1 auto
			max-width: 580px

			@include tablet
				@include rem(padding, 10px 20px !important)
				max-width: none
				width: 100%

			@include tablet-small
				@include rem(margin-bottom, 25px !important)
				@include rem(padding, 10px !important)

			@include phablet
				@include rem(margin-left, 0 !important)
				@include rem(margin-right, 0 !important)

			&:last-of-type
				@include tablet-small
				@include rem(margin-bottom, 10px 5px !important)

			.description
				p
					font-size: 20px

					@include phablet-large
						font-size: 18px

					em
						color: $text8

</style>
