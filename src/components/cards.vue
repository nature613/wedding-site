<template>
	<div class="row">
		<div class="block-content">
			<div class="card-deck-wrapper">
				<div class="card-deck">
					<b-card variant="default" type="default" align="left">
						<router-link to="/wedding"><img class="card-img img-fluid" src="../assets/stock/wedding.jpg" alt="Wedding information"></router-link>
						<div class="card-block">
							<router-link to="/wedding"><h4 class="card-title">Event Details</h4></router-link>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-block">
							<!-- TODO: Make RVP shake a little to show it is important  -->
							<p>
								<router-link class="card-link" to="/wedding">Wedding Information</router-link>
								<router-link class="card-link" to="/rsvp">RSVP</router-link>
							</p>
						</div>
					</b-card>

					<b-card variant="default" type="default" align="left">
						<router-link to="/chicago"><img class="card-img img-fluid" src="../assets/stock/chicago-theatre.jpg" alt="Things to do in Chicago"></router-link>
						<div class="card-block">
							<router-link to="/chicago"><h4 class="card-title">While in Chicago</h4></router-link>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-block">
							<p class="information">
								<router-link class="card-link" to="/hotels">Hotels</router-link>
								<router-link class="card-link" to="/restaurants">Restaurants</router-link><br />
								<router-link class="card-link" to="/scavenger-hunt">Scavenger Hunt</router-link>
							</p>
							<p class="get-app">
								<span>Download Waze</span> <img src="../assets/logo-waze.png" alt="Download Waze"><br />
								<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=9&cad=rja&uact=8&ved=0ahUKEwjutavCv9fRAhXq7oMKHZhrAOYQFghFMAg&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.waze%26hl%3Den&usg=AFQjCNHt2EI9vzs-myLRTSFo6GP0i1yxeA&sig2=QfORznwJxftrcgXUBtu1Xg" target="_blank" class="card-link download-app">
									<img src="../assets/logo-google-play.png" alt="Download Waze">
								</a>
								<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwjutavCv9fRAhXq7oMKHZhrAOYQFghMMAk&url=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fwaze-gps-navigation-maps-social%2Fid323229106%3Fmt%3D8&usg=AFQjCNHXhQtfbbO7UjJEP5MZOsCIyT-4IA&sig2=Y_joW9Q9AGPYro6TFHY20Q" target="_blank" class="card-link download-app">
									<img src="../assets/logo-apple-store.png" alt="Download Waze">
								</a>
							</p>
						</div>
					</b-card>

					<b-card variant="default" type="default" align="left">
						<router-link to="/vendor"><img class="card-img img-fluid" src="../assets/stock/vendors.jpg" alt="Vendor information"></router-link>
						<div class="card-block">
							<router-link to="/vendor"><h4 class="card-title">Vendors</h4></router-link>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<div class="card-block">
							<p>
								<router-link class="card-link" to="/wedding-planner">Wedding Planner</router-link>
								<router-link class="card-link" to="/music">DJ</router-link>
							</p>
							<p>
								<router-link class="card-link" to="/visual">Photographers/Videographers</router-link>
							</p>
						</div>
					</b-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
	}

</script>

<style lang="sass">

	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	.block-content
		margin: 0 auto;
		max-width: 1000px;
		width: 100%;

		@include tablet-xlarge
			max-width: 660px;

		@include tablet
			@include rem(padding-left, 10px);
			@include rem(padding-right, 10px);

	.card-deck
		.card
			background-color: $background2a;

			@include tablet-xlarge
				@include rem(margin-bottom, 20px);
				display: block;
				max-width: 660px;

			> a
				@include tablet-xlarge
					display: block;
					max-height: 200px;
					overflow: hidden;

					@include tablet-xlarge
						max-height: 120px;

					&:hover
						border-color: $text;
						text-decoration: none;

					img
						width: 100%;

			.card-title,
			.card-text
				color: $text2;

			.card-link
				@include bold;
				font-family: $font-stack-sans-serif2;

			.information
				br
					display: inline-block;

					@include tablet-xlarge
						display: none;

				a
					@include rem(margin-bottom, 10px);
					display: inline-block;

					&:last-of-type
						@include rem(margin-left, 15px);

			.get-app
				@include bold;
				color: $text2;
				font-family: $font-stack-sans-serif2;

				span
					@include rem(margin-right, 5px);
					display: inline-block;

				.download-app
					@include rem(margin-top, 2.5px);
					@include size(25%, auto);
					display: inline-block;

					img
						max-width: 100%;

			h2
				color: $text3;
				text-align: center;

			.fa-male
				@include rem(margin-right, 0);

			.card-block
				&:last-of-type
					p
						@include tablet-xlarge
							@include rem(margin-right, 12.5px);
							display: inline-block;

						&:last-of-type
							@include tablet-xlarge
								@include rem(margin-right, 0);

				dt
					@include black;
					font-family: $font-stack-sans-serif2;

				dd
					@include rem(font-size, 9px);
					@include rem(margin-bottom, 0);
					@include rem(padding-left, 10px);
					position: relative;

					&:before
						@include abs-pos(-2rem, auto, auto, 0rem);
						@include rem(font-size, 30px);
						color: $text3;
						content: '\00B7';

</style>
