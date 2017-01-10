<template>
	<div class="wrapper">
		<div class="container">
			<site-header></site-header>
			<main>
				<div class="container">
					<b-jumbotron fluid>
						<h1 class="display-3">Event Details</h1>
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
											<p class="card-text">Our big day is on <b>Saturday, November 3rd</b> at Location Name</p>
											<address class="card-text">
												Room Location<br />
												Street Address<br />
												City, State, ZIP
											</address>
											<p class="card-text">Parking is &hellip; If you would like, please use our code for a discounted ride via Lyft.</p>

											<p class="card-text">Download <a href="#" class="card-link">Waze</a> for the best route to the venue.</p>
										</div>
									</b-card>

									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-clock-o"></i>
											Time
										</h2>
										<div class="card-block">
											<p class="card-text">The doors open at 4:30 p.m. <b>Entry will not be allowed after 5:15 p.m.</b>, as the main event starts promptly at 5:30 p.m.</p>

											<p>The party should last until 10pm.</p>
										</div>

										<h2>
											<i class="fa fa-music"></i>
											The Party
										</h2>
										<div class="card-block">
											<p class="card-text">Be prepared to have a great time. There will be dancing and entertainment. Use our hashtag when posting videos and photos: <b>#DavidAndDacia</b>.</p>
										</div>
									</b-card>

									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-cutlery"></i>
											Food &amp; Drink
										</h2>
										<div class="card-block">
											<p class="card-text">Dinner will be served family style with both Haitian and American courses. You can leave your beer money at home, the drinks are on us! We will have wine, liquor, beer, and non alcoholic options as well. We just ask that you tip the bartenders.</p>

											<p>The menu includes meat one, meat two, meat three, salad one, sides one, sides two, and sides three.</p>
										</div>
									</b-card>
								</div>

								<div class="card-deck">
									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-male"></i>
											<i class="fa fa-female"></i>
											Attire
										</h2>
										<div class="card-block">
											<p class="card-text">We are requesting <b>semiformal attire</b> for our event. Guidelines:</p>

											<dl>
												<dt>Women</dt>
												<dd>Short afternoon or cocktail dress</dd>
												<dd>A “little black dress”</dd>
												<dd>Long dressy skirt and top</dd>
												<dd>Dressy separates</dd>
											</dl>

											<dl>
												<dt>Men</dt>
												<dd>Dark, business suit</dd>
												<dd>Matching vest (optional)</dd>
												<dd>Dress shirt</dd>
												<dd>Tie</dd>
												<dd>Dress shoes and dress socks</dd>
											</dl>
										</div>
									</b-card>

									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-child"></i>
											Childcare
										</h2>
										<div class="card-block">
											<p class="card-text">Many of our friends and family members have children. We do not want you and your family to feel excluded; therefore, we will have childcare provided by AGENCY.</p>

											<p class="card-text">We want the parents AND the kids to have a great time at our event!!</p>

											<p class="card-text">We will have food, drinks, entertainment and activities for the kids. We only ask that you tip our childcare providers.</p>
										</div>
									</b-card>

									<b-card variant="default" type="default" align="left">
										<h2>
											<i class="fa fa-envelope-o"></i>
											RSVP
										</h2>
										<div class="card-block">
											<p class="card-text">We are excited to have you as our guest!!!</p>

											<p class="card-text">Please <router-link class="card-link" to="/rsvp">RSVP here</router-link> by <b>September 14th</b>. It is very important that you RSVP by this date, so we can finalize our plans.</p>
										</div>

										<h2>
											<i class="fa fa-gift"></i>
											Gifts/Registry
										</h2>
										<div class="card-block">
											<p class="card-text">We know that you want to be a blessing to us, and since we already have a beautiful home, we will not have a traditional registry. Instead, you can contribute to our honeymoon fund or cash via Google Wallet or PayPal.</p>
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
