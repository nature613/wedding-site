<template>
	<div class="wrapper">
		<cover-background>
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
		max-width: 1200px

</style>
