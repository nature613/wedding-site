<template>
	<div class="container">
		<site-header></site-header>
		<main>
			<div class="container">
				<p>Hotels</p>
				<p>For our guests flying into Chicago, please use airport code MDW for Midway airport or ORD for O'Hare airport. Our advice, fly into Midway for less congestion.</p>
				<!-- item 1 -->
				<b-collapse-toggle target="item-1" target-group="accordion-1">
					<div><a href="#">Collapsible Group Item #1</a></div>
				</b-collapse-toggle>
				<b-collapse id="item-1" group="accordion-1">
					<div class="card card-block">
						<h5>First</h5>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</b-collapse>

				<!-- item 2 -->
				<b-collapse-toggle target="item-2" target-group="accordion-1">
					<div><a href="#">Collapsible Group Item #2</a></div>
				</b-collapse-toggle>
				<b-collapse id="item-2" group="accordion-1">
					<div class="card card-block">
						<h5>Second</h5>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</b-collapse>

				<!-- item 3-->
				<b-collapse-toggle target="item-3" target-group="accordion-1">
					<div><a href="#">Collapsible Group Item #3</a></div>
				</b-collapse-toggle>
				<b-collapse id="item-3" group="accordion-1">
					<div class="card card-block">
						<h5>Third</h5>
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</b-collapse>
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
