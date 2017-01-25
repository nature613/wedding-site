<template>
	<div id="intro" class="row" :class="{ displayIt: ranIntro }">
		<div class="background">
			<div class="layer">
				<div class="foreground">
					<p id="welcome">Welcome to the wedding website of</p>
					<h2 id="name">David <span>&amp;</span> Dacia</h2>
					<h3 id="official"><span>The</span> Rodrigue <span>s</span></h3>
				</div>
			</div>
		</div>
		<div class="intro-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'intro',
		computed: {
			ranIntro: function () {
				return localStorage.getItem('intro');
			}
		},
		mounted() {
			const ranIntro = this.ranIntro;
			localStorage.setItem('intro', 'true');
			if (!ranIntro) {
				setTimeout(function() {
					document.getElementById('intro').className += ' fadeOut';
					document.querySelector('.intro-content').className += ' fadeIn';
				}, 6000);
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
			background: $background3;
			position: fixed;
			left: 0px;
			top: 0px;
			z-index: 9999;

			.layer
				@include abs-pos(30%, auto, auto, 50%);
				position: fixed;
				transform: translateX(-50%) translateY(-50%);
				z-index: 100;
				// align-items: center;
				// display: flex;
				// justify-content: center;
				// position: relative;
				// top: 30%;
				// translate: auto -50%;

				.foreground
					@include rem(margin, 60px auto 0 20px);
					max-width: 820px;
					min-width: 260px;
					width: 100%;

		p
			color: $text;
			font-family: $font-stack-sans-serif2;

			@include tablet-large
				@include rem(font-size, 24px);

		h2, h3
			@include rem(margin-bottom, 12px);
			color: $text;
			font: 700 30px/1 $font-stack-sans-serif2;
			text-shadow: $text-shadow;
			text-transform: uppercase;

			@include tablet-large
				@include rem(font-size, 90px);

			span
				@include rem(font-size, 24px);

				@include tablet-large
					@include rem(font-size, 55px);

		h3
			@include rem(font-size, 22px);

			@include tablet-large
				@include rem(font-size, 50px);

			span
				@include rem(font-size, 14px);

				@include tablet-large
					@include rem(font-size, 26px);

		#welcome
			animation: welcome 7s ease-out 1;

		#name
			animation: name 7s ease-out 1;
			white-space: nowrap;

			@include tablet
				white-space: normal;

		#official
			animation: official 7s ease-out 1;

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

		.intro-content
			opacity: 0;

			&.fadeIn
				opacity: 1;
				transition: opacity .65s;

		&.displayIt
			.intro-content
				opacity: 1;

			.background
				opacity: 0;
				z-index: -1;

				.wrapper
					opacity: 1;

		&.fadeOut
			transition: all .6s;

			.background
				opacity: 0;
				z-index: -1;

</style>
