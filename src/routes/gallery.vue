<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Gallery</p>
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
