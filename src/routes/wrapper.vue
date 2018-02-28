<template>
	<div class="wrapper">
		<cover-background>
			<router-view class="main-content"></router-view>
		</cover-background>
	</div>
</template>

<script>

	import CoverBackground from '../components/cover-background.vue'

	const methods = require('../scripts/common.js')

	export default {

		components: {
			CoverBackground
		},
		methods: {
			methods
		}

	}

</script>

<style lang="sass">

	@import '../styles/main.sass'

	.main-content
		margin: 0 auto
		max-width: 1400px

</style>
