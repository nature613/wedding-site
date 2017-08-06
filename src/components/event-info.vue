<template>
	<div class="row">
		<div class="col-xl-6 pl-0">
			<b-card variant="default" type="default" align="left">
				<router-link to="/wedding"><h3 class="card-title">Wedding Celebration</h3></router-link>
				<p class="card-text">Our wedding celebration is on
					<em>Saturday, November 3<sup>rd</sup>, 2018</em><br />
					It will be held at the
					<em><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank">Chicago Sports Museum</a></em>
				</p>
				<p>
					<router-link class="card-link" to="/wedding">Details</router-link>
					<router-link class="card-link" to="/rsvp">RSVP</router-link>
				</p>
			</b-card>
		</div>
		<div class="col-xl-6 pl-0">
			<b-card variant="default" type="default" align="left">
				<router-link to="/chicago"><h3 class="card-title">While in Chicago</h3></router-link>
				<p class="card-text">For out of town guests and the locals, Dacia + David is sharing a collection of restaurants, activites, and hotels that you must visit while in town!</p>
				<p class="information">
					<router-link class="card-link" to="/chicago">Hotels, Restaurants, Activites</router-link>
				</p>
			</b-card>
		</div>
	</div>
</template>

<script>

	export default {
	}

</script>

<style lang="sass" scoped>

	@import '../styles/main.sass'

	.card
		min-height: 203px

		.card-block
			> a
				@include rem(margin-bottom, 10px)

			.card-title
				line-height: 1.4
				margin-bottom: 0

			p:first-of-type
				min-height: 72px

			.card-text
				em
					@include bold()
					color: $text8
					font-size: 18px

</style>
