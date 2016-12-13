<template>
	<div id="app">
		<site-header></site-header>
		<main>
			<p>Wedding website for Dacia James and David Rodrigue</p>
			<video-capture></video-capture>
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
$font-stack-serif: 'Playfair Display', 'Times New Roman', 'Times', serif;
$font-stack-sans-serif: 'Josefin Sans', 'Avenir', Helvetica, Arial, sans-serif;

$color-white: #fff;
$color-black: #000;
$color-gold: #cfb278 // Gold
$color-dark-gold: #8f713d // Dark Gold
$color-light-gold: #ffffde //Light Gold
$color-merlot: #2b0616; // Merlot
$color-light-merlot: #543240 // Light Merlot
$color-brown: #692e24; // Brown

$background: $color-merlot;
$background2: $color-white;

$text: $color-white;
$text2: $color-black;
$text3: $color-merlot;

body
	background: $color-light-merlot url('assets/backgrounds/background-lights-purple-circles.jpg') 50% top no-repeat / cover;
	background-blend-mode: lighten;
	color: $text;
	font-family: $font-stack-sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

#app
	margin-top: 60px;

h1, h2, h3,
h4, h5, h6
	font-family: $font-stack-serif;

</style>
