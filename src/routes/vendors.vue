<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Vendors</p>
				<!-- TODO: Add animation to todo list task  -->

				<b-jumbotron fluid>
					<h1 class="display-3">Hello, world!</h1>
					<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<hr class="m-y-md">
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<p class="lead">
						<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
					</p>
				</b-jumbotron>
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
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_main.sass';
</style>
