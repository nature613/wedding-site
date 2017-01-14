<template>
	<div id="intro" class="row">
		<div class="background">
			<div class="layer">
				<div class="foreground">
					<p id="welcome">Welcome to the wedding website of</p>
					<h2 id="name">Dacia <span>&amp;</span> Dacia</h2>
					<h3 id="official"><span>The</span> Rodrigues</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'intro',
	mounted: function() {
		this.fadeOut();
	},
	methods: {
		fadeOut() {
			const intro = document.getElementById('intro')

			setTimeout(function() {
				console.log(2);
				intro.className += ' fadeOut';
			}, 5000);
		}
	}
}

</script>

<style lang="sass" scoped>
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	#intro
		.background
			@include size(100%, 100%);
			background: $background4;
			position: fixed;
			left: 0px;
			top: 0px;
			z-index: 9999;

			.layer
				@include abs-pos(40%, auto, auto, 50%);
				@include translate(-50%, -50%);
				position: fixed;
				z-index: 100;

		p
			@include rem(font-size, 20px);
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

		#welcome
			@include animation(welcome 5s ease-out 1);

		#name
			@include animation(name 5s ease-out 1);

		#official
			@include animation(official 5s ease-out 1);

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

		&.fadeOut
			@include transition(all .6s);
			opacity: 0;

			.background
				@include size(auto, 0);
				@include transition(all .5s);
				background: transparent;
				position: relative;
				z-index: -1;
</style>
