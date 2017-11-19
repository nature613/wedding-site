<template>
	<div class="video-container">
		<site-header></site-header>
		<div class="overlay"></div>
		<iframe :src="src" height="120%" width="120%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		<div class="poster"></div>
		<main>
			<slot></slot>
		</main>
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
		},
		props: {
			'src': { type: String }
		}

}

</script>

<style scoped lang="sass">

	.no-video .video-container video,
	.touch .video-container video
		display: none

	.no-video .video-container .poster,
	.touch .video-container .poster
		display: block !important

	.video-container
		@include size(100%, 100%)

		.overlay
			@include rem(margin, 0)
			background-color: $background3c

		main
			@include rem(padding, 30px)
			position: relative
			z-index: 3

			@include tablet-xlarge
				@include rem(padding, 30px 0)

			@include mobile
				@include rem(padding, 10px 0)

			form
				@include rem(padding, 20px)
				background: $background3b

				@include mobile
					@include rem(padding, 10px)

</style>
