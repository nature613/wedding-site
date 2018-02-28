<template>

	<div class="main">
		<h2 class="display-3">David + Dacia's Guide to Chicago</h2>
		<p class="not-on-mobile">An interactive map with list of hotels you can stay in, restaurants you should eat at, and places you must visit while in town! Use <a href="https://www.google.com/maps/d/viewer?mid=1eqOAzAKZAAVEJ-lGX4ffF-8fwt8&usp=sharing" target="_blank" @click="runAnalytics('Things to do')">Things to Do in Chicago</a> from Google Maps to help you build your own unique adventure. Drivers, we highly recommend that you download Waze for navigation and ParkChicago when paying for parking.</p>
		<div class="flex-container">
			<p class="get-app">
				<img src="../assets/logo-waze.png" alt="Download Waze">
				<span>Get app on:</span>
				<a href="https://play.google.com/store/apps/details?id=com.waze" target="_blank" class="card-link download-app shadow" @click="runAnalytics('Download Waze Android')">
					<img src="../assets/logo-google-play.jpg" alt="Download Waze">
				</a>
				<a href="https://itunes.apple.com/app/apple-store/id323229106?pt=274039&mt=8&ct=waze_website_homepage" target="_blank" class="card-link download-app shadow" @click="runAnalytics('Download Waze Apple')">
					<img src="../assets/logo-apple-store.jpg" alt="Download Waze">
				</a>
			</p>

			<p class="get-app">
				<img src="../assets/logo-park-chicago.png" alt="Download Park Chicago">
				<span>Get app on:</span>
				<a href="https://play.google.com/store/apps/details?id=com.passportparking.mobile.parkchicago" target="_blank" class="card-link download-app shadow" @click="runAnalytics('Download Park Chicago Android')">
					<img src="../assets/logo-google-play.jpg" alt="Download Park Chicago">
				</a>
				<a href="https://itunes.apple.com/us/app/parkchicago/id686658594?ls=1&mt=8" target="_blank" class="card-link download-app shadow" @click="runAnalytics('Download Park Chicago Apple')">
					<img src="../assets/logo-apple-store.jpg" alt="Download Park Chicago">
				</a>
			</p>
		</div>

		<p class="more-details">
			<a href="https://www.instagram.com/chicagobucketlist/" target="_blank">Chicago Bucket List</a>
			<a href="http://chicago.metromix.com/browse/events/dates:2018-10-24-to-2018-11-10" target="_blank">Chicago Events via Metromix</a>
		</p>
	</div>

</template>

<script>

	export default {
		methods: {
			runAnalytics(title) {
				this.$ga.event('Chicago Details', 'click', title)
			}
		}
	}

</script>

<style scoped lang="sass">

	.wrapper
		.main
			max-width: 95%
			margin-top: .5rem

	h4
		margin-bottom: .5rem !important
		position: relative

		~ div
			@include rem(padding-bottom, 10px)

		a
			position: absolute
			right: 0

	p
		font-size: 17px

		&.more-details
			a
				@include rem(margin-right, 15px)
				display: inline-block

				&:last-of-type
					margin-right: 0

	.flex-container
		@include phablet
			display: block
			text-align: left

	.get-app
		font-size: 15px

		span
			@include rem(margin-right, 5px)
			display: inline-block
			position: relative
			top: -10px

		img
			@include rem(margin-right, 10px)
			display: inline-block
			max-width: 60px
			position: relative
			top: 10px
			width: 100%

		.download-app
			@include size(auto, auto)
			display: inline-block
			max-width: 100px

			&:before
				background-color: transparent

			img
				margin-right: 0
				max-width: 30px
				top: 0

</style>
