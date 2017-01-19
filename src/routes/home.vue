<template>
	<div>
		<intro></intro>
		<parallax id="home" class="wrapper" background-x="50%" background-y="0%">
			<div class="container">
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
		</parallax>
	</div>
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
	@include transition(opacity .65s);
	background: url('../assets/backgrounds/background-lights-04.jpg') no-repeat;
	background-size: 110% auto;
	opacity: 0;

	&.fadeIn
		opacity: 1;
</style>
