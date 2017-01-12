<template>
	<div id="intro" class="row">
		<div class="background">
			<div class="layer">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
						<p class="welcome">Welcome to the wedding website of</p>
						<h2 class="name">Dacia <span>&amp;</span> Dacia</h2>
						<h3 class="official"><span>The</span> Rodrigues</h3>
				</div>
				</div class="col-lg-2"></div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
}

</script>

<style lang="sass" scoped>
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	#intro
		.background
			@include size(100%, 100%);
			background: $background4;;
			position: fixed;
			left: 0px;
			top: 0px;
			z-index: 9999;

			.layer
				@include abs-pos(30%, auto, auto, 50%);
				@include translate(-50%, -50%);
				position: fixed;
				z-index: 100;

		p
			font-family: $font-stack-sans-serif2;

		h2, h3
			color: $text;
			font: 700 8rem/1 $font-stack-sans-serif2;
			text-shadow: $text-shadow;
			text-transform: uppercase;

			span
				@include rem(font-size, 50px);

		h3
			@include rem(font-size, 60px);

			span
				@include rem(font-size, 30px);

		.welcome
			@include animation(welcome 10s ease-out 1);

		.name
			@include animation(name 10s ease-out 1);

		.official
			@include animation(official 10s ease-out 1);

		@keyframes welcome
			0%
				opacity: 0;
				transform: scale(1.5) translateY(-0.75em);

			20%
				opacity: 1;

			89%
				opacity: 1;
				transform: scale(1);

			100%
				opacity: 0;
				transform: translateZ(-1000em);

		@keyframes name
			0%
				opacity: 0;
				transform: scale(1.5) translateY(0.5em);

			20%
				opacity: 1;

			90%
				opacity: 1;
				transform: scale(1);

			100%
				opacity: 0;
				transform: translateZ(-1000em);

		@keyframes official
			0%
				opacity: 0;
				transform: scale(1.5) translateY(0.5em);

			20%
				opacity: 1;

			90%
				opacity: 1;
				transform: scale(1);

			100%
				opacity: 0;
				transform: translateZ(-1000em);
</style>
