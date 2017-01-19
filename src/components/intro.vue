<template>
	<div id="intro" class="row">
		<div class="background">
			<div class="layer">
				<div class="foreground">
					<p id="welcome">Welcome to the wedding website of</p>
					<h2 id="name">David <span>&amp;</span> Dacia</h2>
					<h3 id="official"><span>The</span> Rodrigues</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'intro',
	mounted() {
		setTimeout(function() {
			document.getElementById('intro').className += ' fadeOut';
			document.getElementById('home').className += ' fadeIn';
		}, 6000);
	}
}

</script>

<style lang="sass" scoped>
	@import '../styles/_tools.mixins.sass';
	@import '../styles/_variables.sass';

	#intro
		.background
			@include size(100%, 100%);
			background: $background3;
			position: fixed;
			left: 0px;
			top: 0px;
			z-index: 9999;

			.layer
				@include translate(auto, -50%);
				align-items: center;
				display: flex;
				justify-content: center;
				position: relative;
				top: 30%;

		p
			@include rem(font-size, 24px);
			color: $text;
			font-family: $font-stack-sans-serif2;

		h2, h3
			@include rem(margin-bottom, 12px);
			color: $text;
			font: 700 9rem/1 $font-stack-sans-serif2;
			text-shadow: $text-shadow;
			text-transform: uppercase;

			span
				@include rem(font-size, 55px);

		h3
			@include rem(font-size, 50px);

			span
				@include rem(font-size, 26px);

		#welcome
			@include animation(welcome 7s ease-out 1);

		#name
			@include animation(name 7s ease-out 1);
			white-space: nowrap;

			@include tablet
				white-space: normal;

		#official
			@include animation(official 7s ease-out 1);

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

			.background
				opacity: 0;
				z-index: -1;
</style>
