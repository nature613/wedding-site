<template>

	<div class="ui grid">
		<div class="two wide column"></div>
		<div class="twelve wide column">
			<h2 class="display-3">Dacia + David's Guide to Chicago</h2>
			<p>The maps above and the list below contains an interactive list of hotels you can stay in, restaurants you should eat at, and places you must visit while in town! Use <a href="https://www.google.com/maps/d/viewer?mid=1eqOAzAKZAAVEJ-lGX4ffF-8fwt8&usp=sharing" target="_blank">Things to Do in Chicago</a> from Google Maps to help you build your own unique adventure while in Chicago. For help with getting around the city, we highly recommend that you download Waze.</p>
			<p class="get-app">Get <img src="../assets/logo-waze.png" alt="Download Waze"> here:
				<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=9&cad=rja&uact=8&ved=0ahUKEwjutavCv9fRAhXq7oMKHZhrAOYQFghFMAg&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.waze%26hl%3Den&usg=AFQjCNHt2EI9vzs-myLRTSFo6GP0i1yxeA&sig2=QfORznwJxftrcgXUBtu1Xg" target="_blank" class="card-link download-app shadow">
					<img src="../assets/logo-google-play.png" alt="Download Waze">
				</a>
				<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwjutavCv9fRAhXq7oMKHZhrAOYQFghMMAk&url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fwaze-gps-navigation-maps-social%2Fid323229106%3Fmt%3D8&usg=AFQjCNHXhQtfbbO7UjJEP5MZOsCIyT-4IA&sig2=Y_joW9Q9AGPYro6TFHY20Q" target="_blank" class="card-link download-app shadow">
					<img src="../assets/logo-apple-store.png" alt="Download Waze">
				</a>
			</p>
		</div>
	</div>

</template>

<script>

	export default {

	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	.ui.column.grid > [class*="two wide"].column,
	.ui.grid>.column.row > [class*="two wide"].column,
	.ui.grid> .row >[class*="two wide"].column,
	.ui.grid > [class*="two wide"].column,
	.ui.column.grid > [class*="one wide"].column,
	.ui.grid>.column.row > [class*="one wide"].column,
	.ui.grid> .row >[class*="one wide"].column,
	.ui.grid > [class*="one wide"].column
		@include phablet-large
			display: none

	.ui.column.grid > [class*="twelve wide"].column,
	.ui.grid>.column.row > [class*="twelve wide"].column,
	.ui.grid> .row >[class*="twelve wide"].column,
	.ui.grid > [class*="twelve wide"].column
		@include phablet-large
			@include rem(padding-left, 30px)
			@include rem(padding-right, 30px)
			width: 100% !important

	h4
		margin-bottom: .5rem !important
		position: relative

		~ div
			@include rem(padding-bottom, 10px)

		a
			position: absolute
			right: 0

	p
		font-size: 16px

	.get-app
		font-size: 14px

		span
			@include rem(margin-right, 5px)
			display: block

		img
			@include rel-pos(15px, auto, auto, auto)
			width: 5%

			@include phablet-large
				top: 8px

		.download-app
			@include size(auto, auto)
			display: inline-block
			max-width: 100px

			&:before
				background-color: transparent

			img
				@include rem(margin, 0 25px 0 0)
				display: inline-block
				max-width: 100%
				top: 10px
				width: 100%

</style>
