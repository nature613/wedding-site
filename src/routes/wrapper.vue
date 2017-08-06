<template>
	<div class="wrapper">
		<cover-background src="https://player.vimeo.com/video/52302939?autoplay=1&loop=1&background=1&quality=1080p">
			<router-view class="main-content"></router-view>
		</cover-background>
	</div>
</template>

<script>

	import CoverBackground from '../components/cover-background.vue'

	export default {

		components: {
			CoverBackground
		}

}

</script>

<style lang="sass">

	@import '../styles/main.sass'

	.main-content
		margin: 0 auto
		max-width: 1024px

		@include tablet-large
			max-width: $tablet

		@include desktop-large
			max-width: $desktop

		@include desktop-xlarge
			max-width: $desktop-large

</style>
