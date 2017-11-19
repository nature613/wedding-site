<template>
	<div id="footer">
		<div class="ui relaxed grid">
			<div class="ui stackable sixteen column row">
				<div class="five wide computer sixteen wide tablet sixteen wide mobile column">
					<h4><i class="fal fa-envelope"></i> email</h4>
					<p><email-link local-part="davidanddacia" domain="gmail.com" subject="Wedding Site Contact Us"></email-link></p>
				</div>
				<div class="six wide computer sixteen wide tablet sixteen wide mobile column">
					<h2 @click="open"><span>The</span> Rodrigue<span>s</span></h2>
					<p><em>&hellip;coming November 3<sup>rd</sup>, 2018</em></p>
				</div>
				<div class="five wide computer sixteen wide tablet sixteen wide mobile column">
					<h4><i class="fab fa-slack-hash"></i> davidanddacia</h4>
					<p>Use our hashtag on social media when posting videos/photos.</p>
				</div>
				<div class="sixteen wide column">
					<p class="copyright">&copy; 2016 - 2018 website designed, developed by David + Dacia</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import EmailLink from '../components/email-link.vue'

	export default {
		components: {
			EmailLink
		},
		computed: {
			href: function () {
				let uri = `/home`

				return uri
			}
		},
		methods: {
			open() {
				window.open( this.href, '_self' ).scrollTo( 0, 0 )
			}
		}
	}

</script>

<style scoped lang="sass">

	#footer
		@include animation(1s fadeIn forwards)
		@include rem(margin-top, 20px)
		background: linear-gradient(transparent, $background3)
		clear: both
		position: relative
		text-align: center
		width: 100%
		z-index: 3

		h4
			@include rem(margin-bottom, 2.5px)
			@include rem(margin-top, 25px)
			font-size: 23.6px

			@include tablet
				margin-top: 0

			i,
			.svg-inline--fa
				font-size: 20px

		p
			a
				color: $text7

		i,
		.svg-inline--fa
			@include rem(margin-right, 0)

		b
			font-family: $font-stack-sans-serif2
			font-size: 19.5px

		.column
			@include rem(margin-bottom, 20px)

			.column
				&:nth-of-type(3)
					h4
						color: $text8

					p
						margin: 0 auto
						width: 75%

						@include tablet
							width: 60%

		h2
			color: $text
			cursor: pointer
			font: 700 66px/1 $font-stack-sans-serif2
			text-shadow: $text-shadow
			text-transform: uppercase

			@include tablet
				font-size: 56px

			span
				font-size: 34px

				&:last-of-type
					font-size: 44px

		p
			font-size: $base-font-size

			&.copyright
				@include rem(margin-top, 10px)
				font-size: 12px

</style>
