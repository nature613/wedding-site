<template>
	<div>
		<how-it-started></how-it-started>
		<countdown to="November 3, 2018"></countdown>
		<save-the-date></save-the-date>
	</div>
</template>

<script>

	import Countdown from '../components/countdown.vue'
	import HowItStarted from '../components/how-it-started.vue'
	import SaveTheDate from '../components/save-the-date.vue'

	export default {
		components: {
			Countdown,
			HowItStarted,
			SaveTheDate
		},
		mounted() {
			this.$ga.page(this.$router)
		}
	}

</script>