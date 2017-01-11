<template>
	<div class="wrapper">
		<div class="container">
			<site-header></site-header>
			<main>
				<div class="container">
					<b-jumbotron fluid>
						<h1 class="display-3">Family Information</h1>
					</b-jumbotron>

					<div class="row">
						<div class="col-lg-12">
							<div class="card-deck-wrapper">
								<div class="card-deck">
									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-calendar"></i>
											When &amp; Where
										</h2>
										<div class="card-block">
											<p class="card-text">Family dinner is on <b>Friday, November 2nd</b> at Location Name</p>
											<address class="card-text">
												Room Location<br />
												Street Address<br />
												City, State, ZIP
											</address>
											<p class="card-text">Parking is &hellip; If you would like, please use our code for a discounted ride via Lyft.</p>

											<p class="card-text">Download <a href="#" class="card-link">Waze</a> for the best route to the venue.</p>
										</div>

										<h2>
											<i class="fa fa-clock-o"></i>
											Time
										</h2>
										<div class="card-block">
											<p class="card-text">We will be seated at 6pm.</p>

											<p>Dinner should last until 8:45pm.</p>
										</div>
									</b-card>

									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-envelope-o"></i>
											RSVP
										</h2>
										<div class="card-block">
											<p class="card-text">We are excited to have you as our guest!!!</p>

											<p class="card-text">Please <router-link class="card-link" to="/rsvp">RSVP here</router-link> by <b>Otober 14th</b>. It is very important that you RSVP by this date, so we can finalize our plans.</p>
										</div>

										<h2>
											<i class="fa fa-cutlery"></i>
											Food &amp; Drink
										</h2>
										<div class="card-block">
											<p class="card-text">There will be a huge roasted pig!!!!</p>

											<p>The menu includes meat one, meat two, meat three, salad one, sides one, sides two, and sides three.</p>
										</div>
									</b-card>
								</div>
							</div>
						</div>
					</div>
					<any-questions></any-questions>
				</div>
			</main>
		</div>
		<site-footer></site-footer>
	</div>
</template>

<script>
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'
import RSVPs from '../components/rsvps'
import AnyQuestions from '../components/any-questions'

export default {
	components: {
		SiteFooter,
		SiteHeader,
		RSVPs,
		AnyQuestions
	}
}
</script>

<style lang="sass" scoped>
@import '../styles/_main.sass';

.wrapper
	color: $text2;
	background-color: $color-purple;
	background-blend-mode: multiply;

	.jumbotron
		background: $background url('../assets/backgrounds/background-wedding.jpg') 50% 62% no-repeat;
		background-size: cover;
		color: $text;
		text-shadow: $text-shadow;
		width: 100%;

	.card-deck
		.card
			padding-top: 2.5rem;
			text-align: left;

			h2
				color: $text3;
				text-align: center;

			.fa-male
				margin-right: 0;

			.card-block
				margin-bottom: 2rem;

				dt
					font-family: $font-stack-sans-serif2;
					font-weight: 900;

				dd
					font-size: .9rem;
					margin-bottom: 0;
					padding-left: 1rem;
					position: relative;

					&:before
						color: $text3;
						content: '\00B7';
						font-size: 3rem;
						left: 0rem;
						position: absolute;
						top: -2rem;
</style>
