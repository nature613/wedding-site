<template>
	<div id="footer">
		<b-navbar type="light" variant="default" full>
			<div class="col-lg-12">
				<h2><span>The</span> Rodrigues</h2>
				<p><em>&hellip; coming November 3rd, 2018</em></p>
				<p class="copyright">&copy; 2016 - 2018 website designed, developed by David and Dacia</p>
			</div>
		</b-navbar>
	</div>
</template>

<script>
</script>

<style lang="sass" scoped>
	@import '../styles/_variables.sass';

	#footer
		margin-top: 4rem;

	.bg-faded
		background: linear-gradient(transparent, $background3);

	h2
		color: $text;
		font: 700 6rem/1 $font-stack-sans-serif2;
		text-shadow: $text-shadow;
		text-transform: uppercase;

		span
			font-size: $base-font-size;

	p
		color: $text;
		font-size: $base-font-size;

		&.copyright
			color: $text;
			font-size: .7rem;
			margin-top: 1rem;
</style>
