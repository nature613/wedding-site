<template>
	<div id="footer">
		<div class="container">
			<div class="ui">
				<div class="column">
					<div class="block">
						<h4><i class="fal fa-envelope"></i> email</h4>
						<p><email-link local-part="davidanddacia" domain="gmail.com" subject="Wedding Site Contact Us"></email-link></p>
					</div>
				</div>
				<div class="column">
					<h2 @click="open, runAnalytics('The Rodrigues')"><span>The</span> Rodrigue<span>s</span></h2>
					<p><em>&hellip;coming November 3<sup>rd</sup>, 2018</em></p>
				</div>
				<div class="column">
					<div class="block">
						<h4><i class="fab fa-slack-hash"></i> davidanddacia</h4>
						<p>Use our hashtag on social media when posting videos/photos.</p>
					</div>
				</div>
			</div>
			<p class="copyright">&copy; 2016 - 2018 website designed, developed by David + Dacia</p>
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
			},
			runAnalytics(title) {
				this.$ga.event('Footer', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">

	#footer
		@include animation(2s fadeIn forwards)
		@include rem(padding, 10px 0)
		clear: both
		position: relative
		text-align: center
		width: 100%
		z-index: 3

		@include tablet-xlarge
			@include size(100%, 260px)
			background: linear-gradient(transparent, $background3)

		@include tablet-large
			@include rem(padding-left, 20px)
			@include rem(padding-right, 20px)
			height: 380px

		.container
			margin: 0 auto
			max-width: 1400px

			@include desktop-large
				max-width: 1200px

			@include desktop
				max-width: 1100px

			@include tablet-xlarge
				max-width: 980px

			@include tablet-large
				max-width: 820px

			.ui
				display: grid
				grid-gap: 3px
				grid-template-columns: repeat(3, 1fr)

				@include tablet-large
					grid-template-columns: repeat(1, 1fr)

				.column
					&:first-of-type
						.block
							text-align: left

							@include tablet-xlarge
								@include rem(padding-top, 30px)

							@include tablet-large
								@include rem(padding-top, 0)
								text-align: center

					&:last-of-type
						.block
							text-align: right

							@include tablet-xlarge
								@include rem(padding-top, 30px)

							@include tablet-large
								@include rem(padding-top, 0)
								text-align: center

						h4
							color: $text8

						p
							float: right
							max-width: 300px

							@include tablet-large
								float: none
								max-width: none

			h4
				@include rem(margin-bottom, 2.5px)
				@include rem(margin-top, 15px)
				font-size: 23.6px

				@include tablet-large
					margin-top: 0

				i
					font-size: 20px

			p
				a
					color: $text7

			i
				@include rem(margin-right, 0)

			b
				font-family: $font-stack
				font-size: 19.5px

			.column
				@include tablet-large
					@include rem(margin-bottom, 20px)

			h2
				color: $text
				cursor: pointer
				font: 700 66px/1 $font-stack-sans-serif
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
