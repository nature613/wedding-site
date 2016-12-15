<template>
	<div id="app">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Wedding website for Dacia James and David Rodrigue</p>
				<video-capture></video-capture>
			</div>
		</main>
		<site-footer></site-footer>
	</div>
</template>

<script>
import Countdown from './components/countdown'
import SiteFooter from './components/site-footer'
import SiteHeader from './components/site-header'
import RSVPs from './components/rsvps'
import VideoCapture from './components/video-capture'

export default {
	name: 'app',
	components: {
		Countdown,
		RSVPs,
		SiteFooter,
		SiteHeader,
		VideoCapture
	}
}
</script>

<style lang="sass">
	@import 'styles/_variables.sass';

	body
		background: $color-light-merlot url('assets/backgrounds/background-lights-purple-circles.jpg') 50% top no-repeat / cover;
		background-blend-mode: lighten;
		color: $text;
		font: 15px/1.4 $font-stack-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
		text-align: center;

	h1, h2, h3,
	h4, h5, h6
		font-family: $font-stack-sans-serif2;
		margin: 0;

	main
		position: relative;
		top: 8rem;

		.container
			margin-bottom: 6rem;
</style>
