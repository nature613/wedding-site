<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Wedding website for Dacia James and David Rodrigue</p>
				<video-capture></video-capture>
				<cards></cards>
			</div>
		</main>
		<site-footer></site-footer>
	</div>
</template>

<script>
import Cards from '../components/cards'
import Countdown from '../components/countdown'
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'
import RSVPs from '../components/rsvps'
import VideoCapture from '../components/video-capture'

export default {
	components: {
		Cards,
		Countdown,
		RSVPs,
		SiteFooter,
		SiteHeader,
		VideoCapture
	}
}
</script>

<style lang="sass">
@import '../styles/_main.sass';
</style>
