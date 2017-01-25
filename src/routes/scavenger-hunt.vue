<template>
	<div class="wrapper">
		<site-header></site-header>
		<div class="container">
			<main>
				<div class="container">
					<p>Scavenger Hunt</p>
				</div>
			</main>
			<site-footer></site-footer>
		</div>
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
