<template>
	<div id="app">
		<div class="container">
			<site-header></site-header>
			<main>
				<div class="container">
					<p>Wedding website for Dacia James and David Rodrigue</p>
					<video-capture></video-capture>
				</div>
			</main>
			<site-footer></site-footer>
		</div>
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

	html
		box-sizing: border-box;
		height: 100%;
		line-height: 1.5;

	body
		background: $color-light-merlot url('assets/backgrounds/background-lights-purple-circles.jpg') 50% -14% no-repeat / cover;
		background-blend-mode: lighten;
		color: $text;
		display: block;
		font: 1rem/1.5 $font-stack-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;

	h1, h2, h3,
	h4, h5, h6
		font-family: $font-stack-sans-serif2;
		margin: 0;

	.container

	main
		position: relative;
		top: 8rem;

		.container
			margin-bottom: 6rem;
</style>
