<template>
	<div class="wrapper">
		<site-header></site-header>
		<div class="container">
			<main>
				<div class="container">
					<p>Music: DJ</p>
					<b-form-checkbox :list.sync="[{ text: 'First', value: 'first', }, { text: 'Second', value: 'second', }, { text: 'Third', value: 'third', disabled: true }]" :state="'default'" :custom="false" vertical return-object>
					</b-form-checkbox>
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
