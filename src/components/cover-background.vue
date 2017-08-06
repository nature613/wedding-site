<template>
	<div class="video-container">
		<site-header></site-header>
		<div class="filter"></div>
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

<style lang="sass" scoped>

	@import '../styles/main.sass'

	.no-video .video-container video,
	.touch .video-container video
		display: none

	.no-video .video-container .poster,
	.touch .video-container .poster
		display: block !important

	.video-container
		@include size(100%, auto)
		background: #000 url('../assets/stock/water-tower-place.jpg') no-repeat
		background-size: cover
		overflow: hidden
		position: absolute

		iframe,
		video,
		.poster
			@include abs-pos(0, 0, 0, 0)
			@include size(120%, 120%)
			position: fixed
			transform: translate(-8%, 0%)
			z-index: 1

		.poster
			background: url('../assets/stock/water-tower-place.jpg') center center
			background-size: cover
			pointer-events: none
			position: absolute
			z-index: 0

		main
			@include rem(padding, 30px 70px)
			position: relative
			z-index: 3

			form
				@include rem(padding, 20px)
				background: $background3b

</style>
