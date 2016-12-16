<template>
	<div id="footer">
		<div class="row">
			<b-navbar fixed="bottom" type="light" variant="default" full>
				<div class="col-lg-12">
					<h2><span>The</span> Rodrigues</h2>
					<p><em>&hellip; coming November 3rd, 2018</em></p>
				</div>
			</b-navbar>
		</div>
	</div>
</template>

<script>
</script>

<style lang="sass" scoped>
	@import '../styles/_variables.sass';

	.bg-faded
		background: linear-gradient(transparent, $background3);

	h2
		font: 700 6rem/1 $font-stack-sans-serif2;
		text-shadow: .2rem .15rem $background;
		text-transform: uppercase;

		span
			font-size: $base-font-size;

	p
		font-size: $base-font-size;
</style>
