<template>
	<div class="wrapper">
		<parallax></parallax>
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
	background-blend-mode: multiply;

	.parallax
		.ball
			background: $color-dark-gold;
			background: radial-gradient(circle at 100px 100px, $color-brown, $color-dark-gold);

	.jumbotron
		@include rem(margin-top, 8px);
</style>
