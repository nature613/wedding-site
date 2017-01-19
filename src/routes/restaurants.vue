<template>
	<div class="wrapper parallax">
		<parallax></parallax>
		<div class="container">
			<site-header></site-header>
			<main>
				<div class="container">
					<p>Restaurants - These are places David and I actually go to/went to over the last few years. We love a good meal, so while in town, please checkout some of our recommendations.</p>

	ZED451	$$$		Steakhouse
	Xoco		$$		Mexican
	Wishbone	$$$	Steakhouse
	Tavern on the Park	$$	American
	Sunda		$$	Japanese/Sushi
	South Branch Tavern &amp; Grille	$$	American
	South Water Kitchen	$$	American
	Smith &amp; Wollensky $$$$	Steakhouse
	Shaw's Crab House	$$$	Seafood
	Roy's Chicago		$$$ Asian Fusion
	RPM Italian 	$$$		Italian
	RPM Steak 	$$$$	Steakhouse
	Ruth's Chris Steak House	$$$ Steakhouse
	Public House 	$$$	American
	The Promontory 	$$$	American Contemporary
	Michael Jordan's Steak House $$$	Steakhouse
	Mercadito Chicago $$$	Mexican
	McCormick &amp; Schmick’s Seafood &amp; Steaks	$$$$	Seafood
	Home Run Inn Pizza	$$ Pizza
	Grange Hall Burger Bar $$ American
	Geja's Café 	$$	Fondue
	Frontier 	$$	American Contemporary
	Eddie V’s Prime Seafood 	$$$	Seafood
	The Duck Inn 	$$	American Contemporary
	Ditka's Restaurant 	$$$	Steakhouse
	Demera Ethiopian Restaurant 	$$	African
	Connie's Pizza		$		Pizza
	Chuck’s: A Kerry Simon Kitchen 	$$	American Contemporary
	Chicago q 	$$	BBQ/Ribs
	Cantina Laredo 	$$	Mexican River
	The Capital Grille $$$	Steakhouse
	Carnivale 	$$$	Latin
	Catch 35 		$$	Seafood
	Bub City	$$	BBQ/Ribs
	bellyQ		$$$	Asian Fusion
	Bar Takito 	$$	Latin

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
	</div>
</template>

<script>
import SiteFooter from '../components/site-footer'
import SiteHeader from '../components/site-header'
import Parallax from '../components/parallax'

export default {
	components: {
		SiteFooter,
		SiteHeader,
		Parallax
	}
}
</script>

<style lang="sass">
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_main.sass';
</style>
