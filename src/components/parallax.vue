<template>
	<div id="parallax" class="parallax">
		<div class="ball-container">
			<div class="action">
				<figure class="ball">
					<span class="shadow"></span>
				</figure>
			</div>

			<div class="action two">
				<figure class="ball">
					<span class="shadow"></span>
				</figure>
			</div>

			<div class="action three">
				<figure class="ball">
					<span class="shadow"></span>
				</figure>
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

	.parallax
		@include perspective(1200px);
		@include perspective-origin(50% 50%);

		.ball-container
			@include abs-pos(0, 0, 0, 0);

		@keyframes move-bubble
			0%
				-webkit-transform: translateX(-50%) rotateZ(-30deg);
				transform: translateX(-50%) rotateZ(-30deg);
				opacity: 0;

			10%
				opacity: 1;

			80%
				opacity: 1;

			100%
				opacity: 0;
				-webkit-transform: translateX(-50%) rotateZ(30deg);
				transform: translateX(-50%) rotateZ(30deg);

		.action
			@include animation(move-bubble 15s linear infinite);
			@include abs-pos(-50%, auto, auto, 50%);
			@include rem(margin, 20px);
			@include size(24em, 24em);
			@include transform-origin(-200% 200%);
			-webkit-transform: translateX(-75%);
			opacity: 0;
			transform: translateX(-75%);

			&.two
				@include transform-origin(-300% -100%);
				left: 70%;
				top: 20%;

			&.three
				@include transform-origin(200% 200%);
				left: 30%;

		.ball
			@include size(300px, 300px);
			display: block;
			background: $color-dark-gold;
			background: radial-gradient(circle at 100px 100px, $color-gold, $color-dark-gold);
			border-radius: 50%;
			margin: 0;

			.shadow
					@include size(100%, 100%);
					position: absolute;
					background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0) 50%);
					-webkit-transform: rotateX(90deg) translateZ(-150px);
					-moz-transform: rotateX(90deg) translateZ(-150px);
					-ms-transform: rotateX(90deg) translateZ(-150px);
					-o-transform: rotateX(90deg) translateZ(-150px);
					transform: rotateX(90deg) translateZ(-150px);
					z-index: -1;

</style>
