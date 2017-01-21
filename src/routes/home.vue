<template>
	<intro>
		<parallax class="wrapper" background-x="68%" background-y="0%" :speed="0.75">
			<div class="container">
				<site-header></site-header>
				<main>
					<div class="container">
						<how-it-started></how-it-started>
						<countdown to="November 3, 2018"></countdown>
						<cards></cards>
						<video-capture></video-capture>
					</div>
				</main>
			</div>
			<site-footer></site-footer>
		</parallax>
	</intro>
</template>

<script>

	import Cards from '../components/cards'
	import Countdown from '../components/countdown'
	import HowItStarted from '../components/how-it-started'
	import Intro from '../components/intro'
	import Parallax from '../components/parallax'
	import SiteFooter from '../components/site-footer'
	import SiteHeader from '../components/site-header'
	import VideoCapture from '../components/video-capture'

	export default {
		components: {
			Cards,
			Countdown,
			HowItStarted,
			Intro,
			Parallax,
			VideoCapture,
			SiteFooter,
			SiteHeader
		}
	}

</script>

<style lang="sass" scoped>

	@import '../styles/_main.sass';

	.wrapper
		background: url('../assets/backgrounds/background-lights-04.jpg') no-repeat;
		background-size: 2000px 1333.5px;

</style>
