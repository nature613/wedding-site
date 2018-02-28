<template>
	<div class="video-container">
		<div class="poster"></div>
		<div class="overlay"></div>
		<div class="embed-container">
			<iframe src="https://player.vimeo.com/video/52302939?autoplay=1&loop=1&background=1" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
			<main>
				<site-header></site-header>
				<slot></slot>
			</main>
		</div>
		<site-footer></site-footer>
	</div>
</template>

<script>

	import SiteFooter from '../components/site-footer.vue'
	import SiteHeader from '../components/site-header.vue'

	export default {

		components: {
			SiteFooter,
			SiteHeader
		}

	}

</script>

<style scoped lang="sass">

	.video-container
		@include size(100%, 100%)
		position: relative

		.overlay
			@include rem(margin, 0)
			background-color: $background3c

		.embed-container
			height: 0
			max-width: 100%
			overflow: hidden
			position: relative
			padding-bottom: 56.5%

			@include tablet-xlarge
				height: 100%
				padding-bottom: 0

			iframe,
			object,
			embed
				@include abs-pos(0, auto, auto, 0)
				@include size(100%, 100%)

			main
				@include rem(margin, 0 auto)
				@include rem(padding, 0 20px 45px)
				@include size(100%, 800px)
				max-width: 1400px
				overflow-y: auto
				position: relative
				text-align: left
				z-index: 3

				@include desktop-xxlarge
					height: 1200px

				@include tablet-xlarge
					height: 100%

				@include tablet
					padding-left: 0
					padding-right: 0

				form
					@include rem(padding, 20px)
					background: $background3b

					@include mobile
						@include rem(padding, 10px)

</style>
