<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Our <b>official</b> guide to <b>Chicago, Illinois</b></p>
				<p>Places you must visit while in town!</p>
				<b-jumbotron fluid>
					<h1 class="display-3">Hello, world!</h1>
					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<hr class="m-y-md">
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<p class="lead">
						<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					</p>
				</b-jumbotron>

				<p>If you are joining us from out of town, you may wish to book a hotel reservation. Some hotels we can recommend that are located closer to the venue include:

•	TBD ($)
•	TBD ($$)
•	TBD ($$$)

Many other lodging accommodations are available closer to downtown Chicago; we recommend you look for lodging there if you’re planning on exploring the city a bunch over the weekend.

</p>

<p>Use My Maps from Google to help with this</p>

Places to Eat
BEL 50
Bakin' & Eggs
Bongo Room
Burger Bar Chicago
Cassava
Chicago's Pizza
Chick-fil-A Loyola Water Tower
Do-Rite Donuts
Flaco's Tacos
Grange Hall Burger Bar
Ipsento
Irazu
Little Goat Diner
Margie's Candies
Olive Mediterranean Grill
Uncle Julio's
Waffles
Wilde Bar & Restaurant
Yogen Früz
hello!
Places to Go/Things to Do
The Art Institute of Chicago
Blue Man Group
Chicago Cultural Center
Garfield Park Conservatory
The Green Mill
Half Acre Beer Tour
iO - Improv Olympics
John Hancock Building
Magnificent Mile
Millennium Park
Museum of Contemporary Art
Museum of Science & Industry, Chicago
Navy Pier
Oak Street Beach
Sear's [Willis] Tower SkyDeck
The Second City
Shedd Aquarium
TMLMTBGB
Wicker Park
howdy!
Special Events
The Wedding, Duh!
Cubs v. Pirates
Fireworks!
First Fridays at Flat Iron Arts Building
First Fridays at the MCA
Grant Park Music Festival
Hyatt Regency McCormick Place
Missio Dei Chicago
Movies in the Park
White Sox v. Orioles
Windy City Ribfest
sup!

				<any-questions></any-questions>
			</div>
		</main>
		<site-footer></site-footer>
	</div>
</template>

<script>
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'
import AnyQuestions from '../components/any-questions'

export default {
	components: {
		SiteFooter,
		SiteHeader,
		AnyQuestions
	}
}
</script>

<style lang="sass">
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_main.sass';
</style>
