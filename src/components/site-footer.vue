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

export default {
}

</script>

<style lang="sass" scoped>
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	#footer
		@include rem(margin-top, 40px);

	.bg-faded
		background: linear-gradient(transparent, $background3);

	h2
		color: $text;
		font: 700 6rem/1 $font-stack-sans-serif2;
		text-shadow: $text-shadow;
		text-transform: uppercase;

		span
			@include rem(font-size, $base-font-size);

	p
		@include rem(font-size, $base-font-size);
		color: $text;

		&.copyright
			@include rem(font-size, 7px);
			@include rem(margin-top, 10px);
			color: $text;
</style>
