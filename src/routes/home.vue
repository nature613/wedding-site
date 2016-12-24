<template>
	<div class="wrapper">
		<div class="container">
			<site-header></site-header>
			<main>
				<div class="container">
					<how-it-started></how-it-started>
					<!-- <video-capture></video-capture> -->
					<cards></cards>
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
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'
//import VideoCapture from '../components/video-capture'

export default {
	components: {
		Cards,
		Countdown,
		HowItStarted,
		//VideoCapture,
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
