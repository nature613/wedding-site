<template>
	<div>
		<how-it-started></how-it-started>
		<countdown to="November 3, 2018"></countdown>
		<event-info></event-info>
		<video-capture></video-capture>
	</div>
</template>

<script>

	import Countdown from '../components/countdown.vue'
	import EventInfo from '../components/event-info.vue'
	import HowItStarted from '../components/how-it-started.vue'
	import VideoCapture from '../components/video-capture.vue'

	export default {
		components: {
			Countdown,
			EventInfo,
			HowItStarted,
			VideoCapture
		}
	}

</script>