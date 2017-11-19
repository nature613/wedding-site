<template>
	<div class="ui relaxed grid">
		<div class="ui stackable sixteen column row equal height">
			<div class="eight wide computer eight wide tablet sixteen wide mobile column">
				<div class="ui cards">
					<div class="ui card">
						<div class="content">
							<div class="header"><router-link to="/wedding">Wedding Celebration</router-link></div>
							<div class="description">
								<p>Our wedding celebration is on
									<em>Saturday, November 3<sup>rd</sup>, 2018</em><br />
									It will be held at the
									<em><a href="https://www.google.com/maps/place/Chicago+Sports+Museum/@41.897972,-87.6241665,19z/data=!4m5!3m4!1s0x880fd3547a49a0c3:0x44868a15ba540fcc!8m2!3d41.897972!4d-87.623614" target="_blank">Chicago Sports Museum</a></em> at the Water Tower Place.
								</p>
							</div>
						</div>
						<div class="extra content">
							<span class="left floated">
								<router-link to="/wedding">Details</router-link>
							</span>
							<span class="right floated">
								<router-link to="/rsvp">RSVP</router-link>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="eight wide computer eight wide tablet sixteen wide mobile column">
				<div class="ui cards">
					<div class="ui card">
						<div class="content">
							<div class="header"><router-link to="/chicago">While in Chicago</router-link></div>
							<div class="description">
								<p>For out of town guests (locals are welcome too), Dacia + David is sharing a collection of restaurants, activities, and hotels that you must visit while in town!</p>
							</div>
						</div>
						<div class="extra content">
							<div class="right floated author">
								<router-link to="/chicago">Hotels, Restaurants, Activites</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="sixteen wide column"></div>
		</div>
	</div>
</template>

<style scoped lang="sass">

	.column
		.ui.cards > .card
			min-height: 230px
			width: 100%

			@include tablet-large
				min-height: 250px

			@include tablet-small
				min-height: 150px

			> .content,
			> .card > .content
				@include rem(padding, 20px 30px 0)

				@include desktop
					@include rem(padding-left, 20px)
					@include rem(padding-right, 20px)

				&.extra
					@include rem(padding-bottom, 10px)

					@include desktop
						@include rem(padding-left, 20px)
						@include rem(padding-right, 20px)

				.description
					p
						font-size: 20px

						@include tablet
							font-size: 18px

						em
							color: $text8

</style>
