<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>While in Chicago</p>
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

•	Guesthouse Inn & Suites Monroe ($)
•	Hilton Garden Inn Seattle/Bothell ($$)
•	Willows Lodge Woodinville ($$$)

Many other lodging accommodations are available closer to downtown Seattle; we recommend you look for lodging there if you’re planning on exploring the city a bunch over the weekend.

Any questions, comments, concerns, playlist requests, or accommodation inquiries, feel free to contact Katie or Luke: katieplusluke@gmail.com

</p>
			</div>
		</main>
		<site-footer></site-footer>
	</div>
</template>

<script>
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'

export default {
	components: {
		SiteFooter,
		SiteHeader
	}
}
</script>

<style lang="sass">
@import '../styles/_main.sass';
</style>
