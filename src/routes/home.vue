<template>
	<div class="wrapper">
		<div class="container">
			<intro></intro>
			<site-header></site-header>
			<main>
				<div class="container">
					<how-it-started></how-it-started>
					<cards></cards>
					<video-capture></video-capture>
				</div>
			</main>
		</div>
		<site-footer></site-footer>
	</div>
</template>

<script>
import Cards from '../components/cards'
import Countdown from '../components/countdown'
import HowItStarted from '../components/how-it-started'
import Intro from '../components/intro'
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'
import VideoCapture from '../components/video-capture'

export default {
	components: {
		Cards,
		Countdown,
		HowItStarted,
		Intro,
		VideoCapture,
		SiteFooter,
		SiteHeader
	}
}
</script>

<style lang="sass" scoped>
@import '../styles/_main.sass';

.wrapper
	background-color: $color-gold;
	background-blend-mode: multiply;
</style>
