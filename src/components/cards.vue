<template>
	<div class="row">
		<div class="col-lg-12">
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
								<router-link class="card-link" to="/rsvp">RSVP</router-link>
								<router-link class="card-link" to="/guestbook">Guestbook</router-link>
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
							<p>
								<router-link class="card-link" to="/hotels">Hotels</router-link>
								<router-link class="card-link" to="/restaurants">Restaurants</router-link>
							</p>
							<p>
								<router-link class="card-link" to="/scavenger-hunt">Scavenger Hunt</router-link>
								<a href="#" class="card-link">Download Waze</a>
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

	.card-deck
		.card
			.card-title,
			.card-text
				color: $text2;

			.card-link
				@include bold;
				font-family: $font-stack-sans-serif2;

			h2
				color: $text3;
				text-align: center;

			.fa-male
				@include rem(margin-right, 0);

			.card-block
				@include rem(margin-bottom, 20px);

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
